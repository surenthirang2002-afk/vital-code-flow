import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [threshold, setThreshold] = useState([75]);

  const toggleDark = (val: boolean) => {
    setDarkMode(val);
    document.documentElement.classList.toggle("dark", val);
  };

  return (
    <AppLayout>
      <div className="max-w-2xl space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Settings</h2>
          <p className="text-muted-foreground mt-1">Manage your preferences.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated p-6 space-y-6"
        >
          <h3 className="font-bold text-foreground">Change Password</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="font-medium">Current Password</Label>
              <Input type="password" placeholder="Enter current password" className="rounded-xl h-11" />
            </div>
            <div className="space-y-2">
              <Label className="font-medium">New Password</Label>
              <Input type="password" placeholder="Enter new password" className="rounded-xl h-11" />
            </div>
            <div className="space-y-2">
              <Label className="font-medium">Confirm Password</Label>
              <Input type="password" placeholder="Confirm new password" className="rounded-xl h-11" />
            </div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button className="gradient-primary text-primary-foreground border-0 rounded-xl shadow-md shadow-primary/15">Update Password</Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-elevated p-6 space-y-6"
        >
          <h3 className="font-bold text-foreground">Preferences</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive alerts for new uploads and reviews</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Toggle dark theme</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDark} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-semibold text-foreground">AI Confidence Threshold</p>
                <p className="text-xs text-muted-foreground">Codes below this will require manual review</p>
              </div>
              <span className="text-sm font-mono font-bold text-foreground bg-muted px-3 py-1 rounded-lg">{threshold[0]}%</span>
            </div>
            <Slider value={threshold} onValueChange={setThreshold} min={50} max={100} step={5} />
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
