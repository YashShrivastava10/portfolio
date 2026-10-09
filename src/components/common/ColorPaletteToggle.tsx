"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { ColorPalette, useThemeStore } from "@/hooks";
import { Check, Palette } from "lucide-react";

const colorPalettes: { label: string; value: ColorPalette; swatch: string }[] = [
  { label: "Obsidian", value: "default", swatch: "#333333" },
  { label: "Cobalt", value: "blue", swatch: "#3979e8" },
  { label: "Amethyst", value: "purple", swatch: "#a855f7" },
  { label: "Crimson", value: "red", swatch: "#d75b5b" },
];

export default function ColorPaletteToggle() {
  const { colorPalette, setColorPalette } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Choose color palette"
          className="focus-visible:border-transparent focus-visible:bg-accent focus-visible:ring-0"
        >
          <Palette className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {colorPalettes.map(({ label, value, swatch }) => (
            <DropdownMenuItem
              key={value}
              onClick={() => setColorPalette(value)}
              className="flex items-center gap-2"
            >
              <span
                aria-hidden="true"
                className="size-3 rounded-full"
                style={{ backgroundColor: swatch }}
              />
              <span className="flex-1">{label}</span>
              {colorPalette === value && <Check className="size-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
