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
          I moved to Hyderabad for career growth, and I&apos;ve definitely grown
          professionally since then. 🚀
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          My food expenses, however, have also experienced some impressive
          growth. 🍛😂
        </p>
      </CardContent>

    </Card>
  );
};
