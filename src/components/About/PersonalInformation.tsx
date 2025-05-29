import { getRoundedYOE } from "@/utils/getYOE";
import { Briefcase, Calendar, Flag, IdCard, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";

const personalInfo = [
  {
    icon: User,
    label: "Full Name",
    value: "Yash Shrivastava",
  },
  {
    icon: Calendar,
    label: "Years of Experience",
    value: `${getRoundedYOE()} Years`,
  },
  {
    icon: Briefcase,
    label: "Freelancing",
    value: "Available",
  },
  {
    icon: Flag,
    label: "Nationality",
    value: "Indian",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Madhya Pradesh, India",
  },
];

export const PersonalInformation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <IdCard className="text-primary size-5" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {personalInfo.map((info) => (
          <div
            key={info.label}
            className="flex items-center gap-4 rounded-lg transition-colors"
          >
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
              <info.icon className="text-primary h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-sm">{info.label}</p>
              <p className="font-medium">{info.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
