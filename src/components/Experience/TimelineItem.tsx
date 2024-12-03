import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  period,
  isLast,
}: TimelineItemProps) => {
  return (
    <div className="flex gap-4 mb-8">
      {/* Timeline dot and line */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative mt-2"
      >
        {/* Circle */}
        <div className="w-4 h-4 border-2 rounded-full border-accent bg-secondary" />

        {/* Vertical line */}
        {!isLast && (
          <div className="absolute top-4 left-1/2 w-[2px] h-[calc(100%+1.5rem)] bg-accent transform -translate-x-1/2" />
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <div className="p-6 transition-shadow rounded-lg shadow-lg bg-primary hover:shadow-xl">
          <h3 className="mb-2 text-xl font-bold text-accent">{title}</h3>
          <p className="mb-1 font-medium text-textColor/90">{company}</p>
          <p className="text-sm text-textColor/70">{period}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
