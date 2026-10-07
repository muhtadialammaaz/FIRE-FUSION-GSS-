import React from 'react';
import { Flame, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#05070B] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* NASA Data Attribution Banner */}
        <div className="p-6 rounded-2xl bg-[#0B1018] border border-white/10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#55C98A]">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIAL DATA & SCIENCE ATTRIBUTION</span>
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              NASA Earth Science & FIRMS Data
            </h4>
            <p className="text-xs text-[#9AA6B2] max-w-2xl leading-relaxed">
              FireFusion utilizes active-fire data from the Land, Atmosphere Near real-time Capability for EOS (LANCE) system operated by NASA ESDIS. VIIRS data are produced by the NASA FIRMS processing system. MODIS data are produced by the MODIS Adaptive Processing System (MODAPS).
            </p>
          </div>

          <div className="text-xs font-mono text-[#9AA6B2] text-left md:text-right shrink-0">
            <div>NASA Space Apps Challenge 2026</div>
            <div className="text-white/40 text-[10px] mt-1">Not endorsed by NASA or ESDIS</div>
          </div>
        </div>

        {/* Footer Links & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-xs">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#FF6A2A] flex items-center justify-center">
                <Flame className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-display font-bold text-sm tracking-wider text-white">
                FIREFUSION
              </span>
            </div>
            <p className="text-[#9AA6B2] leading-relaxed">
              Harmonized MODIS & VIIRS Fire Event Intelligence & Burning Activity Calendar.
            </p>
            <div className="text-[11px] font-mono text-[#42A5FF]">
              One Fire. Multiple Satellites. One Harmonized View.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-white font-semibold mb-3">SECTIONS</div>
            <ul className="space-y-2 text-[#9AA6B2]">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#harmonization" className="hover:text-white transition-colors">Harmonization</a></li>
              <li><a href="#fire-map" className="hover:text-white transition-colors">Interactive Map</a></li>
              <li><a href="#calendar" className="hover:text-white transition-colors">Burning Calendar</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About FireFusion</a></li>
            </ul>
          </div>

          {/* Scientific Methodology */}
          <div>
            <div className="font-mono text-white font-semibold mb-3">METHODOLOGY</div>
            <ul className="space-y-2 text-[#9AA6B2]">
              <li><a href="#validation" className="hover:text-white transition-colors">Validation Audit</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Scientific Limitations</a></li>
              <li><a href="https://firms.modaps.eosdis.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">NASA FIRMS Docs <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://earthdata.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">NASA Earthdata <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Project Team */}
          <div>
            <div className="font-mono text-white font-semibold mb-3">CHALLENGE SUBMISSION</div>
            <p className="text-[#9AA6B2] leading-relaxed mb-3">
              Developed for the 2026 NASA Space Apps Challenge by Global Synthetic Squad (G.S.S).
            </p>
            <div className="p-2.5 rounded-lg bg-[#111923] border border-white/5 font-mono text-[11px] text-[#55C98A]">
              ✓ Open Source Research Prototype
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9AA6B2]">
          <div>
            &copy; 2026 FireFusion &middot; Global Synthetic Squad (G.S.S)
          </div>
          <div className="flex items-center gap-4">
            <span>NASA Space Apps 2026</span>
            <span>&middot;</span>
            <span>All Data Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
