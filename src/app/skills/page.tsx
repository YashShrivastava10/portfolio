import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { skills } from "@/constants/skills";
import { Cloud, Code, Database, Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills | Yash Shrivastava, Web Developer",
  description:
    "A comprehensive overview of Yash Shrivastava's full-stack development skills, including programming languages (e.g., JavaScript, Python), frameworks (e.g., React, Node.js), databases, and tools.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE}/skills`,
  },
};

const SkillsPage = () => {
  const getIcon = {
    frontend: Code,
    backend: Database,
    cloud: Cloud,
    tools: Wrench,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          My <span className="text-primary">Skills</span>
        </h1>
        <p className="text-muted-foreground mx-auto text-center text-lg leading-relaxed">
          A comprehensive overview of my technical expertise across the full
          development stack
        </p>
      </div>
      <div className="lg: grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([cat, skill]) => {
          const Icon = getIcon[cat as keyof typeof getIcon];
          return (
            <Card key={cat}>
              <CardHeader className="capitalize">
                <CardTitle className="flex items-center gap-2">
                  <Icon className="bg-primary/10 text-primary size-10 rounded-xl p-2" />
                  <span className="text-xl">{cat}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {skill.map((s) => (
                  <Badge key={s} className="text-sm">
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
