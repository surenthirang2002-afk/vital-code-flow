import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to login
        </Link>
        <div className="card-premium p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Reset Password</h1>
              <p className="text-sm text-muted-foreground">Enter your email and we'll send a reset link.</p>
            </div>
          </div>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-14 h-14 text-success mx-auto mb-3" />
              </motion.div>
              <p className="text-success font-bold text-lg">Reset link sent!</p>
              <p className="text-sm text-muted-foreground mt-1">Check your inbox for instructions.</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">Email</Label>
                <Input id="email" type="email" placeholder="name@company.com" className="h-11 rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 h-12 rounded-xl font-semibold shadow-lg shadow-primary/15">
                  Send Reset Link
                </Button>
              </motion.div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
