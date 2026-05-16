"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";
import { CognitionDashboard } from "@/components/dashboard/CognitionDashboard";
import { CodeIntelligence } from "@/components/dashboard/CodeIntelligence";
import { DependencyGalaxy } from "@/components/dashboard/DependencyGalaxy";
import { AutonomousDelivery } from "@/components/dashboard/AutonomousDelivery";
import { AutonomousDebugging } from "@/components/dashboard/AutonomousDebugging";
import { SecOpsGovernance } from "@/components/dashboard/SecOpsGovernance";
import { SystemHealth } from "@/components/dashboard/SystemHealth";
import { GlobalFabricDashboard } from "@/components/dashboard/GlobalFabric";
import { SemanticMemory } from "@/components/dashboard/SemanticMemory";
import { EngineeringFabric } from "@/components/three/EngineeringFabric";

export default function Home() {
  const [activeView, setActiveView] = useState("cognition");

  const renderView = () => {
    switch (activeView) {
      case "cognition":
        return <CognitionDashboard />;
      case "code":
        return <CodeIntelligence />;
      case "graph":
        return <DependencyGalaxy />;
      case "delivery":
        return <AutonomousDelivery />;
      case "debug":
        return <AutonomousDebugging />;
      case "secops":
        return <SecOpsGovernance />;
      case "health":
        return <SystemHealth />;
      case "fabric":
        return <GlobalFabricDashboard />;
      case "memory":
        return <SemanticMemory />;
      default:
        return <CognitionDashboard />;
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {activeView !== "graph" && <EngineeringFabric />}
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex flex-1 overflow-hidden">
          {/* We'll pass setActiveView to Sidebar later, for now we manually use state */}
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          {renderView()}
        </div>
      </div>
      
      {/* Decorative overlays */}
      <div className="fixed bottom-0 left-0 w-64 h-px bg-gradient-to-r from-primary/50 to-transparent z-20" />
      <div className="fixed top-0 right-0 w-px h-64 bg-gradient-to-b from-primary/50 to-transparent z-20" />
    </main>
  );
}


