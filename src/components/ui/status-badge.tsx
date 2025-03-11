import React from "react";
import { cn } from "@/lib/utils";

type StatusType = "success" | "warning" | "error" | "info" | "default";

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  className?: string;
}

const StatusBadge = ({ status, text, className }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-amber-100 text-amber-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        getStatusStyles(),
        className,
      )}
    >
      {text}
    </span>
  );
};

export default StatusBadge;
