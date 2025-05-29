import { Card, CardContent } from "@/components/ui";
import { interactiveStats } from "@/constants/homeInteractiveStats";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const InteractiveCards = () => {
  return (
    <>
      {interactiveStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        >
          <Link href={stat.href}>
            <Card className="group border-border/50 bg-card/50 hover:bg-card/80 h-full cursor-pointer backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:hover:translate-x-2 md:hover:translate-y-0 lg:hover:translate-x-0 lg:hover:-translate-y-2">
              <CardContent className="md:items-startlg:items-center flex flex-col items-center justify-start gap-4 md:flex-row lg:flex-col">
                <div className="flex items-center">
                  <stat.icon className="text-primary bg-primary/10 group-hover:bg-primary/20 size-9 rounded-xl p-2 transition-all duration-300 group-hover:scale-110 sm:size-10" />
                </div>
                <div className="flex flex-1 flex-col text-center md:text-left lg:text-center">
                  <div className="space-x-1">
                    <span className="text-foreground text-xl font-bold sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">
                      {stat.unit}
                    </span>
                  </div>
                  <h3 className="text-foreground text-xs font-semibold tracking-wide uppercase">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-xs leading-tight">
                    {stat.description}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </>
  );
};
