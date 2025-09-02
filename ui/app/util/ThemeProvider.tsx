"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_WIDTH } from "../components/Sidebar";

type ThemeContextProps = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  sidebarWidth: number;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

export function useTheme() {
  // Check if theme props are set... if not we got here illegally
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be invoked within <ThemeProvider>");
  return ctx;
}

export default function ThemeProvider({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        collapsed: collapsed,
        toggleCollapsed: () => setCollapsed((prev) => !prev),
        sidebarWidth: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
}
