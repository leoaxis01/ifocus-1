import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import Home from "@/pages/home";
import About from "@/pages/about";
import Courses from "@/pages/courses";
import CourseDetail from "@/pages/course-detail";
import Services from "@/pages/services";
import Placements from "@/pages/placements";
import Career from "@/pages/career";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import ScrollToTop from "./components/ScrollToTop";
import CursorSpark from "./components/CursorSpark";

function Router() {
  return (
    <>
    <ScrollToTop />
    <CursorSpark /> 
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/services" component={Services} />
      <Route path="/placements" component={Placements} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <WhatsAppFloat />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
