import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Upload as UploadIcon, FileText, Image, File, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");
  const navigate = useNavigate();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles(dropped);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleUpload = () => {
    setUploading(true);
    setProgress(0);
    setStage("Uploading file...");
    const stages = [
      { p: 30, s: "Running OCR..." },
      { p: 60, s: "Extracting diagnoses..." },
      { p: 85, s: "Mapping medical codes..." },
      { p: 100, s: "Complete!" },
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < stages.length) {
        setProgress(stages[i].p);
        setStage(stages[i].s);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => navigate("/coding-review"), 800);
      }
    }, 1200);
  };

  const getIcon = (name: string) => {
    if (name.endsWith(".pdf")) return <FileText className="w-5 h-5 text-destructive" />;
    if (name.match(/\.(jpg|png|jpeg)/)) return <Image className="w-5 h-5 text-info" />;
    return <File className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Upload Charge Sheet</h2>
          <p className="text-muted-foreground mt-1">Upload PDF, scanned images, or DOC files for AI processing.</p>
        </div>

        {!uploading ? (
          <>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="card-elevated border-2 border-dashed border-border hover:border-primary/50 p-12 text-center cursor-pointer transition-colors"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <UploadIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-foreground font-medium mb-1">Drag & drop files here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
              <p className="text-xs text-muted-foreground">Supports PDF, JPG, PNG, DOC, DOCX</p>
              <input id="file-input" type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={handleFileSelect} />
            </div>

            {files.length > 0 && (
              <div className="space-y-3">
                {files.map((f, i) => (
                  <div key={i} className="card-elevated p-4 flex items-center gap-3">
                    {getIcon(f.name)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full gradient-primary text-primary-foreground border-0 h-11" onClick={handleUpload}>
                  <UploadIcon className="w-4 h-4 mr-2" /> Process with AI
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="card-elevated p-8 text-center space-y-6">
            {progress < 100 ? (
              <Loader2 className="w-12 h-12 text-primary mx-auto animate-spin" />
            ) : (
              <CheckCircle className="w-12 h-12 text-success mx-auto" />
            )}
            <div>
              <p className="font-semibold text-foreground text-lg">{stage}</p>
              <p className="text-sm text-muted-foreground mt-1">{files[0]?.name}</p>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">{progress}% complete</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
