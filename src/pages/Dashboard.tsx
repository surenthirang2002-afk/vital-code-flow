import AppLayout from "@/components/AppLayout";
import { Upload as UploadIcon, FileSearch, CheckCircle, BarChart3, Clock, TrendingUp, FileText } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const stats = [
  { label: "Total Uploads", value: "1,247", icon: UploadIcon, change: "+12%" },
  { label: "Pending Review", value: "38", icon: FileSearch, change: "-5%" },
  { label: "AI Confidence Avg", value: "94.2%", icon: BarChart3, change: "+2.1%" },
  { label: "Finalized Codes", value: "1,184", icon: CheckCircle, change: "+18%" },
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
        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon className="w-[18px] h-[18px]" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className={`text-xs font-medium ${s.change.startsWith("+") ? "text-success" : "text-destructive"}`}>
                {s.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> Coding Accuracy Trend
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis domain={[85, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" /> Monthly Upload Volume
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="uploads" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" /> Recent Activity
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">File</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">User</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((a, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 px-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{a.file}</span>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">{a.user}</td>
                    <td className="py-3 px-2">
                      <span className={
                        a.status === "Finalized" ? "badge-success" :
                        a.status === "Under Review" ? "badge-warning" : "badge-destructive"
                      }>{a.status}</span>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">{a.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
