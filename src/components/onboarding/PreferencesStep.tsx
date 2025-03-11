import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { CreditCard, Clock, Wallet, BellRing, ArrowRight } from "lucide-react";

interface PreferencesStepProps {
  onNext?: () => void;
  onBack?: () => void;
}

const PreferencesStep = ({
  onNext = () => {},
  onBack = () => {},
}: PreferencesStepProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Payment Preferences
        </h1>
        <p className="text-gray-600 mt-2">
          Configure how you want to handle payments and notifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Default Payment Method
            </CardTitle>
            <CardDescription>
              Choose your preferred payment processing method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="credit_card" className="space-y-3">
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="credit_card" id="credit_card" />
                <label
                  htmlFor="credit_card"
                  className="flex flex-1 cursor-pointer items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">Credit/Debit Card</p>
                    <p className="text-xs text-gray-500">
                      Accept all major credit and debit cards
                    </p>
                  </div>
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </label>
              </div>

              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="ach" id="ach" />
                <label
                  htmlFor="ach"
                  className="flex flex-1 cursor-pointer items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">ACH Bank Transfer</p>
                    <p className="text-xs text-gray-500">
                      Direct bank transfers (lower fees)
                    </p>
                  </div>
                  <Wallet className="h-5 w-5 text-gray-400" />
                </label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Default Payment Terms
            </CardTitle>
            <CardDescription>
              Set your standard payment terms for invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="net30" className="space-y-3">
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="due_on_receipt" id="due_on_receipt" />
                <label
                  htmlFor="due_on_receipt"
                  className="flex flex-1 cursor-pointer"
                >
                  <p className="text-sm font-medium">Due on Receipt</p>
                </label>
              </div>

              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="net15" id="net15" />
                <label htmlFor="net15" className="flex flex-1 cursor-pointer">
                  <p className="text-sm font-medium">Net 15</p>
                </label>
              </div>

              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="net30" id="net30" />
                <label htmlFor="net30" className="flex flex-1 cursor-pointer">
                  <p className="text-sm font-medium">Net 30</p>
                </label>
              </div>

              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="net60" id="net60" />
                <label htmlFor="net60" className="flex flex-1 cursor-pointer">
                  <p className="text-sm font-medium">Net 60</p>
                </label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BellRing className="h-5 w-5 text-primary" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Configure how you want to be notified about payment activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium">Payment Received</h4>
                <p className="text-xs text-gray-500">
                  Get notified when a customer makes a payment
                </p>
              </div>
              <Switch defaultChecked id="payment-received" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium">Payment Overdue</h4>
                <p className="text-xs text-gray-500">
                  Get notified when an invoice becomes overdue
                </p>
              </div>
              <Switch defaultChecked id="payment-overdue" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium">QuickBooks Sync Issues</h4>
                <p className="text-xs text-gray-500">
                  Get notified when there are sync issues with QuickBooks
                </p>
              </div>
              <Switch defaultChecked id="sync-issues" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium">Weekly Summary</h4>
                <p className="text-xs text-gray-500">
                  Receive a weekly summary of payment activities
                </p>
              </div>
              <Switch id="weekly-summary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <CardFooter className="flex justify-between mt-8 px-0">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="gap-2">
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </div>
  );
};

export default PreferencesStep;
