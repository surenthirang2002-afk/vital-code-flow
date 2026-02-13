import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Shield, Zap, AlertTriangle, DollarSign, FileWarning,
  Brain, FileText, Search, CheckCircle, Download, Users, Lock,
  ClipboardCheck, BarChart3, Eye, Settings, ChevronRight, Activity
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: FileText, title: "OCR Support", desc: "PDF & scanned image processing" },
  { icon: Brain, title: "NLP Extraction", desc: "AI diagnosis term identification" },
  { icon: Search, title: "ICD-10 Mapping", desc: "Automated code suggestion" },
  { icon: Activity, title: "CPT Mapping", desc: "Procedure code identification" },
  { icon: Zap, title: "HCPCS Mapping", desc: "Supply & equipment codes" },
  { icon: BarChart3, title: "Confidence Scoring", desc: "AI certainty metrics" },
  { icon: Eye, title: "Manual Override", desc: "Human review & correction" },
  { icon: ClipboardCheck, title: "Audit Trail", desc: "Complete change tracking" },
  { icon: Download, title: "Excel / PDF Export", desc: "One-click report generation" },
  { icon: Users, title: "Role-Based Access", desc: "Admin & coder permissions" },
  { icon: Settings, title: "Admin Controls", desc: "System configuration panel" },
  { icon: Lock, title: "HIPAA-Ready", desc: "Enterprise security architecture" },
];

const flowSteps = [
  { step: "01", title: "Upload", desc: "Upload charge sheets, PDFs, or scanned images" },
  { step: "02", title: "AI Extraction", desc: "OCR + NLP extract diagnoses & procedures" },
  { step: "03", title: "Code Mapping", desc: "AI maps to ICD-10, CPT & HCPCS codes" },
  { step: "04", title: "Review", desc: "Coders review with confidence scores" },
  { step: "05", title: "Export", desc: "Export finalized codes as Excel or PDF" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50 h-16">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-foreground">MedCode AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="gradient-primary text-primary-foreground border-0">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-36">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm mb-6 border border-accent/30">
              <Zap className="w-3.5 h-3.5" />
              <span className="text-accent-foreground/90">AI-Powered Healthcare Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              AI-Powered Automated Medical Coding System
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Convert clinical notes, charge sheets & diagnosis documents into ICD-10, CPT & HCPCS codes instantly with AI precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8 h-12 text-base">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-base">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Problem with Manual Coding</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Manual medical coding is slow, error-prone, and costly — holding your revenue cycle back.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, title: "Human Errors", desc: "Manual coding leads to inaccurate codes, claim denials, and compliance violations.", color: "text-destructive" },
              { icon: DollarSign, title: "Revenue Delays", desc: "Slow turnaround times delay reimbursements and impact cash flow.", color: "text-warning" },
              { icon: FileWarning, title: "Compliance Risk", desc: "Inconsistent coding practices increase audit risk and regulatory penalties.", color: "text-info" },
            ].map((item, i) => (
              <div key={i} className="card-elevated p-8 text-center hover-lift">
                <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-5 ${item.color}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Flow */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How MedCode AI Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From document upload to exportable codes in minutes, not hours.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {flowSteps.map((s, i) => (
              <div key={i} className="relative">
                <div className="card-elevated p-6 text-center hover-lift h-full">
                  <div className="text-3xl font-bold text-accent/30 mb-2">{s.step}</div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <ChevronRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-5 h-5 text-muted-foreground hidden md:block z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Feature Set</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need for accurate, efficient, and compliant medical coding.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="card-elevated p-5 hover-lift group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Enterprise-Grade Security</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Built with a HIPAA-ready architecture to protect sensitive patient data at every layer.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Lock, text: "End-to-end data encryption (AES-256)" },
                  { icon: Shield, text: "Secure file upload with virus scanning" },
                  { icon: Users, text: "Role-based access control (RBAC)" },
                  { icon: ClipboardCheck, text: "Complete audit logs & change tracking" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-float p-8 text-center">
              <Shield className="w-24 h-24 text-primary/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">HIPAA-Ready Architecture</h3>
              <p className="text-muted-foreground">Designed for healthcare compliance from the ground up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-foreground">MedCode AI</span>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Phoenix Business Initiatives</p>
              <p className="text-xs text-muted-foreground">Prepared by IAT Technologies</p>
            </div>
            <p className="text-sm text-muted-foreground">&copy; 2026 MedCode AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
