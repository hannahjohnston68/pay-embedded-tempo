import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CompletionStepProps {
  businessName?: string;
}

const CompletionStep = ({
  businessName = "Your Business",
}: CompletionStepProps) => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/');  // Root path is mapped to Invoices dashboard in App.tsx
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white p-8">
      <div className="max-w-3xl w-full">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Setup Complete!
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Congratulations! {businessName} is now ready to accept payments
            through Method Pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Account Setup</CardTitle>
              <CardDescription>Your payment account is active</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={100} className="h-2 mb-2" />
              <p className="text-sm text-gray-500">100% Complete</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bank Connected</CardTitle>
              <CardDescription>Funds will be deposited here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">$</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Primary Account</p>
                  <p className="text-xs text-gray-500">
                    ••••{Math.floor(1000 + Math.random() * 9000)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification</CardTitle>
              <CardDescription>Identity verified successfully</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm">All requirements met</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Here's what you can do now</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Create your first invoice</h3>
                  <p className="text-sm text-gray-500">
                    Start accepting payments by creating an invoice with
                    embedded payment options.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-medium">
                    Set up notification preferences
                  </h3>
                  <p className="text-sm text-gray-500">
                    Configure how you want to be notified about payment
                    activities.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Explore the payment dashboard</h3>
                  <p className="text-sm text-gray-500">
                    View transaction summaries, outstanding invoices, and
                    QuickBooks reconciliation status.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <CardFooter className="flex justify-center md:justify-end">
          <Button onClick={handleGoToDashboard} className="px-6">
            Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </div>
    </div>
  );
};

export default CompletionStep;
