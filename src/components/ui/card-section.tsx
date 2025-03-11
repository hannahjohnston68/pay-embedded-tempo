import React from "react";
import { cn } from "@/lib/utils";

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const CardSection = ({
  title,
  description,
  icon,
  className,
  children,
  ...props
}: CardSectionProps) => {
  return (
    <div
      className={cn(
        "p-6 border border-gray-200 rounded-lg bg-white",
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-3 mb-4">
        {icon && <div className="mt-0.5">{icon}</div>}
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardSection;
