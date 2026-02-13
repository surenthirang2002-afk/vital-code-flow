import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import CodingReview from "./pages/CodingReview";
import ExportHistory from "./pages/ExportHistory";
import AuditTrail from "./pages/AuditTrail";
import CodeMaster from "./pages/CodeMaster";
import Settings from "./pages/Settings";
import Architecture from "./pages/Architecture";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/coding-review" element={<CodingReview />} />
          <Route path="/export" element={<ExportHistory />} />
          <Route path="/audit-trail" element={<AuditTrail />} />
          <Route path="/code-master" element={<CodeMaster />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
