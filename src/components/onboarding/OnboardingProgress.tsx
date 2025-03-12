import React from "react";
import { Progress } from "../ui/progress";

interface OnboardingProgressProps {
  currentStep: number;
}

const OnboardingProgress = ({ currentStep }: OnboardingProgressProps) => {
  const steps = [
    "Introduction",
    "Account Setup",
    "Migration",
    "Bank Connection",
    "Verification",
    "Preferences",
    "Terms",
    "Completion"
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          Step {currentStep} of {steps.length}
        </span>
        <span className="text-sm text-gray-500">
          {steps[currentStep - 1]}
        </span>
      </div>
      <Progress value={(currentStep / steps.length) * 100} className="h-2" />
    </div>
  );
};

export default OnboardingProgress;
