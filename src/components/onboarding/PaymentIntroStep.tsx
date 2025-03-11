import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { CheckCircle, CreditCard, Shield, Zap } from "lucide-react";

interface PaymentIntroStepProps {
  onNext?: () => void;
  onBack?: () => void;
}

const PaymentIntroStep = ({
  onNext = () => {},
  onBack = () => {},
}: PaymentIntroStepProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Method Pay
        </h1>
        <p className="text-gray-600 mt-2">
          Our seamless payment processing solution designed for your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-500" />
              <CardTitle>Faster Payments</CardTitle>
            </div>
            <CardDescription>
              Get paid quickly with our optimized payment processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Receive payments within 1-2 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Automatic payment reminders for clients</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Multiple payment methods supported</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
              <CardTitle>Seamless Integration</CardTitle>
            </div>
            <CardDescription>
              Works perfectly with your existing QuickBooks setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Automatic reconciliation with QuickBooks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Real-time payment status updates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Simplified reporting and analytics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-500" />
            <CardTitle>Secure and Reliable</CardTitle>
          </div>
          <CardDescription>
            Your business and customer data is always protected
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">PCI Compliant</h3>
              <p className="text-sm text-gray-600">
                All transactions follow the highest security standards
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Fraud Protection
              </h3>
              <p className="text-sm text-gray-600">
                Advanced fraud detection and prevention systems
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Data Encryption
              </h3>
              <p className="text-sm text-gray-600">
                End-to-end encryption for all sensitive information
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Competitive Pricing
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-2">Transaction Fees</h3>
            <p className="text-3xl font-bold text-blue-600">
              2.9% <span className="text-lg">+ $0.30</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Per successful transaction
            </p>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-2">Monthly Fee</h3>
            <p className="text-3xl font-bold text-blue-600">$0</p>
            <p className="text-sm text-gray-600 mt-1">
              No monthly subscription required
            </p>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-2">Setup Fee</h3>
            <p className="text-3xl font-bold text-blue-600">$0</p>
            <p className="text-sm text-gray-600 mt-1">
              No setup or hidden fees
            </p>
          </div>
        </div>
      </div>

      <CardFooter className="flex justify-between pt-4 border-t">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Continue to Setup</Button>
      </CardFooter>
    </div>
  );
};

export default PaymentIntroStep;
