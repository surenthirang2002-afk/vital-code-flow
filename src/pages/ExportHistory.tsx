import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

const exportHistory = [
  { file: "charge_sheet_089_codes.xlsx", date: "2026-02-13", user: "Dr. Smith", status: "Completed" },
  { file: "diagnosis_045_report.pdf", date: "2026-02-12", user: "J. Williams", status: "Completed" },
  { file: "batch_export_feb_w1.xlsx", date: "2026-02-10", user: "Admin", status: "Completed" },
  { file: "patient_notes_112_codes.xlsx", date: "2026-02-09", user: "Dr. Chen", status: "Completed" },
  { file: "charge_sheet_085_codes.pdf", date: "2026-02-07", user: "M. Johnson", status: "Failed" },
];

export default function ExportHistory() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Export History</h2>
            <p className="text-muted-foreground mt-1">Download finalized coding reports.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><FileSpreadsheet className="w-4 h-4 mr-1" /> Export Excel</Button>
            <Button variant="outline" size="sm"><FileText className="w-4 h-4 mr-1" /> Export PDF</Button>
          </div>
        </div>
        <div className="card-elevated overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">File Name</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Date</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">User</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {exportHistory.map((e, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{e.file}</td>
                  <td className="py-3 px-4 text-muted-foreground">{e.date}</td>
                  <td className="py-3 px-4 text-muted-foreground">{e.user}</td>
                  <td className="py-3 px-4">
                    <span className={e.status === "Completed" ? "badge-success" : "badge-destructive"}>{e.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" disabled={e.status !== "Completed"}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
