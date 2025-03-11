import React from "react";
import { Check, CircleDot } from "lucide-react";

interface OnboardingProgressProps {
  currentStep?: number;
  steps?: Array<{
    id: number;
    name: string;
    completed: boolean;
  }>;
}

const OnboardingProgress = ({
  currentStep = 1,
  steps = [
    { id: 1, name: "Account Setup", completed: true },
    { id: 2, name: "Payment Introduction", completed: false },
    { id: 3, name: "Migration", completed: false },
    { id: 4, name: "Bank Connection", completed: false },
    { id: 5, name: "Verification", completed: false },
    { id: 6, name: "Preferences", completed: false },
    { id: 7, name: "Terms", completed: false },
    { id: 8, name: "Completion", completed: false },
  ],
}: OnboardingProgressProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.completed || step.id < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    isCompleted
                      ? "bg-green-600 text-white"
                      : isActive
                        ? "bg-[#0e2356] text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : isActive ? (
                    <CircleDot className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-medium">{step.id}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    isActive
                      ? "text-[#0e2356]"
                      : isCompleted
                        ? "text-green-600"
                        : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 mx-2 ${
                    isCompleted && steps[index + 1].id <= currentStep
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingProgress;
