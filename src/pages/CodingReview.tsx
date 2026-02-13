import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Save, CheckCircle, MessageSquare, ArrowUpDown, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

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
  c >= 90 ? "bg-success/20" : c >= 70 ? "bg-warning/20" : "bg-destructive/20";

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
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-extrabold text-foreground tracking-tight">AI Coding Review</h2>
            </div>
            <p className="text-muted-foreground">charge_sheet_089.pdf — Review and finalize AI-suggested codes</p>
          </div>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="sm" className="rounded-xl"><Save className="w-4 h-4 mr-1" /> Save Draft</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button size="sm" className="gradient-primary text-primary-foreground border-0 rounded-xl shadow-md shadow-primary/15">
                <CheckCircle className="w-4 h-4 mr-1" /> Finalize Codes
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="card-elevated p-5">
              <h3 className="font-bold text-foreground mb-3">Extracted Data</h3>
              <div className="space-y-4">
                {[
                  { label: "Diagnosis", text: "Patient presents with Type 2 Diabetes Mellitus with peripheral neuropathy, Essential Hypertension, CKD Stage 3, Hyperlipidemia, and early diabetic retinopathy." },
                  { label: "Symptoms", text: "Tingling in extremities, blurred vision, fatigue, elevated blood pressure, edema in lower legs." },
                  { label: "Procedures", text: "Comprehensive metabolic panel, HbA1c, lipid panel, retinal screening, nerve conduction study." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 font-semibold">{item.label}</p>
                    <div className="bg-muted/60 rounded-xl p-3.5 text-sm text-foreground leading-relaxed border border-border/30">
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="card-elevated p-5">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" /> Comments
              </h3>
              <textarea
                className="w-full bg-muted/60 rounded-xl p-3.5 text-sm text-foreground border border-border/30 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                placeholder="Add review comments..."
              />
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-elevated">
              <div className="p-4 border-b border-border/50 flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search codes..."
                    className="pl-9 rounded-xl"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm" className="rounded-xl"><ArrowUpDown className="w-4 h-4 mr-1" /> Sort</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">#</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Diagnosis</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">ICD-10</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">CPT</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">HCPCS</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Confidence</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((code, i) => (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="border-b border-border/30 last:border-0 hover:bg-muted/40 transition-colors"
                      >
                        <td className="py-3.5 px-4 text-muted-foreground font-medium">{code.rank}</td>
                        <td className="py-3.5 px-4 text-foreground font-semibold max-w-[180px] truncate">{code.diagnosis}</td>
                        <td className="py-3.5 px-4"><code className="bg-primary/8 text-primary px-2.5 py-1 rounded-lg text-xs font-mono font-semibold">{code.icd10}</code></td>
                        <td className="py-3.5 px-4"><code className="bg-accent/8 text-accent px-2.5 py-1 rounded-lg text-xs font-mono font-semibold">{code.cpt}</code></td>
                        <td className="py-3.5 px-4 text-muted-foreground">{code.hcpcs}</td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2.5">
                            <div className={`h-2 w-16 rounded-full ${getConfidenceBg(code.confidence)} overflow-hidden`}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${code.confidence}%` }}
                                transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                                className={`h-full rounded-full ${code.confidence >= 90 ? "bg-success" : code.confidence >= 70 ? "bg-warning" : "bg-destructive"}`}
                              />
                            </div>
                            <span className={`text-xs font-bold ${getConfidenceColor(code.confidence)}`}>{code.confidence}%</span>
                          </div>
                          {code.confidence < 70 && (
                            <span className="badge-destructive text-[10px] mt-1.5 inline-block">Needs Review</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="sm" className="text-xs h-7 rounded-lg">Override</Button>
                          </motion.div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
