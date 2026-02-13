import AppLayout from "@/components/AppLayout";
import { Monitor, Server, Brain, Database, FileText, GitBranch } from "lucide-react";

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
          <h2 className="text-2xl font-bold text-foreground">System Architecture</h2>
          <p className="text-muted-foreground mt-1">MedCode AI technology stack and data flow overview.</p>
        </div>

        {/* Architecture Diagram */}
        <div className="card-elevated p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {layers.map((l, i) => (
              <div key={i} className="text-center hover-lift">
                <div className={`w-16 h-16 rounded-2xl ${l.color} flex items-center justify-center mx-auto mb-3`}>
                  <l.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground">{l.label}</h3>
                <p className="text-sm text-muted-foreground">{l.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow */}
        <div className="card-elevated p-8">
          <h3 className="font-semibold text-foreground mb-6 text-center">Data Flow</h3>
          <div className="flex flex-col items-center space-y-3">
            {[
              "User uploads charge sheet (PDF / Image / DOC)",
              "OCR engine extracts text from document",
              "NLP model identifies diagnosis terms & procedures",
              "AI maps extracted terms to ICD-10, CPT, HCPCS codes",
              "Confidence scores are calculated for each code",
              "Coder reviews, overrides if needed, and finalizes",
              "Finalized codes exported as Excel / PDF report",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 w-full max-w-lg">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </div>
                <div className="flex-1 bg-muted rounded-lg px-4 py-3 text-sm text-foreground">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
