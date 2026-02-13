import AppLayout from "@/components/AppLayout";
import { Upload as UploadIcon, FileSearch, CheckCircle, BarChart3, Clock, TrendingUp, FileText, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Uploads", value: "1,247", icon: UploadIcon, change: "+12%", color: "bg-primary/10 text-primary" },
  { label: "Pending Review", value: "38", icon: FileSearch, change: "-5%", color: "bg-warning/10 text-warning" },
  { label: "AI Confidence Avg", value: "94.2%", icon: BarChart3, change: "+2.1%", color: "bg-accent/10 text-accent" },
  { label: "Finalized Codes", value: "1,184", icon: CheckCircle, change: "+18%", color: "bg-success/10 text-success" },
];

const accuracyData = [
  { month: "Jan", accuracy: 89 }, { month: "Feb", accuracy: 91 }, { month: "Mar", accuracy: 92 },
  { month: "Apr", accuracy: 90 }, { month: "May", accuracy: 93 }, { month: "Jun", accuracy: 94 },
  { month: "Jul", accuracy: 95 }, { month: "Aug", accuracy: 94 },
];

const volumeData = [
  { month: "Jan", uploads: 120 }, { month: "Feb", uploads: 145 }, { month: "Mar", uploads: 178 },
  { month: "Apr", uploads: 156 }, { month: "May", uploads: 198 }, { month: "Jun", uploads: 210 },
  { month: "Jul", uploads: 189 }, { month: "Aug", uploads: 224 },
];

const recentActivity = [
  { file: "charge_sheet_089.pdf", user: "Dr. Smith", status: "Finalized", time: "2 min ago" },
  { file: "diagnosis_report_045.pdf", user: "J. Williams", status: "Under Review", time: "15 min ago" },
  { file: "patient_notes_112.docx", user: "Dr. Chen", status: "Processing", time: "32 min ago" },
  { file: "charge_sheet_090.pdf", user: "M. Johnson", status: "Finalized", time: "1 hr ago" },
  { file: "lab_report_078.pdf", user: "Dr. Smith", status: "Under Review", time: "2 hr ago" },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground mt-0.5">Welcome back, Dr. Smith. Here's your coding overview.</p>
          </div>
          <Link to="/upload">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="gradient-primary text-primary-foreground border-0 shadow-md shadow-primary/15 rounded-xl gap-2">
                <UploadIcon className="w-4 h-4" /> Upload Charge Sheet
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="stat-card"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
                  <s.icon className="w-[18px] h-[18px]" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-foreground tracking-tight">{s.value}</p>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.change.startsWith("+") ? "text-success" : "text-destructive"}`}>
                  <ArrowUpRight className={`w-3 h-3 ${!s.change.startsWith("+") ? "rotate-90" : ""}`} />
                  {s.change}
                </span>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-elevated p-6"
          >
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> Coding Accuracy Trend
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={accuracyData}>
                <defs>
                  <linearGradient id="accuracyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis domain={[85, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px", fontSize: 13 }} />
                <Area type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" fill="url(#accuracyGrad)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-elevated p-6"
          >
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" /> Monthly Upload Volume
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={volumeData}>
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0.5} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px", fontSize: 13 }} />
                <Bar dataKey="uploads" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-elevated"
        >
          <div className="p-6 pb-0">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" /> Recent Activity
            </h3>
          </div>
          <div className="overflow-x-auto px-6 pb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium text-xs uppercase tracking-wider">File</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium text-xs uppercase tracking-wider">User</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium text-xs uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium text-xs uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((a, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="border-b border-border/50 last:border-0 hover:bg-muted/40 transition-colors"
                  >
                    <td className="py-3.5 px-2 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{a.file}</span>
                    </td>
                    <td className="py-3.5 px-2 text-muted-foreground">{a.user}</td>
                    <td className="py-3.5 px-2">
                      <span className={
                        a.status === "Finalized" ? "badge-success" :
                        a.status === "Under Review" ? "badge-warning" : "badge-destructive"
                      }>{a.status}</span>
                    </td>
                    <td className="py-3.5 px-2 text-muted-foreground">{a.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
