import React from 'react';
import { Code2, Cpu, Database, ExternalLink, Layers, Terminal } from 'lucide-react';

export const TechStack: React.FC = () => {
  const stack = [
    {
      category: 'UI & Interaction',
      items: ['React 19 (SPA)', 'TypeScript 5.7', 'Tailwind CSS v4', 'Lucide React'],
      color: '#42A5FF',
    },
    {
      category: 'Geospatial Visualization',
      items: ['Leaflet 1.9', 'ArcGIS World Imagery', 'World Topo Terrain', 'Canvas Particle Engine'],
      color: '#55C98A',
    },
    {
      category: 'Harmonization & Science',
      items: ['ST-DBSCAN Clustering', 'Geodesic Haversine Metric', 'Temporal Overpass Windowing', '4-Part Concordance Scoring'],
      color: '#FF6A2A',
    },
    {
      category: 'Data Provenance',
      items: ['NASA FIRMS Collection 2', 'MODIS Collection 6.1 Specs', 'UTC ISO Timestamping', 'Audit Quality Flags'],
      color: '#FFB000',
    },
  ];

  const citations = [
    {
      title: 'NASA FIRMS — MODIS & VIIRS Active Fire Hotspots',
      desc: 'Official NASA Earth Science Data and Information System (ESDIS) Project.',
      url: 'https://firms.modaps.eosdis.nasa.gov/',
    },
    {
      title: 'NASA MODIS Collection 6 / 6.1 Active Fire User Guide',
      desc: 'Giglio, L., Schroeder, W., & Justice, C. O. Earthdata MODIS Documentation.',
      url: 'https://earthdata.nasa.gov/',
    },
    {
      title: 'Cross-Sensor MODIS and VIIRS Fire Radiative Power Comparisons',
      desc: 'Remote Sensing peer-reviewed literature on spatial resolution omission and FRP retrieval.',
      url: 'https://doi.org/10.3390/rs6010244',
    },
    {
      title: 'Adaptive Spatiotemporal Clustering of Satellite Active-Fire Observations',
      desc: 'Methodological basis for ST-DBSCAN event delineation from point hotspots.',
      url: 'https://doi.org/10.1016/j.rse.2017.06.027',
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#42A5FF] uppercase tracking-wider mb-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>Technical Architecture</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
          Built for Earth Observation.
        </h2>
        <p className="text-base text-[#9AA6B2]">
          Production-grade frontend geospatial architecture combined with peer-reviewed scientific methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {stack.map((st) => (
          <div
            key={st.category}
            className="p-5 rounded-2xl bg-[#0B1018] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div
                className="text-xs font-mono font-bold tracking-wider mb-4 pb-2 border-b border-white/5"
                style={{ color: st.color }}
              >
                {st.category}
              </div>
              <ul className="space-y-2 text-xs font-mono text-[#9AA6B2]">
                {st.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Scientific Citations */}
      <div className="rounded-2xl bg-[#0B1018] border border-white/10 p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>Peer-Reviewed Science & Official NASA Citations</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {citations.map((c) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#111923] border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="font-display font-bold text-sm text-white group-hover:text-[#42A5FF] transition-colors">
                  {c.title}
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#9AA6B2] shrink-0 mt-1" />
              </div>
              <div className="text-xs text-[#9AA6B2] mt-1.5 leading-relaxed">{c.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
