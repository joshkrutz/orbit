"use client";

import Gallery from "./components/Gallery";
import { randomUUID } from "crypto";
import Header from "./components/Header";
import { useTheme } from "./util/ThemeProvider";

export default function Home() {
  const theme = useTheme();

  return (
    <div
      className="bg-background m-3 rounded-lg min-h-full w-full transition-all duration-500 ease-in-out"
      style={{ marginLeft: theme.sidebarWidth }}
    >
      <Header />
      <div className="flex p-4">
        <Gallery
          data={[1, 2, 3].map((item, idx) => ({
            title: "Dress and Appearance Regs",
            product_number: "DAF 36-2903",
            created_date: new Date(Date.now()),
            modified_date: new Date(Date.now()),
            id: idx,
          }))}
        />
      </div>
    </div>
  );
}
