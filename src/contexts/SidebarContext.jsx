import { createContext, useContext, useState, useEffect } from "react";
import { useIsTablet } from "../hooks/useIsTablet";
const SidebarContext = createContext();
function SidebarProvider({ children }) {
  const isTablet = useIsTablet();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isTablet);

  useEffect(() => {
    setIsSidebarOpen(!isTablet);
  }, [isTablet]);

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
