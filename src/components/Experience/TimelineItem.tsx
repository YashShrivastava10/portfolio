import React from "react";
import TimelineCircle from "./TimeLineCircle";
import { CalendarDays, Building2 } from "lucide-react";
import MotionContainer from "../common/MotionContainer";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  isLast?: boolean;
  type?: string;
  isLeft?: boolean;
}

const TimelineItem = ({
  title,
  company,
  period,
  type = "exp",
  isLast = false,
  isLeft,
}: TimelineItemProps) => {
  const containerClass = isLeft
    ? "flex-row-reverse md:ml-auto"
    : "flex-row md:mr-auto";

  const contentClass = isLeft
    ? "md:items-end md:text-right"
    : "md:items-start md:text-left";

  return (
    <MotionContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <TimelineCircle type={type} />
      {!isLast && (
        <div className="absolute w-[1px] h-[97%] top-9 transform -translate-x-1/2 bg-textColor left-0 md:left-1/2" />
      )}
      <div className={`flex w-full md:w-1/2 ${containerClass}`}>
        <div className="w-full pl-8 md:px-8 md:pl-auto">
          <div
            className={`flex flex-col self-end gap-2 p-4 bg-primary rounded-lg shadow-md items-start ${contentClass}`}
          >
            <h4 className="text-xl font-semibold text-accent">{title}</h4>
            <div
              className={`flex items-center gap-2 ${
                isLeft ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <Building2 className="w-5 h-5" />
              <h3 className="font-bold text-textColor">{company}</h3>
            </div>
            <div
              className={`flex items-center gap-2  ${
                isLeft ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <CalendarDays className="w-5 h-5" />
              <span className="text-sm text-textColor">{period}</span>
            </div>
          </div>
        </div>
      </div>
    </MotionContainer>
  );
};

export default TimelineItem;
