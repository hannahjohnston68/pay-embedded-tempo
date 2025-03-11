import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import { FileText, Shield, CheckCircle } from "lucide-react";

interface TermsStepProps {
  onNext?: () => void;
  onBack?: () => void;
}

const TermsStep = ({
  onNext = () => {},
  onBack = () => {},
}: TermsStepProps) => {
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [privacyAccepted, setPrivacyAccepted] = React.useState(false);
  const [processingAccepted, setProcessingAccepted] = React.useState(false);

  const allTermsAccepted =
    termsAccepted && privacyAccepted && processingAccepted;

  return (
    <div className="w-full h-full bg-background p-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Terms and Conditions
          </CardTitle>
          <CardDescription>
            Please review and accept the following terms to complete your Method
            Pay setup.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Legal Documents</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The following documents outline the terms of using Method Pay
              services. Please review each document carefully.
            </p>

            <ScrollArea className="h-64 rounded border p-4 bg-background">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="terms">
                  <AccordionTrigger>Terms of Service</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm space-y-2">
                      <h4 className="font-medium">1. Introduction</h4>
                      <p>
                        Welcome to Method Pay. By using our payment processing
                        services, you agree to these Terms of Service.
                      </p>

                      <h4 className="font-medium">2. Service Description</h4>
                      <p>
                        Method Pay provides payment processing services that
                        allow you to accept payments from your customers and
                        integrate with QuickBooks.
                      </p>

                      <h4 className="font-medium">3. Account Registration</h4>
                      <p>
                        To use Method Pay, you must complete the registration
                        process and provide accurate information about your
                        business.
                      </p>

                      <h4 className="font-medium">4. Fees and Payments</h4>
                      <p>
                        Method Pay charges processing fees for transactions.
                        These fees will be clearly disclosed during the
                        onboarding process.
                      </p>

                      <h4 className="font-medium">5. Term and Termination</h4>
                      <p>
                        This agreement remains in effect until terminated by
                        either party. You may terminate at any time by closing
                        your account.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy">
                  <AccordionTrigger>Privacy Policy</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm space-y-2">
                      <h4 className="font-medium">1. Information Collection</h4>
                      <p>
                        We collect personal and business information necessary
                        to provide our services, including contact details,
                        banking information, and transaction data.
                      </p>

                      <h4 className="font-medium">2. Use of Information</h4>
                      <p>
                        We use your information to process payments, prevent
                        fraud, improve our services, and comply with legal
                        obligations.
                      </p>

                      <h4 className="font-medium">3. Information Sharing</h4>
                      <p>
                        We may share your information with payment processors,
                        financial institutions, and other service providers
                        necessary to complete transactions.
                      </p>

                      <h4 className="font-medium">4. Data Security</h4>
                      <p>
                        We implement industry-standard security measures to
                        protect your information from unauthorized access or
                        disclosure.
                      </p>

                      <h4 className="font-medium">5. Your Rights</h4>
                      <p>
                        You have the right to access, correct, or delete your
                        personal information. Contact our support team to
                        exercise these rights.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="processing">
                  <AccordionTrigger>
                    Payment Processing Agreement
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm space-y-2">
                      <h4 className="font-medium">
                        1. Payment Processing Services
                      </h4>
                      <p>
                        Method Pay will process payments on your behalf
                        according to the instructions you provide through our
                        platform.
                      </p>

                      <h4 className="font-medium">2. Settlement of Funds</h4>
                      <p>
                        Funds from processed payments will be settled to your
                        designated bank account according to the schedule
                        specified in your account settings.
                      </p>

                      <h4 className="font-medium">
                        3. Chargebacks and Disputes
                      </h4>
                      <p>
                        You are responsible for responding to and resolving any
                        chargebacks or disputes related to transactions
                        processed through Method Pay.
                      </p>

                      <h4 className="font-medium">4. Prohibited Activities</h4>
                      <p>
                        You agree not to use Method Pay for any illegal or
                        prohibited activities, including fraud, money
                        laundering, or selling prohibited goods or services.
                      </p>

                      <h4 className="font-medium">5. Compliance with Laws</h4>
                      <p>
                        You agree to comply with all applicable laws and
                        regulations related to payment processing, including tax
                        laws and data protection regulations.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) =>
                  setTermsAccepted(checked === true)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to the Terms of Service
                </label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy"
                checked={privacyAccepted}
                onCheckedChange={(checked) =>
                  setPrivacyAccepted(checked === true)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="privacy"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to the Privacy Policy
                </label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="processing"
                checked={processingAccepted}
                onCheckedChange={(checked) =>
                  setProcessingAccepted(checked === true)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="processing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to the Payment Processing Agreement
                </label>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Security Assurance</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Method Pay uses industry-standard security protocols to protect
              your data and transactions. All payment information is encrypted
              and securely stored in compliance with PCI DSS standards.
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>

          <Button
            onClick={onNext}
            disabled={!allTermsAccepted}
            className="gap-2"
          >
            {allTermsAccepted && <CheckCircle className="h-4 w-4" />}
            Accept & Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TermsStep;
