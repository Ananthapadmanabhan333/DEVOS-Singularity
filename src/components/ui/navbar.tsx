"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Cpu, Network, Shield, Zap, Bell, Search, Settings, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const NavItem = ({ icon: Icon, label, active = false }: { icon: any; label: string; active?: boolean }) => (
  <div className={cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all cursor-pointer group",
    active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
  )}>
    <Icon className={cn("w-4 h-4", active ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
    <span className="text-sm font-medium tracking-tight">{label}</span>
    {active && (
      <motion.div
        layoutId="active-nav"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_var(--glow-primary)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    )}
  </div>
);

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 glass-dark px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_var(--glow-primary)]">
            <Box className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tighter leading-none">DEVOS</span>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] leading-none">Singularity</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 relative">
          <NavItem icon={Cpu} label="Cognition" active />
          <NavItem icon={Network} label="Delivery" />
          <NavItem icon={Shield} label="Security" />
          <NavItem icon={Zap} label="Reliability" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search software graph..." 
            className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-white/10 bg-white/5">
            <Command className="w-2.5 h-2.5 text-muted-foreground" />
            <span className="text-[9px] font-mono text-muted-foreground">K</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-[#020617]" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full border border-primary/50 p-0.5">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent" />
          </div>
        </div>
      </div>
    </nav>
  );
};
