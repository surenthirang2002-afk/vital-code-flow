import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload, Pencil, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Input placeholder="Search codes..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Button variant="outline" size="sm"><Upload className="w-4 h-4 mr-1" /> Import Dataset</Button>
      </div>
      <div className="card-elevated overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Code</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Description</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Category</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4"><code className="bg-primary/5 text-primary px-2 py-0.5 rounded text-xs font-mono">{d.code}</code></td>
                <td className="py-3 px-4 text-foreground">{d.description}</td>
                <td className="py-3 px-4 text-muted-foreground">{d.category}</td>
                <td className="py-3 px-4 flex gap-1">
                  <Button variant="ghost" size="sm"><Pencil className="w-3.5 h-3.5" /></Button>
                  <Button variant="ghost" size="sm"><Trash2 className="w-3.5 h-3.5 text-destructive" /></Button>
                </td>
              </tr>
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
          <h2 className="text-2xl font-bold text-foreground">Code Master Management</h2>
          <p className="text-muted-foreground mt-1">Manage ICD-10, CPT, and HCPCS code datasets and AI configuration.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="stat-card">
            <p className="text-sm text-muted-foreground">AI Confidence Threshold</p>
            <p className="text-2xl font-bold text-foreground">75%</p>
            <p className="text-xs text-muted-foreground">Codes below will be flagged</p>
          </div>
          <div className="stat-card">
            <p className="text-sm text-muted-foreground">Auto-Finalization</p>
            <p className="text-2xl font-bold text-success">Enabled</p>
            <p className="text-xs text-muted-foreground">For codes above 95% confidence</p>
          </div>
          <div className="stat-card">
            <p className="text-sm text-muted-foreground">Total Codes Loaded</p>
            <p className="text-2xl font-bold text-foreground">72,184</p>
            <p className="text-xs text-muted-foreground">ICD-10 + CPT + HCPCS</p>
          </div>
        </div>

        <Tabs defaultValue="icd10">
          <TabsList>
            <TabsTrigger value="icd10">ICD-10</TabsTrigger>
            <TabsTrigger value="cpt">CPT</TabsTrigger>
            <TabsTrigger value="hcpcs">HCPCS</TabsTrigger>
          </TabsList>
          <TabsContent value="icd10" className="mt-4"><CodeTable data={icd10Data} /></TabsContent>
          <TabsContent value="cpt" className="mt-4"><CodeTable data={cptData} /></TabsContent>
          <TabsContent value="hcpcs" className="mt-4"><CodeTable data={cptData} /></TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
