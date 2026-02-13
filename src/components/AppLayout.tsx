import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Upload, FileSearch, Download, ClipboardList,
  Database, Settings, Shield, Bell, ChevronLeft, Menu, LogOut, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Upload Charge Sheet", icon: Upload, path: "/upload" },
  { label: "Coding Review", icon: FileSearch, path: "/coding-review" },
  { label: "Export History", icon: Download, path: "/export" },
  { label: "Audit Trail", icon: ClipboardList, path: "/audit-trail" },
  { label: "Code Master", icon: Database, path: "/code-master", adminOnly: true },
  { label: "Architecture", icon: Shield, path: "/architecture" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-16" : "w-64"
        } hidden md:flex flex-col border-r border-border bg-card transition-all duration-300 sticky top-0 h-screen`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 h-16 border-b border-border">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-foreground text-sm truncate">MedCode AI</span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
                {item.adminOnly && !collapsed && (
                  <span className="ml-auto text-[10px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">Admin</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="p-2 border-t border-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors text-sm"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top navbar */}
        <header className="glass-navbar sticky top-0 z-30 h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setCollapsed(!collapsed)}>
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-foreground hidden md:block">
              {navItems.find((i) => i.path === location.pathname)?.label || "MedCode AI"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-muted cursor-pointer">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground">Dr. Smith</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
            </div>
            <Link to="/login">
              <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground">
                <LogOut className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
