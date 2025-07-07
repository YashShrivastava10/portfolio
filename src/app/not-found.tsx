"use client";

import { Button, Card } from "@/components/ui";
import {
  ArrowLeft,
  Briefcase,
  Code2,
  Download,
  FolderKanban,
  Home,
  Mail,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const quickLinks = [
    {
      name: "Projects",
      href: "/projects",
      icon: <FolderKanban className="h-4 w-4" />,
    },
    {
      name: "Skills",
      href: "/skills",
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      name: "Experience",
      href: "/experience",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "About Me",
      href: "/about",
      icon: <UserCircle className="h-4 w-4" />,
    },
    { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" /> },
    {
      name: "Resume",
      href: "/Yash_Resume.pdf",
      icon: <Download className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-2xl px-2 text-center">
        {/* 404 Animation */}
        <div className="relative mb-6 md:mb-12">
          <div className="gradient-text text-8xl font-bold opacity-20 select-none md:text-9xl">
            404
          </div>

          {/* Floating Elements Around 404 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="gradient-cyan animate-float absolute -top-8 -left-8 h-4 w-4 rounded-full"></div>
              <div
                className="gradient-orange animate-float absolute -top-4 right-8 h-3 w-3 rounded-full"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="gradient-purple animate-float absolute top-8 -right-8 h-5 w-5 rounded-full"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="gradient-bg animate-float absolute bottom-4 -left-12 h-2 w-2 rounded-full"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            <span className="gradient-text">Page Not Found</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void. Don&apos;t worry, even the best developers
            encounter 404s!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button
              size="lg"
              className="gradient-bg w-full text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="hover:bg-primary/10 w-full border-2 sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Quick Navigation */}
        <Card className="p-8">
          <h2 className="mb-6 text-xl font-semibold">Quick Navigation</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {quickLinks.map((link, index) => {
              const isLast = index === quickLinks.length - 1;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={` ${isLast && ""} `}
                >
                  <div className="group cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-primary/10 group-hover:bg-primary/20 text-primary rounded-full p-2 transition-colors">
                        {link.icon}
                      </div>
                      <span className="text-sm font-medium">{link.name}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Card>

        {/* Fun Message */}
        <div className="bg-muted/30 mt-12 rounded-lg p-6">
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold">Fun Fact:</span> The first
            documented case of a 404 error was at CERN in 1992. You&apos;re now
            part of a long tradition of digital explorers! 🚀
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="gradient-cyan absolute top-20 left-10 hidden h-6 w-6 animate-pulse rounded-full opacity-20 lg:block"></div>
        <div
          className="gradient-orange absolute top-40 right-20 hidden h-4 w-4 animate-pulse rounded-full opacity-30 lg:block"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="gradient-purple absolute bottom-20 left-20 hidden h-8 w-8 animate-pulse rounded-full opacity-15 lg:block"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="gradient-bg absolute right-10 bottom-40 hidden h-3 w-3 animate-pulse rounded-full opacity-25 lg:block"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </div>
  );
}
