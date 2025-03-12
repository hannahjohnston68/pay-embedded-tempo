import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ArrowLeft, CreditCard, Wallet } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const DefaultPaymentMethod = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = React.useState("credit_card");

  return (
    <Layout title="Default Payment Method">
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/settings")}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Settings
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Default Payment Method
            </CardTitle>
            <CardDescription>
              Configure your preferred payment method for transactions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              defaultValue={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 border p-4 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="credit_card" id="credit_card" />
                <Label htmlFor="credit_card" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Credit/Debit Card</div>
                      <div className="text-sm text-gray-500">
                        Accept all major credit and debit cards
                      </div>
                    </div>
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 border p-4 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="ach" id="ach" />
                <Label htmlFor="ach" className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">ACH Bank Transfer</div>
                      <div className="text-sm text-gray-500">
                        Direct bank transfers (lower fees)
                      </div>
                    </div>
                    <Wallet className="h-5 w-5 text-gray-400" />
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <div className="flex justify-end space-x-4 pt-6">
              <Button variant="outline" onClick={() => navigate("/settings")}>
                Cancel
              </Button>
              <Button 
                className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white"
                onClick={() => navigate("/settings")}
              >
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DefaultPaymentMethod;