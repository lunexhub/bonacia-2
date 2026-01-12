import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Warehousing from "./pages/services/Warehousing";
import CustomsClearing from "./pages/services/CustomsClearing";
import RoadFreight from "./pages/services/RoadFreight";
import SeaFreight from "./pages/services/SeaFreight";
import AirFreight from "./pages/services/AirFreight";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
          <Route path="/services/customs-clearing" element={<CustomsClearing />} />
          <Route path="/services/road-freight" element={<RoadFreight />} />
          <Route path="/services/sea-freight" element={<SeaFreight />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
