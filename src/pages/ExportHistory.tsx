import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { motion } from "framer-motion";

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
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Export History</h2>
            <p className="text-muted-foreground mt-1">Download finalized coding reports.</p>
          </div>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="sm" className="rounded-xl"><FileSpreadsheet className="w-4 h-4 mr-1" /> Export Excel</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="sm" className="rounded-xl"><FileText className="w-4 h-4 mr-1" /> Export PDF</Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated overflow-hidden"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">File Name</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {exportHistory.map((e, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/30 last:border-0 hover:bg-muted/40 transition-colors"
                >
                  <td className="py-3.5 px-4 text-foreground font-semibold">{e.file}</td>
                  <td className="py-3.5 px-4 text-muted-foreground">{e.date}</td>
                  <td className="py-3.5 px-4 text-muted-foreground">{e.user}</td>
                  <td className="py-3.5 px-4">
                    <span className={e.status === "Completed" ? "badge-success" : "badge-destructive"}>{e.status}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="sm" disabled={e.status !== "Completed"} className="rounded-xl">
                        <Download className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </AppLayout>
  );
}
