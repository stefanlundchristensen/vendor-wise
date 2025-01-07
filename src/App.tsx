import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Index from "./pages/Index";
import AddVendor from "./pages/AddVendor";
import Vendors from "./pages/Vendors";

/**
 * QueryClient instance for managing API requests and caching
 */
const queryClient = new QueryClient();

/**
 * Root application component that sets up the main providers and routing structure.
 * Includes:
 * - React Query for data fetching
 * - Toast notifications
 * - Tooltips
 * - Routing
 * - Sidebar navigation
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1 p-8">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/add-vendor" element={<AddVendor />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;