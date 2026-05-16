"use client";

import React from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { Activity, Zap, Cpu, Database, Server, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const data = [
  { name: "00:00", cpu: 45, mem: 60, lat: 120 },
  { name: "04:00", cpu: 52, mem: 65, lat: 135 },
  { name: "08:00", cpu: 85, mem: 80, lat: 210 },
  { name: "12:00", cpu: 75, mem: 78, lat: 180 },
  { name: "16:00", cpu: 92, mem: 88, lat: 250 },
  { name: "20:00", cpu: 65, mem: 72, lat: 160 },
  { name: "23:59", cpu: 48, mem: 62, lat: 125 },
];

const StatCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="p-4 rounded-2xl glass border border-white/5 space-y-2">
    <div className={cn("p-2 w-fit rounded-lg bg-white/5", color)}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col">
       <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{label}</span>
       <span className="text-2xl font-bold">{value}</span>
    </div>
  </div>
);

export const SystemHealth = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">System Reliability Observatory</h1>
          <p className="text-sm text-muted-foreground">Real-time infrastructure telemetry & Performance intelligence</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Operational
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <StatCard icon={Cpu} label="Global CPU" value="64.2%" color="text-primary" />
         <StatCard icon={Database} label="Storage Throughput" value="1.2 TB/s" color="text-accent" />
         <StatCard icon={Zap} label="Average Latency" value="142ms" color="text-yellow-500" />
         <StatCard icon={Server} label="Active Nodes" value="14,204" color="text-green-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="rounded-2xl glass border border-white/5 p-6 h-80 flex flex-col">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  Cluster Utilization (24h)
               </h3>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                     <span className="text-[10px] text-muted-foreground uppercase">CPU</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-accent" />
                     <span className="text-[10px] text-muted-foreground uppercase">Memory</span>
                  </div>
               </div>
            </div>
            <div className="flex-1">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ fontSize: '10px' }}
                    />
                    <Area type="monotone" dataKey="cpu" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCpu)" strokeWidth={2} />
                    <Area type="monotone" dataKey="mem" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorMem)" strokeWidth={2} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="rounded-2xl glass border border-white/5 p-6 h-80 flex flex-col">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  Latency Heatmap (Global)
               </h3>
               <span className="text-[10px] font-mono text-muted-foreground">P99: 210ms</span>
            </div>
            <div className="flex-1">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    />
                    <Bar dataKey="lat" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
};
