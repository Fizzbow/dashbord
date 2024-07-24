import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { ReactNode } from "react";

const InsightCardContain = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        `bg-[#121212] border border-[#2D2D2D]  text-white flex flex-col ${className}`
      )}
    >
      {children}
    </Card>
  );
};

export default InsightCardContain;
