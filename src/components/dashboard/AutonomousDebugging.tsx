"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bug, 
  Terminal, 
  Search, 
  ShieldAlert, 
  Zap, 
  ChevronRight,
  Code2,
  BrainCircuit
} from "lucide-react";
import { cn } from "@/lib/utils";

const IncidentCard = ({ title, severity, status, time }: any) => (
  <div className="p-4 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
    <div className="flex justify-between items-start mb-2">
      <div className={cn(
        "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest",
        severity === "critical" ? "bg-red-500/20 text-red-500" : "bg-yellow-500/20 text-yellow-500"
      )}>
        {severity}
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">{time}</span>
    </div>
    <h4 className="text-xs font-bold mb-1 group-hover:text-primary transition-colors">{title}</h4>
    <div className="flex items-center justify-between">
      <span className="text-[10px] text-muted-foreground">{status}</span>
      <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

export const AutonomousDebugging = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="w-80 border-r border-white/5 bg-black/20 flex flex-col">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest">Active Incidents</span>
          <div className="flex items-center gap-1">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             <span className="text-[10px] font-bold text-red-500">2 Live</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <IncidentCard title="Memory leak in auth-service" severity="critical" status="Autonomous Mitigation Active" time="4m ago" />
          <IncidentCard title="Database connection spike" severity="warning" status="Analyzing Root Cause" time="12m ago" />
          <IncidentCard title="Zombie processes on worker-9" severity="warning" status="Monitoring" time="45m ago" />
          <div className="pt-4 border-t border-white/5">
             <span className="text-[9px] font-bold text-muted-foreground uppercase mb-4 block tracking-widest">Resolved</span>
             <div className="space-y-4 opacity-60">
                <IncidentCard title="Buffer overflow in ingress" severity="critical" status="Self-Healed" time="2h ago" />
                <IncidentCard title="DNS resolution failure" severity="warning" status="Patched" time="5h ago" />
             </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                 <Bug className="w-6 h-6 text-red-500" />
              </div>
              <div>
                 <h2 className="text-xl font-bold">Autonomous Debugging Terminal</h2>
                 <p className="text-sm text-muted-foreground">AGI-native incident response & Causal reasoning</p>
              </div>
           </div>
           <button className="px-4 py-2 rounded-xl glass border-primary/30 text-primary font-bold text-xs flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" />
              Analyze Causal Path
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl glass border border-white/5 overflow-hidden">
                 <div className="px-4 py-3 border-b border-white/5 bg-black/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <Terminal className="w-4 h-4 text-primary" />
                       <span className="text-xs font-mono">autonomous-debug-trace-42.log</span>
                    </div>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-white/10" />
                       <div className="w-2 h-2 rounded-full bg-white/10" />
                       <div className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                 </div>
                 <div className="p-4 bg-black/60 font-mono text-xs text-muted-foreground min-h-[300px] space-y-1">
                    <p className="text-primary font-bold">{">>>"} Initializing Causal Software Reasoning...</p>
                    <p>[09:54:02] Hooking into service-auth:prod-v2.1</p>
                    <p>[09:54:03] Trace analysis: Detected heap growth (+240MB/min)</p>
                    <p>[09:54:05] Context search: Last semantic change 'auth/v3-update'</p>
                    <p>[09:54:08] Reasoning: Async closure in line 142 holds reference to RequestContext</p>
                    <p className="text-red-500">{">>>"} INCIDENT DETECTED: MEMORY LEAK IN AUTH-SERVICE</p>
                    <p className="text-yellow-500">{">>>"} MITIGATION: Scaling replica count to 4 (temporary)</p>
                    <p className="text-green-500">{">>>"} AUTONOMOUS PATCH GENERATED: src/auth/handler.ts:142</p>
                    <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-lg">
                       <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-3 h-3 text-primary" />
                          <span className="text-[10px] font-bold text-primary">PROPOSED FIX</span>
                       </div>
                       <pre className="text-[10px]">
-  return new Promise((resolve) {"=>"} {'{'}
-    activeRequests.add(ctx);
+  return new Promise((resolve) {"=>"} {'{'}
+    // Fixed memory leak: proper cleanup
+    activeRequests.add(ctx);
+    ctx.onFinish(() {"=>"} activeRequests.delete(ctx));
                       </pre>


                    </div>
                 </div>
              </div>

              <div className="rounded-2xl glass border border-white/5 p-4">
                 <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Blast Radius Analysis</h3>
                 <div className="grid grid-cols-3 gap-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                         <span className="text-[9px] text-muted-foreground uppercase block mb-1">Impact {i}</span>
                         <span className="text-xs font-bold">Zone-US-East-{i}</span>
                         <div className="mt-2 w-full h-1 bg-black/40 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${Math.random() * 100}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <div className="rounded-2xl glass border border-white/5 p-4">
                 <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Reasoning Confidence</h3>
                 <div className="flex items-center justify-center py-8">
                    <div className="relative w-32 h-32">
                       <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="283" strokeDashoffset="42" className="text-primary" />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold">85%</span>
                          <span className="text-[8px] uppercase font-bold text-muted-foreground">Confidence</span>
                       </div>
                    </div>
                 </div>
                 <p className="text-[10px] text-center text-muted-foreground italic">
                    "Reasoning based on 14.2M traces and 2.1k previous incidents."
                 </p>
              </div>

              <div className="rounded-2xl glass border border-white/5 p-4">
                 <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Mitigation Strategy</h3>
                 <div className="space-y-3">
                    <div className="flex items-center gap-3">
                       <Zap className="w-4 h-4 text-primary" />
                       <span className="text-xs">Auto-Patching</span>
                       <div className="ml-auto w-8 h-4 bg-primary/20 rounded-full flex items-center px-0.5">
                          <div className="w-3 h-3 bg-primary rounded-full ml-auto" />
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <ShieldAlert className="w-4 h-4 text-accent" />
                       <span className="text-xs">Circuit Breaking</span>
                       <div className="ml-auto w-8 h-4 bg-accent/20 rounded-full flex items-center px-0.5">
                          <div className="w-3 h-3 bg-accent rounded-full ml-auto" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
