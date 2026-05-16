"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Cpu,
  RefreshCcw,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

const MetricCard = ({ label, value, change, icon: Icon, color = "primary" }: any) => {
  const colors: any = {
    primary: "text-primary border-primary/20",
    accent: "text-accent border-accent/20",
    success: "text-green-400 border-green-400/20",
    warning: "text-yellow-400 border-yellow-400/20",
  };

  return (
    <div className={cn("p-4 rounded-xl glass border relative overflow-hidden group", colors[color])}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-white/5">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5">
          <TrendingUp className="w-3 h-3" />
          {change}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{label}</span>
        <span className="text-2xl font-bold tracking-tight text-white">{value}</span>
      </div>
      <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <Icon size={100} />
      </div>
    </div>
  );
};

const LogEntry = ({ timestamp, type, message }: any) => (
  <div className="flex gap-3 py-2 border-b border-white/5 last:border-0 group">
    <span className="text-[10px] font-mono text-muted-foreground pt-0.5">{timestamp}</span>
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-[9px] font-bold px-1 rounded uppercase tracking-tighter",
          type === "info" ? "bg-primary/20 text-primary" : 
          type === "warning" ? "bg-yellow-400/20 text-yellow-400" :
          "bg-accent/20 text-accent"
        )}>
          {type}
        </span>
        <p className="text-xs text-foreground/90 font-medium">{message}</p>
      </div>
    </div>
  </div>
);

export const CognitionDashboard = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">Engineering Cognition Dashboard</h1>
          <p className="text-sm text-muted-foreground">Autonomous SDLC Intelligence & Real-time Operations</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all">
            <RefreshCcw className="w-3.5 h-3.5" />
            Sync Graph
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-[0_0_15px_var(--glow-primary)] hover:brightness-110 transition-all">
            <Maximize2 className="w-3.5 h-3.5" />
            Autonomous Mode
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Cognition Score" value="98.4%" change="+2.1%" icon={Cpu} color="primary" />
        <MetricCard label="Delivery Velocity" value="4.2s" change="-1.2s" icon={Zap} color="accent" />
        <MetricCard label="System Stability" value="99.999%" change="+0.001%" icon={CheckCircle2} color="success" />
        <MetricCard label="Risk Detection" value="2 Low" change="0" icon={AlertTriangle} color="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl glass border border-white/5 overflow-hidden flex flex-col min-h-[400px]">
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">Semantic Architecture Graph</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-muted-foreground font-medium">Real-time</span>
              </div>
            </div>
            <div className="flex-1 relative bg-black/20 flex items-center justify-center">
              {/* Simulated Graph Placeholder */}
              <div className="text-center">
                <div className="w-48 h-48 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite] relative mx-auto mb-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--glow-primary)]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_var(--glow-accent)]" />
                </div>
                <p className="text-xs font-mono text-muted-foreground animate-pulse">Rendering Software Topology...</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="p-2 rounded bg-black/40 border border-white/5">
                      <div className="text-[9px] text-muted-foreground uppercase font-bold mb-1">Node cluster {i}</div>
                      <div className="text-xs font-mono">OK / 128ms</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl glass border border-white/5 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Deployment Telemetry</h3>
              <div className="space-y-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs font-medium">service-alpha-{i}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${Math.random() * 100}%` }} />
                      </div>
                      <span className="text-[10px] font-mono">{(Math.random() * 100).toFixed(0)}ms</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
             <div className="rounded-2xl glass border border-white/5 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4">AI Reasoning Stream</h3>
              <div className="space-y-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={cn(
                      "w-1 h-8 rounded-full",
                      i % 2 === 0 ? "bg-accent" : "bg-primary"
                    )} />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-muted-foreground">AGI-AGENT-00{i}</span>
                      <span className="text-[11px] font-medium leading-tight">Analyzing dependency drift in v1.4...</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl glass border border-white/5 p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider">Live Engineering Log</h3>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                <span className="text-[9px] font-mono uppercase">Streaming</span>
              </div>
            </div>
            <div className="flex-1 space-y-1 overflow-y-auto pr-2">
              <LogEntry timestamp="21:54:02" type="info" message="Autonomous release sequence initiated for alpha-7" />
              <LogEntry timestamp="21:53:45" type="reasoning" message="Agent detected technical debt accumulation in core/auth" />
              <LogEntry timestamp="21:53:12" type="warning" message="Predictive failure analysis: 12% drift in latency metrics" />
              <LogEntry timestamp="21:52:58" type="info" message="Semantic code graph updated: 1,402 new nodes indexed" />
              <LogEntry timestamp="21:52:30" type="reasoning" message="Autonomous debugger patched CVE-2026-1022 in registry" />
              <LogEntry timestamp="21:51:45" type="info" message="Cloud fabric scaling: 4 nodes added to us-east-1" />
              <LogEntry timestamp="21:51:12" type="reasoning" message="Redesigning architecture for module 'gateway'..." />
              <LogEntry timestamp="21:50:58" type="info" message="Zero-trust policy enforcement active across all clusters" />
              <LogEntry timestamp="21:50:45" type="warning" message="High memory pressure detected on worker-4a" />
              <LogEntry timestamp="21:50:12" type="info" message="Backup synchronization complete" />
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask the Engineering AGI..." 
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-3 pr-10 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded bg-primary/20 text-primary">
                  <RefreshCcw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
