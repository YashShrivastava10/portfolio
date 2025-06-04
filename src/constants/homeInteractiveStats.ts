import { getRoundedYOE } from "@/utils/getYOE";
import { Briefcase, Code2, FolderKanban, Package } from "lucide-react";
export const interactiveStats = [
  {
    icon: Briefcase,
    label: "Experience",
    value: getRoundedYOE(),
    unit: "Years",
    description: "Professional Development",
    href: "/experience",
  },
  {
    icon: Code2,
    label: "Technologies",
    value: "20+",
    unit: "Skills",
    description: "React, Node, Docker & More",
    href: "/skills",
  },
  {
    icon: Package,
    label: "Open Source",
    value: "400+",
    unit: "Downloads",
    description: "NPM Package in 24hrs",
    href: "/projects",
  },
  {
    icon: FolderKanban,
    label: "Projects",
    value: "15+",
    unit: "Built",
    description: "Successful Deliveries",
    href: "/projects",
  },
];
//   {
//     icon: UserCircle,
//     label: "About",
//     value: "My",
//     unit: "Story",
//     description: "Personal Journey",
//     href: "/about",
//   },
// ];
