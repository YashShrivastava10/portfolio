import { Drumstick, Gamepad2, MonitorPlay, Smartphone, Tv } from "lucide-react";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "../ui";

const interests = [
  { label: "Smartphones & Gadgets", icon: Smartphone },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Web Series", icon: MonitorPlay },
  { label: "Anime", icon: Tv },
  { label: "Foodie", icon: Drumstick },
];

export const Interest = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Smartphone className="text-primary h-5 w-5" />
          Interests & Hobbies
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          During college, I got deeply fascinated by smartphones and tech
          gadgets. There&apos;s something magical about how these tiny devices
          pack so much power and innovation!
        </p>
        <p className="text-muted-foreground leading-relaxed">
          You&apos;ll often find me watching tech review videos — especially
          while eating or during my free time. Whether it&apos;s the latest
          smartphone teardown, software deep dives, or hardware comparisons,
          I&apos;m all in! 📱
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <Badge
                key={interest.label}
                variant="secondary"
                className="hover:bg-primary/20 transition-colors"
              >
                <Icon />
                {interest.label}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
