import { getRoundedYOE } from "@/utils/getYOE";
import { Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";

export const MyStory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Heart className="text-primary h-5 w-5" />
          My Story
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;ll be honest, I had zero exposure to coding before college. The
          first time I heard the word &ldquo;coding&rdquo; was during my
          freshman year, and it felt intimidating! 😅
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The beginning wasn&apos;t easy. I struggled with the basics, spent
          hours debugging simple programs, and often wondered if I was cut out
          for this. But every time I solved a problem or got something working,
          it motivated me to keep going. Slowly, what once felt complicated
          started making sense, and I realized how much I enjoyed building
          things with code.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Fast forward {getRoundedYOE()} years, and that curiosity has taken
          me much further than I imagined. What started with frontend
          development has grown into a full-stack journey with React, Next.js,
          Node.js, and Express. Along the way, I&apos;ve worked with databases
          like MongoDB, Firestore, and BigQuery, explored cloud technologies
          with Google Cloud and AWS, and streamlined development and deployment
          using Docker and CI/CD pipelines.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          More recently, I&apos;ve stepped into the world of Agentic AI,
          building AI-powered solutions using Python, Google ADK, and MCP
          servers. From designing scalable application architectures to
          integrating intelligent agents into existing systems, I&apos;m
          constantly finding new ways to solve problems and build smarter
          products.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Looking back, it&apos;s crazy to think how far I&apos;ve come since
          those first few lines of code. I&apos;m still learning, still
          experimenting, and still excited about what&apos;s next. For me, the
          best part of software development is that there&apos;s always
          something new to explore and another idea waiting to be brought to
          life. 🚀
        </p>
      </CardContent>

    </Card>
  );
};
