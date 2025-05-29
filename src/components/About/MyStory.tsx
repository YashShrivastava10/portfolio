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
          I&apos;ll be honest — I had zero exposure to coding before college.
          The first time I heard the word &ldquo;coding&ldquo; was during my
          freshman year, and let me tell you, it was intimidating! 😅
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Those early days were rough. I struggled with basic concepts, spent
          countless hours debugging simple programs, and questioned if I was cut
          out for this. But something kept me going — maybe it was the
          satisfaction of finally getting that code to work, or the realization
          that I was building something from nothing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Fast forward ~4 years, and here I am! What started as curiosity about
          frontend development has evolved into a full-stack journey. I&apos;ve
          explored backend development, databases, cloud technologies, and even
          DevOps. Each new technology feels like unlocking a new superpower, and
          I love how the pieces of the puzzle keep fitting together to create
          something bigger! 🚀
        </p>
      </CardContent>
    </Card>
  );
};
