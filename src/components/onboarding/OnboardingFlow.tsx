import React, { useState } from "react";
import Layout from "../layout/Layout";
import OnboardingProgress from "./OnboardingProgress";
import PaymentIntroStep from "./PaymentIntroStep";
import AccountSetupStep from "./AccountSetupStep";
import MigrationStep from "./MigrationStep";
import BankConnectionStep from "./BankConnectionStep";
import VerificationStep from "./VerificationStep";
import TermsStep from "./TermsStep";
import CompletionStep from "./CompletionStep";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7; // Reduced by 1

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PaymentIntroStep onNext={handleNext} />;
      case 2:
        return <AccountSetupStep onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <MigrationStep onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <BankConnectionStep onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <VerificationStep onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <TermsStep onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <CompletionStep />;
      default:
        return <PaymentIntroStep onNext={handleNext} />;
    }
  };

  return (
    <Layout title="Method Pay Setup">
      <div className="max-w-6xl mx-auto space-y-6">
        <OnboardingProgress currentStep={currentStep} />
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {renderStep()}
        </div>
      </div>
    </Layout>
  );
};

export default OnboardingFlow;
