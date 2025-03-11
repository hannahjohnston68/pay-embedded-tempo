import React, { useState } from "react";
import {
  Building2,
  CreditCard,
  Lock,
  Shield,
  CheckCircle,
  Building,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BankConnectionStepProps {
  onNext?: () => void;
  onBack?: () => void;
}

const BankConnectionStep = ({
  onNext = () => {},
  onBack = () => {},
}: BankConnectionStepProps) => {
  const [connectionMethod, setConnectionMethod] = useState<"plaid" | "manual">(
    "plaid",
  );
  const [bankConnected, setBankConnected] = useState(false);

  const handleConnectPlaid = () => {
    // In a real implementation, this would launch the Plaid connection flow
    setTimeout(() => {
      setBankConnected(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Connect Your Bank Account
        </h1>
        <p className="text-gray-600">
          Method Pay requires a secure connection to your business bank account
          to process payments.
        </p>
      </div>

      {!bankConnected ? (
        <div className="space-y-6">
          <div className="flex gap-4">
            <Card
              className={`flex-1 cursor-pointer border-2 ${connectionMethod === "plaid" ? "border-primary" : "border-gray-200"}`}
              onClick={() => setConnectionMethod("plaid")}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle>Connect with Plaid</CardTitle>
                </div>
                <CardDescription>Secure, instant verification</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Connect securely to your bank using Plaid's trusted service.
                  Most major banks supported.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-xs text-gray-500">
                  <Shield className="h-4 w-4 mr-1" /> Bank-level security
                </div>
              </CardFooter>
            </Card>

            <Card
              className={`flex-1 cursor-pointer border-2 ${connectionMethod === "manual" ? "border-primary" : "border-gray-200"}`}
              onClick={() => setConnectionMethod("manual")}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <CardTitle>Manual Entry</CardTitle>
                </div>
                <CardDescription>
                  Enter account details manually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Manually enter your bank account and routing information.
                  Takes 1-2 business days to verify.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-xs text-gray-500">
                  <Lock className="h-4 w-4 mr-1" /> Secure encryption
                </div>
              </CardFooter>
            </Card>
          </div>

          {connectionMethod === "plaid" ? (
            <div className="space-y-4">
              <Alert className="bg-blue-50 border-blue-200">
                <AlertDescription>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">
                        Secure Connection
                      </p>
                      <p className="text-blue-700">
                        Method uses Plaid to securely connect to your bank. Your
                        credentials are never stored by Method.
                      </p>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>

              <div className="flex justify-center">
                <Button size="lg" className="px-8" onClick={handleConnectPlaid}>
                  Connect with Plaid
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                <img
                  src="/assets/bank-logos/chase.svg"
                  alt="Chase"
                  className="h-8 opacity-70"
                />
                <img
                  src="/assets/bank-logos/bofa.svg"
                  alt="Bank of America"
                  className="h-8 opacity-70"
                />
                <img
                  src="/assets/bank-logos/wells-fargo.svg"
                  alt="Wells Fargo"
                  className="h-8 opacity-70"
                />
                <img
                  src="/assets/bank-logos/citi.svg"
                  alt="Citi"
                  className="h-8 opacity-70"
                />
                <span className="text-sm text-gray-500 self-center">
                  + 11,000 more
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="account-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Account Type
                  </label>
                  <Select defaultValue="checking">
                    <SelectTrigger id="account-type">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">
                        Business Checking
                      </SelectItem>
                      <SelectItem value="savings">Business Savings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="bank-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bank Name
                  </label>
                  <Input id="bank-name" placeholder="Enter your bank name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="routing-number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Routing Number
                    </label>
                    <Input id="routing-number" placeholder="9 digits" />
                  </div>
                  <div>
                    <label
                      htmlFor="account-number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Account Number
                    </label>
                    <Input
                      id="account-number"
                      placeholder="Enter account number"
                    />
                  </div>
                </div>

                <Alert className="bg-amber-50 border-amber-200">
                  <AlertDescription>
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-800">
                          Verification Required
                        </p>
                        <p className="text-amber-700">
                          Manual verification takes 1-2 business days. We'll
                          make two small deposits to confirm your account.
                        </p>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              <div className="pt-4">
                <Button className="w-full">Submit Bank Information</Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6 text-center">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Bank Account Connected!
            </h2>
            <p className="text-gray-600 max-w-md">
              Your bank account has been successfully connected to Method Pay.
              You're ready to proceed to the next step.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
            <div className="flex items-center">
              <Building2 className="h-5 w-5 text-gray-500 mr-2" />
              <div className="text-left">
                <p className="font-medium">Business Checking ••••4567</p>
                <p className="text-sm text-gray-500">First National Bank</p>
              </div>
            </div>
          </div>

          <Button onClick={onNext} size="lg" className="px-8">
            Continue
          </Button>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        {!bankConnected && (
          <Button variant="outline" onClick={onNext}>
            Skip for now
          </Button>
        )}
      </div>
    </div>
  );
};

export default BankConnectionStep;
