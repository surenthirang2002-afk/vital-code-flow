import AppLayout from "@/components/AppLayout";
import { Monitor, Server, Brain, Database, FileText, GitBranch, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const layers = [
  { icon: Monitor, label: "Frontend", tech: "React + Vite + Tailwind", color: "bg-primary/10 text-primary" },
  { icon: Server, label: "Backend", tech: "Java Spring Boot", color: "bg-accent/10 text-accent" },
  { icon: Brain, label: "AI Engine", tech: "Python + FastAPI", color: "bg-warning/10 text-warning" },
  { icon: Database, label: "Database", tech: "PostgreSQL", color: "bg-info/10 text-info" },
  { icon: FileText, label: "Reporting", tech: "ApachePOI / OpenPDF", color: "bg-success/10 text-success" },
  { icon: GitBranch, label: "Version Control", tech: "GitLab", color: "bg-destructive/10 text-destructive" },
];

export default function Architecture() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">System Architecture</h2>
          <p className="text-muted-foreground mt-1">MedCode AI technology stack and data flow overview.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-premium p-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {layers.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="text-center p-4 rounded-2xl hover:bg-muted/40 transition-colors cursor-default"
              >
                <div className={`w-16 h-16 rounded-2xl ${l.color} flex items-center justify-center mx-auto mb-3`}>
                  <l.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground">{l.label}</h3>
                <p className="text-sm text-muted-foreground">{l.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-premium p-8"
        >
          <h3 className="font-bold text-foreground mb-6 text-center text-lg">Data Flow</h3>
          <div className="flex flex-col items-center space-y-2">
            {[
              "User uploads charge sheet (PDF / Image / DOC)",
              "OCR engine extracts text from document",
              "NLP model identifies diagnosis terms & procedures",
              "AI maps extracted terms to ICD-10, CPT, HCPCS codes",
              "Confidence scores are calculated for each code",
              "Coder reviews, overrides if needed, and finalizes",
              "Finalized codes exported as Excel / PDF report",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="w-full max-w-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-muted/60 rounded-xl px-4 py-3.5 text-sm text-foreground font-medium border border-border/30">
                    {step}
                  </div>
                </div>
                {i < 6 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
