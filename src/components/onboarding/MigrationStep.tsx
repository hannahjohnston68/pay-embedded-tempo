import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";

interface MigrationStepProps {
  onNext?: () => void;
  onBack?: () => void;
  currentStep?: number;
  totalSteps?: number;
}

const MigrationStep = ({
  onNext = () => {},
  onBack = () => {},
  currentStep = 3,
  totalSteps = 8,
}: MigrationStepProps) => {
  const [migrationOption, setMigrationOption] = useState<string>("full");
  const [selectedData, setSelectedData] = useState<string[]>([
    "payment_methods",
    "transaction_history",
    "customer_data",
  ]);

  const toggleDataSelection = (value: string) => {
    if (selectedData.includes(value)) {
      setSelectedData(selectedData.filter((item) => item !== value));
    } else {
      setSelectedData([...selectedData, value]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm">
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Migrate from Shuttle to Method Pay
          </h1>
          <p className="text-gray-600 mt-2">
            We've detected that you're currently using Shuttle for payment
            processing. Method Pay offers enhanced features and better
            integration with QuickBooks.
          </p>
        </div>

        {/* Benefits comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Why switch to Method Pay?</CardTitle>
            <CardDescription>
              Compare the benefits of Method Pay vs Shuttle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center font-medium">Shuttle</div>
              <div className="col-span-1 text-center font-medium text-primary">
                Method Pay
              </div>

              <div className="col-span-1 font-medium">
                QuickBooks Integration
              </div>
              <div className="col-span-1 text-center">Basic</div>
              <div className="col-span-1 text-center text-primary flex justify-center">
                <CheckCircle className="h-5 w-5" /> Advanced
              </div>

              <div className="col-span-1 font-medium">Processing Fees</div>
              <div className="col-span-1 text-center">2.9% + $0.30</div>
              <div className="col-span-1 text-center text-primary">
                2.5% + $0.25
              </div>

              <div className="col-span-1 font-medium">Payout Speed</div>
              <div className="col-span-1 text-center">2-3 days</div>
              <div className="col-span-1 text-center text-primary">
                Next day
              </div>

              <div className="col-span-1 font-medium">
                Automated Reconciliation
              </div>
              <div className="col-span-1 text-center">Limited</div>
              <div className="col-span-1 text-center text-primary flex justify-center">
                <CheckCircle className="h-5 w-5" /> Full
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Migration options */}
        <Card>
          <CardHeader>
            <CardTitle>Choose your migration option</CardTitle>
            <CardDescription>
              Select how you want to migrate your Shuttle data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={migrationOption}
              onValueChange={setMigrationOption}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <RadioGroupItem value="full" id="full" className="mt-1" />
                <div>
                  <label
                    htmlFor="full"
                    className="font-medium text-gray-900 block cursor-pointer"
                  >
                    Full Migration
                  </label>
                  <p className="text-gray-500 text-sm">
                    Transfer all your payment data, settings, and customer
                    information from Shuttle to Method Pay.
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="text-primary font-medium flex items-center">
                    <Zap className="h-4 w-4 mr-1" /> Recommended
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <RadioGroupItem value="partial" id="partial" className="mt-1" />
                <div>
                  <label
                    htmlFor="partial"
                    className="font-medium text-gray-900 block cursor-pointer"
                  >
                    Custom Migration
                  </label>
                  <p className="text-gray-500 text-sm">
                    Select specific data to migrate from Shuttle to Method Pay.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <RadioGroupItem value="fresh" id="fresh" className="mt-1" />
                <div>
                  <label
                    htmlFor="fresh"
                    className="font-medium text-gray-900 block cursor-pointer"
                  >
                    Fresh Start
                  </label>
                  <p className="text-gray-500 text-sm">
                    Start with a clean slate in Method Pay without migrating any
                    data from Shuttle.
                  </p>
                </div>
              </div>
            </RadioGroup>

            {migrationOption === "partial" && (
              <div className="mt-6 border rounded-lg p-4 bg-gray-50">
                <h4 className="font-medium mb-3">Select data to migrate</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payment_methods"
                      checked={selectedData.includes("payment_methods")}
                      onCheckedChange={() =>
                        toggleDataSelection("payment_methods")
                      }
                    />
                    <label
                      htmlFor="payment_methods"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Saved payment methods
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="transaction_history"
                      checked={selectedData.includes("transaction_history")}
                      onCheckedChange={() =>
                        toggleDataSelection("transaction_history")
                      }
                    />
                    <label
                      htmlFor="transaction_history"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Transaction history
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customer_data"
                      checked={selectedData.includes("customer_data")}
                      onCheckedChange={() =>
                        toggleDataSelection("customer_data")
                      }
                    />
                    <label
                      htmlFor="customer_data"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Customer data
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payment_settings"
                      checked={selectedData.includes("payment_settings")}
                      onCheckedChange={() =>
                        toggleDataSelection("payment_settings")
                      }
                    />
                    <label
                      htmlFor="payment_settings"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Payment settings
                    </label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Migration incentive */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 bg-primary/10 p-3 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Special Migration Offer
                </h3>
                <p className="text-gray-600 mb-2">
                  Switch to Method Pay now and receive:
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" /> No
                    processing fees for your first $5,000 in transactions
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" /> Free
                    priority support for 3 months
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" /> Dedicated
                    migration specialist
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-6" />

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="gap-1">
          Continue <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MigrationStep;
