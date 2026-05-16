"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Binary, 
  GitBranch, 
  Activity, 
  Bug, 
  Layers, 
  Database, 
  Globe, 
  Terminal,
  ShieldCheck,
  Zap,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any; label: string; active?: boolean; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg transition-all cursor-pointer group",
      active ? "bg-primary/10 text-primary shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
    )}
  >
    <Icon className={cn("w-4 h-4", active ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
    <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2 mt-6">
    {children}
  </h3>
);

export const Sidebar = ({ activeView, setActiveView }: any) => {
  return (
    <aside className="w-64 border-r border-white/5 bg-background/50 backdrop-blur-xl h-[calc(100vh-57px)] overflow-y-auto p-4 hidden lg:block">
      <SectionTitle>Observatories</SectionTitle>
      <SidebarItem 
        icon={LayoutDashboard} 
        label="Cognition Center" 
        active={activeView === "cognition"} 
        onClick={() => setActiveView("cognition")}
      />
      <SidebarItem 
        icon={Binary} 
        label="Code Intelligence" 
        active={activeView === "code"} 
        onClick={() => setActiveView("code")}
      />
      <SidebarItem 
        icon={Layers} 
        label="Architecture Graph" 
        active={activeView === "graph"} 
        onClick={() => setActiveView("graph")}
      />
      <SidebarItem 
        icon={GitBranch} 
        label="Delivery Flow" 
        active={activeView === "delivery"} 
        onClick={() => setActiveView("delivery")}
      />
      <SidebarItem 
        icon={Activity} 
        label="System Health" 
        active={activeView === "health"} 
        onClick={() => setActiveView("health")}
      />



      
      <SectionTitle>Intelligence</SectionTitle>
      <SidebarItem 
        icon={Bug} 
        label="Autonomous Debugging" 
        active={activeView === "debug"} 
        onClick={() => setActiveView("debug")}
      />
      <SidebarItem 
        icon={ShieldCheck} 
        label="SecOps Governance" 
        active={activeView === "secops"} 
        onClick={() => setActiveView("secops")}
      />


      <SidebarItem icon={Layers} label="Architecture Graph" />
      <SidebarItem 
        icon={Database} 
        label="Semantic Memory" 
        active={activeView === "memory"} 
        onClick={() => setActiveView("memory")}
      />

      
      <SectionTitle>Infrastructure</SectionTitle>
      <SidebarItem 
        icon={Globe} 
        label="Global Fabric" 
        active={activeView === "fabric"} 
        onClick={() => setActiveView("fabric")}
      />

      <SidebarItem icon={Terminal} label="Execution Nodes" />
      <SidebarItem icon={Zap} label="Reliability Engine" />
      <SidebarItem icon={BarChart3} label="Productivity" />

      <div className="mt-auto pt-8">
        <div className="p-4 rounded-xl glass border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          <div className="relative z-10">
            <h4 className="text-xs font-bold mb-1">AGI Reasoning</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full border border-[#020617] bg-primary/20" />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground">3 Agents Active</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary shadow-[0_0_8px_var(--glow-primary)]"
                initial={{ width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
