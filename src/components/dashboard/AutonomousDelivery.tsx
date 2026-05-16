"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GitPullRequest, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Activity,
  History,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const PipelineStep = ({ name, status, active = false }: any) => {
  const statusColors: any = {
    completed: "bg-green-500",
    running: "bg-primary animate-pulse",
    pending: "bg-white/10",
    failed: "bg-red-500"
  };

  return (
    <div className={cn(
      "flex flex-col items-center gap-2 relative",
      active ? "opacity-100" : "opacity-50"
    )}>
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/5", active ? "bg-white/5" : "")}>
        <div className={cn("w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]", statusColors[status])} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-tighter">{name}</span>
    </div>
  );
};

export const AutonomousDelivery = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">Autonomous Delivery Intelligence</h1>
          <p className="text-sm text-muted-foreground">Self-healing pipelines & Predictive release engineering</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="px-4 py-2 rounded-xl glass border-green-500/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-xs font-bold">Reliability Score: 0.998</span>
           </div>
           <button className="px-4 py-2 rounded-xl bg-primary text-white font-bold text-xs shadow-[0_0_15px_var(--glow-primary)]">
              Manual Override
           </button>
        </div>
      </div>

      <div className="rounded-3xl glass border border-white/5 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <GitPullRequest className="w-6 h-6 text-primary" />
             </div>
             <div>
                <h3 className="text-sm font-bold">Release Candidate v2.4.1-alpha</h3>
                <p className="text-xs text-muted-foreground font-mono">Commit: a7f8c2d | Branch: main</p>
             </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold px-2 py-1 rounded bg-primary/20 text-primary uppercase tracking-widest">
            Processing
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/5 -z-10" />
          <PipelineStep name="Build" status="completed" active />
          <PipelineStep name="Security Scan" status="completed" active />
          <PipelineStep name="Unit Tests" status="completed" active />
          <PipelineStep name="AI Validation" status="running" active />
          <PipelineStep name="Chaos Sim" status="pending" />
          <PipelineStep name="Canary" status="pending" />
          <PipelineStep name="Rollout" status="pending" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl glass border border-white/5 p-6">
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                 <Activity className="w-4 h-4 text-primary" />
                 Predictive Release Intelligence
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground">AGI-REASONER-V4</span>
           </div>
           <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold">Failure Probability</span>
                    <span className="text-xs text-green-500 font-mono">0.002%</span>
                 </div>
                 <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "2%" }} />
                 </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold">Infrastructure Readiness</span>
                    <span className="text-xs text-primary font-mono">98%</span>
                 </div>
                 <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "98%" }} />
                 </div>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                 "Current release exhibits high structural integrity. Semantic drift is within baseline. 
                 Predicting 14% improvement in gateway latency post-deployment."
              </p>
           </div>
        </div>

        <div className="rounded-2xl glass border border-white/5 p-6">
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                 <History className="w-4 h-4 text-accent" />
                 Deployment Lineage
              </h3>
              <button className="text-[10px] font-bold text-primary hover:underline">View All</button>
           </div>
           <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center justify-between group">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                         <Server className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-xs font-bold">v2.4.0-stable</span>
                         <span className="text-[10px] text-muted-foreground">Deployed 14h ago by Autonomous-Bot</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-green-500">SUCCESS</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
