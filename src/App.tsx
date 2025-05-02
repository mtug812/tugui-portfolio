import React, { useEffect } from 'react'; // <-- Importă useEffect
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Importăm hook-urile și BrowserRouter
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom"; // <-- Importă useNavigate și useLocation

import Index from "./pages/Index"; // Componenta ta care probabil conține <Routes>

const queryClient = new QueryClient();

// ==========================================================
// Componenta NOUĂ care gestionează redirectarea (Helper)
// ==========================================================
const HandleRedirect: React.FC = () => {
  const navigate = useNavigate(); // Hook pentru a naviga programatic
  const location = useLocation(); // Hook pentru a vedea locația curentă
  const appBasePath = '/tugui-portfolio/'; // Definim base path aici pt verificare

  // useEffect rulează după ce componenta se montează (și la schimbări de dependențe)
  useEffect(() => {
    // Citește calea salvată de 404.html din sessionStorage
    const redirectPath = sessionStorage.getItem('redirect');

    // Dacă există o cale salvată...
    if (redirectPath) {
      // Șterge-o imediat ca să nu ruleze din nou la următorul refresh
      sessionStorage.removeItem('redirect');

      // Navighează la calea salvată DOAR dacă suntem încă la rădăcina aplicației
      // (pentru a evita bucle infinite dacă navigarea a avut deja loc)
      if (location.pathname === '/' || location.pathname === appBasePath) {
         console.log(`Redirecting SPA to: ${redirectPath}`); // Mesaj util în consolă (opțional)
         // Folosim navigate() pentru a schimba pagina în React Router
         // replace: true înlocuiește intrarea curentă din istoric
         navigate(redirectPath, { replace: true });
      }
    }
    // Acest effect depinde de 'navigate' și 'location.pathname'
  }, [navigate, location.pathname]);

  // Această componentă nu afișează nimic pe ecran
  return null;
};
// ==========================================================


// Componenta principală App
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Adăugăm basename la BrowserRouter */}
      <BrowserRouter basename="/tugui-portfolio"> {/* <-- MODIFICARE IMPORTANTĂ */}
        {/* Adăugăm componenta helper ÎNAINTE de restul aplicației */}
        <HandleRedirect /> {/* <-- ADAUGATĂ AICI */}
        {/* Restul aplicației tale (componenta Index conține probabil <Routes>) */}
        <Index />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;