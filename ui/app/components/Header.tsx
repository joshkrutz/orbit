"use client";
import {
  PanelRightClose,
  PanelRightOpen,
  SeparatorVertical,
} from "lucide-react";
import Separator from "./Separator";
import { useTheme } from "../util/ThemeProvider";

export default function Header() {
  const ctx = useTheme();
  return (
    <div className="flex gap-2 h-15 justify-start items-center border-b-2 border-background-accent p-4">
      {ctx.collapsed && (
        <PanelRightClose
          className="cursor-pointer"
          onClick={() => {
            ctx.toggleCollapsed();
          }}
        />
      )}
      {!ctx.collapsed && (
        <PanelRightOpen
          className="cursor-pointer"
          onClick={() => {
            ctx.toggleCollapsed();
          }}
        />
      )}
      <Separator />
      {"Home > Test"}
    </div>
  );
}
