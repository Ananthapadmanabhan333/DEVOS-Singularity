"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { 
  FileCode, 
  FolderTree, 
  Search, 
  Play, 
  Bug, 
  GitCommit,
  ShieldAlert,
  ChevronRight,
  ChevronDown,
  Cpu
} from "lucide-react";

import { cn } from "@/lib/utils";

const FileTreeItem = ({ name, level = 0, isFolder = false, isOpen = false }: any) => (
  <div className={cn(
    "flex items-center gap-2 py-1 px-2 cursor-pointer hover:bg-white/5 transition-colors text-xs",
    level > 0 && "ml-4"
  )}>
    {isFolder ? (
      isOpen ? <ChevronDown className="w-3 h-3 text-muted-foreground" /> : <ChevronRight className="w-3 h-3 text-muted-foreground" />
    ) : (
      <FileCode className="w-3 h-3 text-primary/70" />
    )}
    <span className={cn(isFolder ? "font-bold" : "text-muted-foreground")}>{name}</span>
  </div>
);

export const CodeIntelligence = () => {
  const [code, setCode] = useState(`// DEVOS SINGULARITY: Autonomous SDLC Controller
// Semantic Code Cognition Engine v4.2.0

import { CognitionEngine } from "@devos/core";
import { SoftwareGraph } from "@devos/memory";

export async function processSDLCEvent(event: SDLCEvent) {
  const graph = await SoftwareGraph.load(event.repoId);
  
  // Recursive semantic analysis
  const reasoning = await CognitionEngine.analyze({
    nodes: graph.filter(n => n.hasChanges),
    depth: "recursive",
    context: "architectural-drift"
  });

  if (reasoning.confidence > 0.98) {
    return await autonomousOrchestration(reasoning);
  }

  throw new TechnicalDebtError("Insufficient reasoning confidence");
}
`);

  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="w-64 border-r border-white/5 bg-black/20 flex flex-col">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest">Repository Fabric</span>
          <FolderTree className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          <FileTreeItem name="apps" isFolder isOpen />
          <FileTreeItem name="web" isFolder isOpen level={1} />
          <FileTreeItem name="cognition.ts" level={2} />
          <FileTreeItem name="delivery.ts" level={2} />
          <FileTreeItem name="libs" isFolder level={0} />
          <FileTreeItem name="infra" isFolder level={0} />
          <FileTreeItem name="package.json" level={0} />
          <FileTreeItem name="terraform.tf" level={0} />
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-black/40">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono">cognition.ts</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] text-muted-foreground">Synced with Graph</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded hover:bg-white/5 text-muted-foreground"><Search className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-white/5 text-muted-foreground"><Play className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-white/5 text-accent"><Bug className="w-4 h-4" /></button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <Editor
            height="100%"
            defaultLanguage="typescript"
            theme="vs-dark"
            value={code}
            options={{
              minimap: { enabled: true },
              fontSize: 13,
              fontFamily: "JetBrains Mono",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 20 }
            }}

          />
          
          {/* Autonomous Reasoning Overlay */}
          <div className="absolute right-8 top-8 w-80 glass p-4 space-y-4 border-primary/20 pointer-events-none">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Semantic Analysis</span>
            </div>
            <div className="space-y-3">
              <div className="p-2 rounded bg-primary/10 border border-primary/20">
                <div className="text-[10px] text-primary font-bold mb-1 uppercase">Control Flow Detected</div>
                <div className="text-xs">Recursive SDLC event handler identified. Stability score: 0.94</div>
              </div>
              <div className="p-2 rounded bg-accent/10 border border-accent/20">
                <div className="text-[10px] text-accent font-bold mb-1 uppercase">Security Intelligence</div>
                <div className="text-xs">No vulnerabilities detected in data-flow paths.</div>
              </div>
              <div className="p-2 rounded bg-yellow-400/10 border border-yellow-400/20">
                <div className="text-[10px] text-yellow-400 font-bold mb-1 uppercase">Technical Debt</div>
                <div className="text-xs">Missing error boundary for graph reconstruction.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-32 border-t border-white/5 bg-black/40 p-4">
          <div className="flex items-center gap-4 mb-3 border-b border-white/5 pb-2">
            <button className="text-[10px] font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-2">Output</button>
            <button className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pb-2">Problems (0)</button>
            <button className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pb-2">Reasoning Log</button>
          </div>
          <div className="font-mono text-[11px] text-muted-foreground space-y-1">
            <div className="flex gap-2">
              <span className="text-green-500">[INFO]</span>
              <span>Semantic indexing complete for repository 'devos-singularity'</span>
            </div>
            <div className="flex gap-2">
              <span className="text-primary">[REASONING]</span>
              <span>Architecture drift detected in component 'CognitionEngine' - mitigating...</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">[ACTION]</span>
              <span>Refactoring proposed for line 12: 'autonomousOrchestration'</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
