import { InteractiveCards } from "@/components/Home/InteractiveCards";
import { SocialLinks } from "@/components/Home/SocialLinks";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yash Shrivastava | Web Developer Portfolio",
  description:
    "Explore the web developer portfolio of Yash Shrivastava. Discover innovative web projects, technical skills, and professional experience. Based in Madhya Pradesh, India",
};

export default function Home() {
  return (
    <div className="grid h-full grid-cols-12 items-center justify-center gap-4">
      <div className="col-span-12 flex flex-1 flex-col gap-6 md:col-span-7">
        <div className="flex flex-col items-center gap-3 md:items-start md:gap-4">
          <span className="text-muted-foreground md:text-lg">
            Hello, I&apos;m
          </span>
          <span className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Yash Shrivastava
          </span>
          <span className="text-primary text-xl font-medium md:text-3xl">
            Web Developer
          </span>
        </div>
        <span className="text-muted-foreground text-center text-wrap md:text-left md:text-lg">
          Crafting modern web apps — fast, efficient, and built to scale.
        </span>
        <div className="flex justify-center md:justify-start">
          <Button size="lg" className="rounded-full" asChild>
            <Link href={ROUTES.CONTACT} className="flex items-center gap-2">
              Get In Touch <ArrowRight />
            </Link>
          </Button>
        </div>
        <SocialLinks />
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-1 lg:grid-cols-2">
        <InteractiveCards />
      </div>
    </div>
  );
}
