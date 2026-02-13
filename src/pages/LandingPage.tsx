import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Shield, Zap, AlertTriangle, DollarSign, FileWarning,
  Brain, FileText, Search, CheckCircle, Download, Users, Lock,
  ClipboardCheck, BarChart3, Eye, Settings, ChevronRight, Activity, Sparkles, Play
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
  { step: "01", title: "Upload", desc: "Upload charge sheets, PDFs, or scanned images", icon: FileText },
  { step: "02", title: "AI Extraction", desc: "OCR + NLP extract diagnoses & procedures", icon: Brain },
  { step: "03", title: "Code Mapping", desc: "AI maps to ICD-10, CPT & HCPCS codes", icon: Search },
  { step: "04", title: "Review", desc: "Coders review with confidence scores", icon: Eye },
  { step: "05", title: "Export", desc: "Export finalized codes as Excel or PDF", icon: Download },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="glass-navbar fixed top-0 left-0 right-0 z-50 h-16"
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2.5">
            <motion.div
              whileHover={{ rotate: 12 }}
              className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md"
            >
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </motion.div>
            <span className="font-bold text-foreground tracking-tight">MedCode AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-medium">Login</Button>
            </Link>
            <Link to="/login">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="sm" className="gradient-primary text-primary-foreground border-0 shadow-md">
                  Request Demo
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 gradient-hero opacity-95" />
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-56 h-56 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm mb-8 border border-accent/30 backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="text-accent-foreground/90 font-medium">AI-Powered Healthcare Technology</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 tracking-tight">
              AI-Powered Automated{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal">
                Medical Coding
              </span>{" "}
              System
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl leading-relaxed">
              Convert clinical notes, charge sheets & diagnosis documents into ICD-10, CPT & HCPCS codes instantly with AI precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8 h-13 text-base shadow-lg shadow-accent/20 rounded-xl">
                    <Play className="w-4 h-4" /> Request Demo
                  </Button>
                </motion.div>
              </Link>
              <Link to="/login">
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-13 px-8 text-base rounded-xl backdrop-blur-md">
                    Login <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="badge-destructive mb-4 inline-block">The Challenge</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">The Problem with Manual Coding</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Manual medical coding is slow, error-prone, and costly — holding your revenue cycle back.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, title: "Human Errors", desc: "Manual coding leads to inaccurate codes, claim denials, and compliance violations.", color: "text-destructive", bg: "bg-destructive/10" },
              { icon: DollarSign, title: "Revenue Delays", desc: "Slow turnaround times delay reimbursements and impact cash flow.", color: "text-warning", bg: "bg-warning/10" },
              { icon: FileWarning, title: "Compliance Risk", desc: "Inconsistent coding practices increase audit risk and regulatory penalties.", color: "text-info", bg: "bg-info/10" },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-premium p-8 text-center h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6 ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Flow */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="badge-success mb-4 inline-block">Our Solution</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">How MedCode AI Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From document upload to exportable codes in minutes, not hours.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-5 gap-4">
            {flowSteps.map((s, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative"
                >
                  <div className="card-premium p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-accent mb-2 tracking-widest">{s.step}</div>
                    <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <ChevronRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-5 h-5 text-accent hidden md:block z-10" />
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="badge-info mb-4 inline-block">Platform Features</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Comprehensive Feature Set</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need for accurate, efficient, and compliant medical coding.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-elevated p-6 group cursor-default h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="badge-warning mb-4 inline-block">Enterprise Security</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Enterprise-Grade Security</h2>
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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-premium p-10 text-center"
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Shield className="w-28 h-28 text-primary/15 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">HIPAA-Ready Architecture</h3>
                <p className="text-muted-foreground">Designed for healthcare compliance from the ground up</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="card-premium gradient-hero p-12 md:p-16 text-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"
              />
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 relative z-10 tracking-tight">
                Ready to Transform Your Coding Workflow?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto relative z-10">
                Join healthcare organizations that trust MedCode AI for accurate, efficient medical coding.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link to="/login">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-13 text-base shadow-lg shadow-accent/30 rounded-xl">
                      Get Started <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">MedCode AI</span>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-medium">Phoenix Business Initiatives</p>
              <p className="text-xs text-muted-foreground">Prepared by IAT Technologies</p>
            </div>
            <p className="text-sm text-muted-foreground">&copy; 2026 MedCode AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
