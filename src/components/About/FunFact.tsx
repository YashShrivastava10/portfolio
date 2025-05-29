import { Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";

export const FunFact = () => {
  return (
    <Card className="from-primary/5 to-primary/10 dark:border-primary/20 bg-gradient-to-r">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Utensils className="text-primary h-5 w-5" />
          Fun Fact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          Here&apos;s something that might make you smile: I once seriously
          considered Hyderabad as a job location primarily because of its
          legendary biryani! 🍛
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          I mean, great career opportunities are important, but have you tried
          authentic Hyderabadi biryani? Priorities, right? 😄
        </p>
      </CardContent>
    </Card>
  );
};
