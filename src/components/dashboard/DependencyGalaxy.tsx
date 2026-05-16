"use client";

import React from "react";
import { EngineeringFabric } from "@/components/three/EngineeringFabric";
import { 
  Search, 
  Filter, 
  Maximize2, 
  Share2, 
  Layers,
  Database,
  Cpu
} from "lucide-react";

export const DependencyGalaxy = () => {
  return (
    <div className="flex-1 relative flex flex-col overflow-hidden">
      <EngineeringFabric />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 flex flex-col gap-4 pointer-events-auto">
          <div className="glass p-4 border-primary/20 w-80">
            <h2 className="text-sm font-bold uppercase tracking-tighter mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              Software Graph Navigator
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search semantic nodes..." 
                  className="w-full bg-black/40 border border-white/10 rounded-md pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-bold uppercase hover:bg-white/10 transition-all">
                  <Filter className="w-3 h-3" /> Filters
                </button>
                <button className="flex items-center justify-center gap-2 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-bold uppercase hover:bg-white/10 transition-all">
                  <Share2 className="w-3 h-3" /> Export
                </button>
              </div>
            </div>
          </div>

          <div className="glass p-4 border-accent/20 w-80">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Intelligence Insights</h3>
            <div className="space-y-3">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Database className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold">Semantic Clusters</span>
                    <span className="text-xs text-muted-foreground">14 High-density zones</span>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold">Logic Overlap</span>
                    <span className="text-xs text-muted-foreground">Minimal drift detected</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="absolute top-8 right-8 pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="glass px-4 py-2 border-white/10 flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">Nodes</span>
                <span className="text-sm font-mono font-bold text-primary">124,502</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">Edges</span>
                <span className="text-sm font-mono font-bold text-accent">842,109</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">Depth</span>
                <span className="text-sm font-mono font-bold">14.2</span>
              </div>
            </div>
            <button className="glass p-3 border-white/10 hover:bg-white/5">
              <Maximize2 className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className="glass px-6 py-3 border-white/10 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_var(--glow-primary)]" />
              <span className="text-xs font-medium uppercase tracking-widest">Business Logic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_var(--glow-accent)]" />
              <span className="text-xs font-medium uppercase tracking-widest">Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_var(--glow-success)]" />
              <span className="text-xs font-medium uppercase tracking-widest">Data Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_var(--glow-warning)]" />
              <span className="text-xs font-medium uppercase tracking-widest">External APIs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
