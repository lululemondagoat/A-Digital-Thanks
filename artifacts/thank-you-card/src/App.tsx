import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";
import { AnimatePresence } from "framer-motion";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import UnlockPage from "@/pages/UnlockPage";
import ChrysPage from "@/pages/ChrysPage";
import GontrPage from "@/pages/GontrPage";
import DricoPage from "@/pages/DricoPage";
import UrsinPage from "@/pages/UrsinPage";
import KemiPage from "@/pages/KemiPage";
import FamilyPage from "@/pages/FamilyPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/unlock/:person" component={UnlockPage} />
        <Route path="/chrys" component={ChrysPage} />
        <Route path="/gontr" component={GontrPage} />
        <Route path="/drico" component={DricoPage} />
        <Route path="/ursin" component={UrsinPage} />
        <Route path="/kemi" component={KemiPage} />
        <Route path="/family" component={FamilyPage} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
