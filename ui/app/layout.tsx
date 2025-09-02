import type { Metadata } from "next";
import { Open_Sans, Jersey_10 } from "next/font/google";
import "./globals.css";
import Sidebar, {
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH,
} from "./components/Sidebar";
import Header from "./components/Header";
import ThemeProvider, { useTheme } from "./util/ThemeProvider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const jersey10 = Jersey_10({
  variable: "--font-jersey-10",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit",
  description:
    "A collaborative organization file repository. Add common files, personalize for your unit, mark documents as outdated, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${jersey10.variable} antialiased flex min-h-screen w-full bg-gray-400`}
      >
        <ThemeProvider>
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
