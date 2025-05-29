"use client";

import { Badge, Button, Card, CardContent } from "@/components/ui";
import { educations, experiences } from "@/constants/experience";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const isExp = activeTab === "experience";
  const currentData = isExp ? experiences : educations;
  const Icon = isExp ? Briefcase : GraduationCap;

  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-12 sm:mt-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          My <span className="text-primary">Experience</span>
        </h1>
        <p className="text-muted-foreground mx-auto text-center text-lg leading-relaxed">
          My educational background and professional journey in software
          development
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-muted flex rounded-lg p-1">
          <Button
            variant={activeTab === "experience" ? "default" : "ghost"}
            onClick={() => setActiveTab("experience")}
            className="flex items-center gap-2"
          >
            <Briefcase className="h-4 w-4" />
            Experience
          </Button>
          <Button
            variant={activeTab === "education" ? "default" : "ghost"}
            onClick={() => setActiveTab("education")}
            className="flex items-center gap-2"
          >
            <GraduationCap className="h-4 w-4" />
            Education
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto w-full pl-4 lg:pl-0">
        {/* Timeline Line */}
        <div className="bg-border absolute left-4 h-full w-0.5 -translate-x-1/2 transform lg:left-1/2" />

        <div className="flex flex-col gap-16">
          {currentData.map((item, index) => (
            <div
              key={item.title}
              className={`relative lg:w-1/2 ${
                index % 2 === 0 ? "lg:ml-auto" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 rounded-full bg-purple-100 p-2 dark:bg-purple-900 ${
                  index % 2 === 0
                    ? "left-0 -translate-x-1/2 lg:left-0"
                    : "left-0 -translate-x-1/2 lg:right-0 lg:left-auto lg:translate-x-1/2"
                }`}
              >
                <Icon className="text-primary size-5" />
              </div>

              <Card
                className={`overflow-hidden border-l-4 ${
                  isExp
                    ? "border-l-purple-600 dark:border-l-purple-600"
                    : "border-l-amber-500 dark:border-l-amber-500"
                }`}
              >
                <CardContent className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="xs:text-2xl text-xl font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-primary xs:text-lg flex items-center gap-2 font-semibold">
                      <Icon className="size-4" />
                      {item.company}
                    </span>
                  </div>

                  <span className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <span className="text-muted-foreground xs:text-base flex items-center gap-2 text-sm font-medium">
                      <Calendar className="size-4" />
                      {item.period}
                    </span>
                    <span className="text-muted-foreground xs:text-base flex items-center gap-2 text-sm font-medium">
                      <MapPin className="size-4" />
                      {item.location}
                    </span>
                  </span>

                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold">
                      {isExp ? "Key Achievements:" : "Highlights:"}
                    </h4>
                    <ul className="space-y-2">
                      {item.acheivements.map((achievement) => (
                        <li key={achievement} className="flex items-start">
                          <div className="bg-primary mt-2 mr-3 size-2 flex-shrink-0 rounded-full" />
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
