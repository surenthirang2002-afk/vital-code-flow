import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload, Pencil, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const icd10Data = [
  { code: "E11.9", description: "Type 2 diabetes mellitus without complications", category: "Endocrine" },
  { code: "I10", description: "Essential (primary) hypertension", category: "Circulatory" },
  { code: "N18.3", description: "Chronic kidney disease, stage 3", category: "Genitourinary" },
  { code: "E78.5", description: "Hyperlipidemia, unspecified", category: "Endocrine" },
  { code: "G62.9", description: "Polyneuropathy, unspecified", category: "Nervous" },
  { code: "E11.319", description: "Type 2 DM with unspecified diabetic retinopathy without macular edema", category: "Endocrine" },
];

const cptData = [
  { code: "99213", description: "Office visit, established, low complexity", category: "E/M" },
  { code: "99214", description: "Office visit, established, moderate complexity", category: "E/M" },
  { code: "99215", description: "Office visit, established, high complexity", category: "E/M" },
  { code: "92014", description: "Eye exam, comprehensive", category: "Ophthalmology" },
  { code: "95907", description: "Nerve conduction studies, 1-2 studies", category: "Neurology" },
];

const CodeTable = ({ data }: { data: typeof icd10Data }) => {
  const [search, setSearch] = useState("");
  const filtered = data.filter(
    (d) => d.code.toLowerCase().includes(search.toLowerCase()) || d.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search codes..." className="pl-9 rounded-xl" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button variant="outline" size="sm" className="rounded-xl"><Upload className="w-4 h-4 mr-1" /> Import Dataset</Button>
        </motion.div>
      </div>
      <div className="card-elevated overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Code</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Description</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Category</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-border/30 last:border-0 hover:bg-muted/40 transition-colors"
              >
                <td className="py-3.5 px-4"><code className="bg-primary/8 text-primary px-2.5 py-1 rounded-lg text-xs font-mono font-semibold">{d.code}</code></td>
                <td className="py-3.5 px-4 text-foreground">{d.description}</td>
                <td className="py-3.5 px-4 text-muted-foreground">{d.category}</td>
                <td className="py-3.5 px-4 flex gap-1">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="sm" className="rounded-lg"><Pencil className="w-3.5 h-3.5" /></Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="sm" className="rounded-lg"><Trash2 className="w-3.5 h-3.5 text-destructive" /></Button>
                  </motion.div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function CodeMaster() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Code Master Management</h2>
          <p className="text-muted-foreground mt-1">Manage ICD-10, CPT, and HCPCS code datasets and AI configuration.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "AI Confidence Threshold", value: "75%", sub: "Codes below will be flagged", color: "text-foreground" },
            { label: "Auto-Finalization", value: "Enabled", sub: "For codes above 95% confidence", color: "text-success" },
            { label: "Total Codes Loaded", value: "72,184", sub: "ICD-10 + CPT + HCPCS", color: "text-foreground" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="stat-card"
            >
              <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
              <p className={`text-3xl font-extrabold ${s.color} tracking-tight`}>{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="icd10">
          <TabsList className="rounded-xl">
            <TabsTrigger value="icd10" className="rounded-lg">ICD-10</TabsTrigger>
            <TabsTrigger value="cpt" className="rounded-lg">CPT</TabsTrigger>
            <TabsTrigger value="hcpcs" className="rounded-lg">HCPCS</TabsTrigger>
          </TabsList>
          <TabsContent value="icd10" className="mt-4"><CodeTable data={icd10Data} /></TabsContent>
          <TabsContent value="cpt" className="mt-4"><CodeTable data={cptData} /></TabsContent>
          <TabsContent value="hcpcs" className="mt-4"><CodeTable data={cptData} /></TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
