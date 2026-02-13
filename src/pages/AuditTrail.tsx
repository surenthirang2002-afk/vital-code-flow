import AppLayout from "@/components/AppLayout";
import { GitCommit, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const auditEntries = [
  {
    time: "2026-02-13 14:32",
    user: "Dr. Smith",
    action: "Finalized codes",
    file: "charge_sheet_089.pdf",
    details: [
      { field: "ICD-10 for Peripheral Neuropathy", from: "G62.9", to: "G63 (override)", reason: "More specific to diabetic etiology" },
    ],
  },
  {
    time: "2026-02-13 14:20",
    user: "Dr. Smith",
    action: "Override applied",
    file: "charge_sheet_089.pdf",
    details: [
      { field: "Diabetic Retinopathy ICD-10", from: "E11.319", to: "E11.311", reason: "Right eye specified in notes" },
    ],
  },
  {
    time: "2026-02-13 13:45",
    user: "System (AI)",
    action: "AI codes generated",
    file: "charge_sheet_089.pdf",
    details: [],
  },
  {
    time: "2026-02-13 13:42",
    user: "Dr. Smith",
    action: "File uploaded",
    file: "charge_sheet_089.pdf",
    details: [],
  },
  {
    time: "2026-02-12 16:10",
    user: "J. Williams",
    action: "Finalized codes",
    file: "diagnosis_report_045.pdf",
    details: [],
  },
];

export default function AuditTrail() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Audit Trail</h2>
          <p className="text-muted-foreground mt-1">Complete change tracking for compliance and quality assurance.</p>
        </div>

        <div className="space-y-0">
          {auditEntries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                  className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <GitCommit className="w-4 h-4 text-primary" />
                </motion.div>
                {i < auditEntries.length - 1 && <div className="w-px flex-1 bg-border/60" />}
              </div>
              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="card-elevated p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <p className="font-bold text-foreground">{entry.action}</p>
                    <p className="text-xs text-muted-foreground font-medium">{entry.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{entry.user} — {entry.file}</p>
                  {entry.details.length > 0 && (
                    <div className="space-y-2 mt-3">
                      {entry.details.map((d, j) => (
                        <div key={j} className="bg-muted/60 rounded-xl p-3.5 text-sm border border-border/30">
                          <p className="text-muted-foreground text-xs mb-1.5 font-semibold uppercase tracking-wider">{d.field}</p>
                          <div className="flex items-center gap-2 text-foreground">
                            <code className="bg-destructive/10 text-destructive px-2.5 py-1 rounded-lg text-xs font-mono font-semibold">{d.from}</code>
                            <ArrowRight className="w-3 h-3 text-muted-foreground" />
                            <code className="bg-success/10 text-success px-2.5 py-1 rounded-lg text-xs font-mono font-semibold">{d.to}</code>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1.5">Reason: {d.reason}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
