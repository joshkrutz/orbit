"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../util/ThemeProvider";

export const SIDEBAR_WIDTH = 150;
export const SIDEBAR_COLLAPSED_WIDTH = 50;

export function useSidebar() {
  return;
}

export default function Sidebar() {
  const ctx = useTheme();
  const collapsed = ctx.collapsed;

  return (
    <div
      className={`fixed bg-background-accent h-screen flex   flex-col overflow-hidden transition-all duration-500 ease-in-out m-auto pr-2`}
      style={{ width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH }}
    >
      <div className="select-none font-pixel text-[64px] relative h-[96px] ">
        {/* Minimized */}

        <h1 className={`absolute transform overflow-none pl-3`}>o</h1>

        {/* Maximized */}
        <h1
          className={`absolute transition-all duration-800 overflow-clip pl-3 ${
            collapsed ? "w-0" : "w-full"
          }`}
        >
          orbit
        </h1>
      </div>
      {/* Nav Bar */}
      <ul className="flex-1 flex flex-col w-full gap-2">
        <li>
          <Link
            href="/"
            className={`flex select-none ${
              collapsed ? "" : "gap-2"
            } justify-start
               hover:bg-background-accent-darker rounded-lg p-2 m-1 items-center`}
          >
            <Home className={`flex-1`} />
            {
              <p
                className={`overflow-hidden ${collapsed ? "flex-0" : "flex-1"}`}
              >
                Home
              </p>
            }
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`flex select-none gap-2 ${
              collapsed ? "justify-start" : "justify-start"
            } hover:bg-background-accent-darker rounded-lg p-2 m-1 items-center`}
          >
            <Home />
            {!collapsed && <p className="truncate">Home</p>}
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`flex select-none gap-2 ${
              collapsed ? "justify-start" : "justify-start"
            } hover:bg-background-accent-darker rounded-lg p-2 m-1 items-center`}
          >
            <Home />
            {!collapsed && <p className="truncate">Home</p>}
          </Link>
        </li>
      </ul>
      {/* Profile */}
      <div
        className={`flex pb-4 flex ${
          collapsed ? "justify-center gap-0" : "justify-start gap-2"
        } items-center overflow-hidden`}
      >
        <div
          className={`${
            collapsed ? "" : "flex-0"
          } overflow-hidden border-2 h-8 aspect-1/1 rounded-full`}
        ></div>
        <p className={`${collapsed ? "" : "flex-1"} overflow-hidden`}>
          Josh Krutz
        </p>
      </div>
    </div>
  );
}
