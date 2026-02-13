import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Save, CheckCircle, MessageSquare, ArrowUpDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const mockCodes = [
  { diagnosis: "Type 2 Diabetes Mellitus", icd10: "E11.9", cpt: "99214", hcpcs: "A4253", confidence: 96, rank: 1 },
  { diagnosis: "Essential Hypertension", icd10: "I10", cpt: "99213", hcpcs: "-", confidence: 94, rank: 2 },
  { diagnosis: "Chronic Kidney Disease Stage 3", icd10: "N18.3", cpt: "99215", hcpcs: "A4657", confidence: 88, rank: 3 },
  { diagnosis: "Hyperlipidemia", icd10: "E78.5", cpt: "99213", hcpcs: "-", confidence: 92, rank: 4 },
  { diagnosis: "Peripheral Neuropathy", icd10: "G62.9", cpt: "95907", hcpcs: "E0730", confidence: 67, rank: 5 },
  { diagnosis: "Diabetic Retinopathy", icd10: "E11.319", cpt: "92014", hcpcs: "-", confidence: 73, rank: 6 },
];

const getConfidenceColor = (c: number) =>
  c >= 90 ? "text-success" : c >= 70 ? "text-warning" : "text-destructive";
const getConfidenceBg = (c: number) =>
  c >= 90 ? "bg-success" : c >= 70 ? "bg-warning" : "bg-destructive";
const getConfidenceLabel = (c: number) =>
  c >= 90 ? "badge-success" : c >= 70 ? "badge-warning" : "badge-destructive";

export default function CodingReview() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = mockCodes.filter((c) =>
    c.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.icd10.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">AI Coding Review</h2>
            <p className="text-muted-foreground mt-1">charge_sheet_089.pdf — Review and finalize AI-suggested codes</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Save className="w-4 h-4 mr-1" /> Save Draft</Button>
            <Button size="sm" className="gradient-primary text-primary-foreground border-0">
              <CheckCircle className="w-4 h-4 mr-1" /> Finalize Codes
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card-elevated p-5">
              <h3 className="font-semibold text-foreground mb-3">Extracted Data</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Diagnosis</p>
                  <div className="bg-muted rounded-lg p-3 text-sm text-foreground leading-relaxed">
                    Patient presents with Type 2 Diabetes Mellitus with peripheral neuropathy, Essential Hypertension, CKD Stage 3, Hyperlipidemia, and early diabetic retinopathy.
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Symptoms</p>
                  <div className="bg-muted rounded-lg p-3 text-sm text-foreground">
                    Tingling in extremities, blurred vision, fatigue, elevated blood pressure, edema in lower legs.
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Procedures</p>
                  <div className="bg-muted rounded-lg p-3 text-sm text-foreground">
                    Comprehensive metabolic panel, HbA1c, lipid panel, retinal screening, nerve conduction study.
                  </div>
                </div>
              </div>
            </div>
            <div className="card-elevated p-5">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Comments
              </h3>
              <textarea
                className="w-full bg-muted rounded-lg p-3 text-sm text-foreground border-0 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Add review comments..."
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-3">
            <div className="card-elevated">
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search codes..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm"><ArrowUpDown className="w-4 h-4 mr-1" /> Sort</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">#</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Diagnosis</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">ICD-10</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">CPT</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">HCPCS</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Confidence</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((code, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 text-muted-foreground">{code.rank}</td>
                        <td className="py-3 px-4 text-foreground font-medium max-w-[180px] truncate">{code.diagnosis}</td>
                        <td className="py-3 px-4"><code className="bg-primary/5 text-primary px-2 py-0.5 rounded text-xs font-mono">{code.icd10}</code></td>
                        <td className="py-3 px-4"><code className="bg-accent/5 text-accent px-2 py-0.5 rounded text-xs font-mono">{code.cpt}</code></td>
                        <td className="py-3 px-4 text-muted-foreground">{code.hcpcs}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Progress value={code.confidence} className={`h-1.5 w-16 ${getConfidenceBg(code.confidence)}`} />
                            <span className={`text-xs font-medium ${getConfidenceColor(code.confidence)}`}>{code.confidence}%</span>
                          </div>
                          {code.confidence < 70 && <span className="badge-destructive text-[10px] mt-1 inline-block">Needs Review</span>}
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm" className="text-xs h-7">Override</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
