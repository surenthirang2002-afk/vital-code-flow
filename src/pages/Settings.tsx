import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

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
          <h2 className="text-2xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground mt-1">Manage your preferences.</p>
        </div>

        <div className="card-elevated p-6 space-y-6">
          <h3 className="font-semibold text-foreground">Change Password</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" placeholder="Enter current password" />
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" placeholder="Enter new password" />
            </div>
            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
            <Button className="gradient-primary text-primary-foreground border-0">Update Password</Button>
          </div>
        </div>

        <div className="card-elevated p-6 space-y-6">
          <h3 className="font-semibold text-foreground">Preferences</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive alerts for new uploads and reviews</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Toggle dark theme</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDark} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-foreground">AI Confidence Threshold</p>
                <p className="text-xs text-muted-foreground">Codes below this will require manual review</p>
              </div>
              <span className="text-sm font-mono font-medium text-foreground">{threshold[0]}%</span>
            </div>
            <Slider value={threshold} onValueChange={setThreshold} min={50} max={100} step={5} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
