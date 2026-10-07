import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveHUD } from './components/LiveHUD';
import { TheProblem } from './components/TheProblem';
import { SatelliteComparison } from './components/SatelliteComparison';
import { HarmonizationPipeline } from './components/HarmonizationPipeline';
import { InteractiveMap } from './components/InteractiveMap';
import { FireEventCard } from './components/FireEventCard';
import { BeforeAfter } from './components/BeforeAfter';
import { BurningCalendar } from './components/BurningCalendar';
import { DataValidationDashboard } from './components/DataValidationDashboard';
import { DataPipelineStages } from './components/DataPipelineStages';
import { DataSources } from './components/DataSources';
import { IntelligenceCards } from './components/IntelligenceCards';
import { StorytellingSection } from './components/StorytellingSection';
import { WhyItMatters } from './components/WhyItMatters';
import { ScientificLimitations } from './components/ScientificLimitations';
import { TechStack } from './components/TechStack';
import { AboutFireFusion } from './components/AboutFireFusion';
import { JudgeDemoModal } from './components/JudgeDemoModal';
import { Footer } from './components/Footer';

import {
  AUTHENTIC_VIIRS_OBSERVATIONS,
  AUTHENTIC_MODIS_BENCHMARK_OBSERVATIONS,
  INITIAL_PROVENANCE,
  PREDEFINED_AOIS,
} from './data/firmsData';
import {
  clusterObservationsIntoEvents,
  buildBurningActivityCalendar,
  DEFAULT_PARAMETERS,
} from './services/harmonizationEngine';
import { FireFusionEvent, CalendarPeriod, AreaOfInterest } from './types/fire';

export default function App() {
  const [modisLoaded, setModisLoaded] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<FireFusionEvent | null>(null);
  const [selectedAoi, setSelectedAoi] = useState<AreaOfInterest>(PREDEFINED_AOIS[0]);
  const [granularity, setGranularity] = useState<'day' | 'week' | 'month'>('day');
  const [selectedPeriod, setSelectedPeriod] = useState<CalendarPeriod | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);

  // Dynamic observations based on MODIS toggle
  const observations = useMemo(() => {
    if (modisLoaded) {
      return [...AUTHENTIC_VIIRS_OBSERVATIONS, ...AUTHENTIC_MODIS_BENCHMARK_OBSERVATIONS];
    }
    return AUTHENTIC_VIIRS_OBSERVATIONS;
  }, [modisLoaded]);

  // Dynamically cluster observations into FireFusion Events
  const events = useMemo(() => {
    return clusterObservationsIntoEvents(observations, DEFAULT_PARAMETERS);
  }, [observations]);

  // Dynamically aggregate into the Burning Activity Calendar
  const calendarPeriods = useMemo(() => {
    return buildBurningActivityCalendar(observations, events, granularity);
  }, [observations, events, granularity]);

  // Provenance metadata state
  const provenance = useMemo(() => {
    return {
      ...INITIAL_PROVENANCE,
      modis_available: modisLoaded,
      sources: INITIAL_PROVENANCE.sources.map((s) => {
        if (s.name.includes('MODIS')) {
          return { ...s, loaded: modisLoaded };
        }
        return s;
      }),
    };
  }, [modisLoaded]);

  // Calculate mean association score across events
  const meanAssociationScore = useMemo(() => {
    if (events.length === 0) return 92;
    const sum = events.reduce((acc, ev) => acc + ev.association_score_avg, 0);
    return Math.round(sum / events.length);
  }, [events]);

  const toggleModis = () => {
    setModisLoaded((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F5F7FA] selection:bg-[#FF6A2A]/30 selection:text-white relative">
      {/* 01 Navigation */}
      <Navbar
        modisLoaded={modisLoaded}
        onToggleModis={toggleModis}
        onLaunchDemo={() => setDemoModalOpen(true)}
        totalEvents={events.length}
        totalObs={observations.length}
      />

      <main>
        {/* 02 Hero */}
        <Hero
          onExploreClick={() => scrollToSection('fire-map')}
          onMethodologyClick={() => scrollToSection('methodology')}
          onLaunchDemo={() => setDemoModalOpen(true)}
          modisLoaded={modisLoaded}
          totalEvents={events.length}
        />

        {/* 03 Live Data HUD */}
        <LiveHUD
          provenance={provenance}
          modisLoaded={modisLoaded}
          onToggleModis={toggleModis}
          totalEvents={events.length}
          totalObs={observations.length}
          meanAssociationScore={meanAssociationScore}
        />

        {/* 04 The Problem */}
        <TheProblem />

        {/* 05 MODIS vs VIIRS Perspective Comparison */}
        <SatelliteComparison />

        {/* 06 Harmonization Pipeline */}
        <HarmonizationPipeline />

        {/* 07 Interactive Fire Map */}
        <InteractiveMap
          observations={observations}
          events={events}
          selectedEvent={selectedEvent}
          onSelectEvent={setSelectedEvent}
          modisLoaded={modisLoaded}
          selectedAoi={selectedAoi}
          onSelectAoi={setSelectedAoi}
        />

        {/* 08 Before vs After */}
        <BeforeAfter />

        {/* 09 Burning Activity Calendar */}
        <BurningCalendar
          periods={calendarPeriods}
          selectedPeriod={selectedPeriod || calendarPeriods[0] || null}
          onSelectPeriod={setSelectedPeriod}
          granularity={granularity}
          onChangeGranularity={setGranularity}
        />

        {/* 10 7-Stage Pipeline Workflow */}
        <DataPipelineStages />

        {/* 11 Data Validation & Quality Dashboard */}
        <DataValidationDashboard provenance={provenance} />

        {/* 12 Data Sources */}
        <DataSources />

        {/* 13 Raw Observations to Useful Intelligence */}
        <IntelligenceCards />

        {/* 14 Visual Storytelling Section */}
        <StorytellingSection />

        {/* 15 Operational & Scientific Value (Why It Matters) */}
        <WhyItMatters />

        {/* 16 Scientific Limitations & Disclaimers */}
        <ScientificLimitations />

        {/* 17 Technical Stack & References */}
        <TechStack />

        {/* 18 About FireFusion: Project Information & NASA Space Apps Challenge 2026 */}
        <AboutFireFusion />
      </main>

      {/* 18 Footer */}
      <Footer />

      {/* Fire Event Detail Modal */}
      <FireEventCard
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Judge Interactive Walkthrough Modal */}
      <JudgeDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onSelectEvent={(ev) => {
          setSelectedEvent(ev);
        }}
        onSelectAoi={(aoiId) => {
          const aoi = PREDEFINED_AOIS.find((a) => a.id === aoiId);
          if (aoi) setSelectedAoi(aoi);
        }}
        sampleEvent={events[0]}
        modisLoaded={modisLoaded}
        onToggleModis={toggleModis}
        onScrollToSection={scrollToSection}
      />
    </div>
  );
}
