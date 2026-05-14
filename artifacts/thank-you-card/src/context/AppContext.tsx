import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  unlockedPages: string[];
  unlockPage: (page: string) => void;
  isAllUnlocked: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const REQUIRED_PAGES = ["chrys", "gontr", "drico", "ursin", "kemi"];

export function AppProvider({ children }: { children: ReactNode }) {
  const [unlockedPages, setUnlockedPages] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("thankYouUnlockedPages");
      if (stored) {
        setUnlockedPages(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load unlocked pages", e);
    }
  }, []);

  const unlockPage = (page: string) => {
    setUnlockedPages((prev) => {
      if (prev.includes(page)) return prev;
      const next = [...prev, page];
      try {
        localStorage.setItem("thankYouUnlockedPages", JSON.stringify(next));
      } catch (e) {
        console.error("Failed to save unlocked pages", e);
      }
      return next;
    });
  };

  const isAllUnlocked = REQUIRED_PAGES.every((p) => unlockedPages.includes(p));

  return (
    <AppContext.Provider value={{ unlockedPages, unlockPage, isAllUnlocked }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
