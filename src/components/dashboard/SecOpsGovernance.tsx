"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  ShieldAlert,
  Server,
  Key
} from "lucide-react";
import { cn } from "@/lib/utils";

const SecurityMetric = ({ label, value, status }: any) => (
  <div className="p-4 rounded-xl glass border border-white/5 flex items-center justify-between">
    <div className="flex flex-col">
       <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{label}</span>
       <span className="text-xl font-bold font-mono">{value}</span>
    </div>
    <div className={cn(
      "px-2 py-1 rounded text-[10px] font-bold uppercase",
      status === "secure" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
    )}>
      {status}
    </div>
  </div>
);

export const SecOpsGovernance = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">SecOps Governance Intelligence</h1>
          <p className="text-sm text-muted-foreground">Zero-trust engineering & Autonomous policy orchestration</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="px-4 py-2 rounded-xl glass border-primary/20 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold">Policy Compliance: 100%</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SecurityMetric label="Threat Level" value="Minimal" status="secure" />
        <SecurityMetric label="Vulnerabilities" value="0 Critical" status="secure" />
        <SecurityMetric label="Identity Score" value="0.99" status="secure" />
        <SecurityMetric label="Supply Chain" value="Verified" status="secure" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl glass border border-white/5 p-6">
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-accent" />
                  Zero-Trust Identity Fabric
               </h3>
               <div className="space-y-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 group">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                             <Key className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                             <h4 className="text-xs font-bold text-white">service-mesh-auth-{i}</h4>
                             <p className="text-[10px] text-muted-foreground">Short-lived SPIFFE ID issued</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="text-right">
                             <div className="text-[10px] font-mono">Expires in 42s</div>
                             <div className="w-20 h-1 bg-black/40 rounded-full overflow-hidden mt-1">
                                <div className="h-full bg-accent" style={{ width: "60%" }} />
                             </div>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="rounded-2xl glass border border-white/5 p-6">
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-primary" />
                  Anomaly Intrusion Prevention
               </h3>
               <div className="h-48 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                     <div className="w-32 h-32 border border-primary/20 rounded-full animate-ping absolute" />
                     <div className="w-16 h-16 border-2 border-primary/40 rounded-full animate-pulse relative flex items-center justify-center">
                        <ShieldAlert className="w-6 h-6 text-primary" />
                     </div>
                  </div>
                  <div className="relative z-10 text-center mt-32">
                     <p className="text-xs font-mono">Monitoring 14,204 execution paths...</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="rounded-2xl glass border border-white/5 p-6">
               <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Governance Policy</h3>
               <div className="space-y-3">
                  {[
                    "No production root access",
                    "Mandatory mTLS",
                    "Secret rotation < 24h",
                    "Image signing required"
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-green-500" />
                       <span className="text-xs">{p}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="rounded-2xl glass border border-white/5 p-6">
               <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Infrastructure Security</h3>
               <div className="space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold">Cluster-{i}</span>
                          <span className="text-green-500">Hardened</span>
                       </div>
                       <div className="w-full h-1 bg-white/5 rounded-full">
                          <div className="h-full bg-primary" style={{ width: "100%" }} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
