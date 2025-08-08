import { createContext, useContext, useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
const SidebarContext = createContext();
function SidebarProvider({ children }) {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  function toggleSidebar() {
    setIsSidebarOpen((open) => !open);
  }
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined)
    throw new Error("SidebarContext was used outside of SidebarProvider");
  return context;
}

export { SidebarProvider, useSidebar };
