import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { ROUTES } from "@/constants";
import { Download } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo  */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/profile.gif" alt="@YS" />
              <AvatarFallback>YS</AvatarFallback>
            </Avatar>
            <span className="text-2xl font-bold">Yash</span>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* Call to Action and Theme Toggle */}
          <div className="flex items-center gap-4">
            <Button className="rounded-full">
              <Download />
              Resume
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
