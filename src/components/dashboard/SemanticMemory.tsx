"use client";

import React from "react";
import { 
  Database, 
  Search, 
  Link2, 
  FileCode, 
  Cpu, 
  Brain,
  History,
  Archive
} from "lucide-react";
import { cn } from "@/lib/utils";

const MemoryNode = ({ type, name, connections, size }: any) => (
  <div className="p-4 rounded-xl glass border border-white/5 flex items-center justify-between hover:border-primary/30 transition-all cursor-pointer group">
    <div className="flex items-center gap-3">
       <div className={cn(
         "w-10 h-10 rounded-lg flex items-center justify-center border",
         type === "code" ? "bg-primary/10 border-primary/20 text-primary" : "bg-accent/10 border-accent/20 text-accent"
       )}>
          {type === "code" ? <FileCode className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
       </div>
       <div className="flex flex-col">
          <span className="text-xs font-bold">{name}</span>
          <span className="text-[10px] text-muted-foreground">{connections} Semantic Connections</span>
       </div>
    </div>
    <div className="text-right">
       <div className="text-[10px] font-mono font-bold text-muted-foreground">{size}</div>
       <Link2 className="w-3 h-3 text-muted-foreground ml-auto mt-1 group-hover:text-primary transition-colors" />
    </div>
  </div>
);

export const SemanticMemory = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">Semantic Engineering Memory</h1>
          <p className="text-sm text-muted-foreground">Vector-indexed software knowledge & Evolutionary code lineage</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Query memory..." 
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
           </div>
           <button className="p-2 rounded-xl glass border-white/10 hover:bg-white/5">
              <Archive className="w-5 h-5 text-muted-foreground" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl glass border border-white/5 p-6">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                     <Database className="w-4 h-4 text-primary" />
                     Knowledge Graph Fragments
                  </h3>
                  <span className="text-[10px] font-mono text-muted-foreground">Indexed: 1.2M nodes</span>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MemoryNode type="code" name="auth-controller-v3" connections="1,242" size="4.2MB" />
                  <MemoryNode type="reasoning" name="scaling-pattern-recursive" connections="842" size="1.1MB" />
                  <MemoryNode type="code" name="data-ingest-pipeline" connections="3,109" size="12.8MB" />
                  <MemoryNode type="reasoning" name="latency-mitigation-strategy" connections="421" size="0.4MB" />
               </div>
            </div>

            <div className="rounded-2xl glass border border-white/5 p-6">
               <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <History className="w-4 h-4 text-accent" />
                  Evolutionary Lineage
               </h3>
               <div className="relative pl-8 border-l border-white/5 space-y-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="relative">
                       <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono text-accent">Snapshot Alpha-{i}</span>
                          <span className="text-sm font-bold">Architecture Redesign: Cluster-{i} Integration</span>
                          <p className="text-xs text-muted-foreground">
                             Semantic drift corrected. Core logic migrated to autonomous execution nodes.
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="rounded-2xl glass border border-white/5 p-6 text-center">
               <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
               <h3 className="text-sm font-bold mb-2">Cognitive Indexing</h3>
               <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Memory is continuously refined by AGI agents to optimize software reasoning paths.
               </p>
               <div className="space-y-4 text-left">
                  <div className="space-y-1">
                     <div className="flex justify-between text-[10px] font-bold">
                        <span>Vector Space Fill</span>
                        <span>82%</span>
                     </div>
                     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "82%" }} />
                     </div>
                  </div>
                  <div className="space-y-1">
                     <div className="flex justify-between text-[10px] font-bold">
                        <span>Graph Complexity</span>
                        <span>0.94</span>
                     </div>
                     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: "94%" }} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="rounded-2xl glass border border-white/5 p-6">
               <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Memory Sync Nodes</h3>
               <div className="space-y-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex items-center justify-between">
                       <span className="text-xs font-mono text-muted-foreground">NODE-{(i * 1024).toString(16).toUpperCase()}</span>
                       <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
