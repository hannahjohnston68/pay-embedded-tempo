import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CreditCard, Wallet, BanknoteIcon, QrCode } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  enabled: boolean;
}

interface PaymentOptionsProps {
  methods?: PaymentMethod[];
  onMethodToggle?: (id: string, enabled: boolean) => void;
  onSave?: () => void;
}

const PaymentOptions = ({
  methods = [
    {
      id: "credit-card",
      name: "Credit Card",
      icon: <CreditCard className="h-5 w-5" />,
      description: "Accept Visa, Mastercard, Amex, and Discover",
      enabled: true,
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer (ACH)",
      icon: <BanknoteIcon className="h-5 w-5" />,
      description: "Direct bank transfers with lower fees",
      enabled: true,
    },
    {
      id: "digital-wallet",
      name: "Digital Wallet",
      icon: <Wallet className="h-5 w-5" />,
      description: "Apple Pay, Google Pay, and other digital wallets",
      enabled: false,
    },
    {
      id: "qr-code",
      name: "QR Code Payment",
      icon: <QrCode className="h-5 w-5" />,
      description: "Generate QR codes for in-person payments",
      enabled: false,
    },
  ],
  onMethodToggle = () => {},
  onSave = () => {},
}: PaymentOptionsProps) => {
  return (
    <Card className="w-full bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Payment Options</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">
          Select which payment methods you want to offer on this invoice.
        </p>
        <div className="space-y-4">
          {methods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{method.name}</h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Switch
                        checked={method.enabled}
                        onCheckedChange={(checked) =>
                          onMethodToggle(method.id, checked)
                        }
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {method.enabled ? "Disable" : "Enable"} {method.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-gray-100 pt-4">
        <Button
          onClick={onSave}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Save Payment Options
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentOptions;
