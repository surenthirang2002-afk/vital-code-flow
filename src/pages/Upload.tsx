import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Upload as UploadIcon, FileText, Image, File, CheckCircle, Loader2, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const navigate = useNavigate();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
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
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Upload Charge Sheet</h2>
          <p className="text-muted-foreground mt-1">Upload PDF, scanned images, or DOC files for AI processing.</p>
        </div>

        <AnimatePresence mode="wait">
          {!uploading ? (
            <motion.div
              key="upload-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`card-premium border-2 border-dashed p-16 text-center cursor-pointer transition-all duration-300 ${
                  dragOver ? "border-primary bg-primary/5 scale-[1.02]" : "border-border hover:border-primary/40"
                }`}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <motion.div
                  animate={dragOver ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CloudUpload className={`w-16 h-16 mx-auto mb-5 transition-colors ${dragOver ? "text-primary" : "text-muted-foreground/50"}`} />
                </motion.div>
                <p className="text-foreground font-bold text-lg mb-1">Drag & drop files here</p>
                <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                <p className="text-xs text-muted-foreground">Supports PDF, JPG, PNG, DOC, DOCX</p>
                <input id="file-input" type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={handleFileSelect} />
              </motion.div>

              <AnimatePresence>
                {files.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    {files.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="card-elevated p-4 flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                          {getIcon(f.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">{f.name}</p>
                          <p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(1)} KB</p>
                        </div>
                      </motion.div>
                    ))}
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button className="w-full gradient-primary text-primary-foreground border-0 h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/15" onClick={handleUpload}>
                        <UploadIcon className="w-4 h-4 mr-2" /> Process with AI
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-premium p-10 text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {progress < 100 ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  >
                    <Loader2 className="w-16 h-16 text-primary mx-auto" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="w-16 h-16 text-success mx-auto" />
                  </motion.div>
                )}
              </motion.div>
              <div>
                <motion.p
                  key={stage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-bold text-foreground text-xl"
                >
                  {stage}
                </motion.p>
                <p className="text-sm text-muted-foreground mt-1">{files[0]?.name}</p>
              </div>
              <div className="max-w-sm mx-auto">
                <Progress value={progress} className="h-2.5" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{progress}% complete</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
}
