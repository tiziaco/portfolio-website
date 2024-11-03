import React from 'react';
import { cn } from "@/lib/utils";

export const ShiftedGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  // Split children into two columns for the nested grid
  const leftColumnItems = React.Children.toArray(children).filter((_, i) => i % 2 === 0);
  const rightColumnItems = React.Children.toArray(children).filter((_, i) => i % 2 === 1);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 items-start", className)}>
      {/* Left column */}
      <div className="grid grid-cols-1 gap-8">
        {leftColumnItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* Right column with top margin */}
      <div className="grid grid-cols-1 gap-8 items-start md:pt-40">
        {rightColumnItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
