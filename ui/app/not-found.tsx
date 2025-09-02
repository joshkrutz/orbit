"use client";
import Link from "next/link";
import { useTheme } from "./util/ThemeProvider";

export default function NotFound() {
  const theme = useTheme();

  return (
    <div
      className="bg-background m-3 rounded-lg min-h-full w-full transition-all duration-500 ease-in-out"
      style={{ marginLeft: theme.sidebarWidth }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
