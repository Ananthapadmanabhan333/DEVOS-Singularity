"use client";

import React from "react";
import { GlobalFabricVisualization } from "@/components/three/GlobalFabric";
import { 
  Globe, 
  Cpu, 
  Zap, 
  Activity, 
  ShieldCheck,
  RefreshCcw,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

const RegionCard = ({ name, status, nodes, latency }: any) => (
  <div className="p-4 rounded-2xl glass border border-white/5 space-y-4 group">
    <div className="flex justify-between items-start">
      <div className="flex flex-col">
         <span className="text-xs font-bold">{name}</span>
         <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{nodes} Nodes</span>
      </div>
      <div className={cn(
        "w-2 h-2 rounded-full",
        status === "online" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-yellow-500"
      )} />
    </div>
    <div className="flex items-center justify-between text-[10px]">
       <span className="text-muted-foreground">Latency</span>
       <span className="font-mono text-primary">{latency}ms</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
       <div className="h-full bg-primary" style={{ width: `${100 - (latency / 10)}%` }} />
    </div>
  </div>
);

export const GlobalFabricDashboard = () => {
  return (
    <div className="flex-1 relative flex flex-col overflow-hidden">
      <GlobalFabricVisualization />
      
      <div className="absolute inset-0 pointer-events-none p-8 flex flex-col">
        <div className="flex items-center justify-between pointer-events-auto mb-8">
           <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight">Global Engineering Fabric</h1>
              <p className="text-sm text-muted-foreground">Planetary-scale distributed compute & Autonomous SDLC synchronization</p>
           </div>
           <div className="flex items-center gap-3">
              <div className="glass px-4 py-2 border-primary/20 flex items-center gap-4">
                 <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase">Global TPS</span>
                    <span className="text-sm font-mono font-bold text-primary">14.2M</span>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase">Total Memory</span>
                    <span className="text-sm font-mono font-bold text-accent">842 PB</span>
                 </div>
              </div>
              <button className="p-3 rounded-xl glass border-white/10 hover:bg-white/5">
                <RefreshCcw className="w-5 h-5 text-muted-foreground" />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pointer-events-auto mb-auto">
           <RegionCard name="North America (East)" status="online" nodes="4,204" latency="12" />
           <RegionCard name="Europe (Central)" status="online" nodes="3,842" latency="28" />
           <RegionCard name="Asia Pacific (South)" status="online" nodes="2,910" latency="142" />
           <RegionCard name="South America" status="online" nodes="1,248" latency="84" />
        </div>

        <div className="mt-8 flex gap-6 pointer-events-auto">
           <div className="w-80 glass p-6 border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-primary" />
                 Distributed Intelligence Swarm
              </h3>
              <div className="space-y-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                         <Activity className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-xs font-bold">AGI-WORKER-{i}</span>
                         <span className="text-[10px] text-muted-foreground">Syncing Software Graph...</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="flex-1 glass p-6 border-white/5 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                 <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    Autonomous Recovery Protocol
                 </h3>
                 <p className="text-[11px] text-muted-foreground max-w-md">
                    Global self-healing mesh active. Multi-region redundancy established for all critical SDLC services.
                 </p>
              </div>
              <button className="px-6 py-2 rounded-xl bg-accent text-white font-bold text-xs shadow-[0_0_15px_var(--glow-accent)]">
                 Initialize Recovery
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
