import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ArrowLeft, Clock } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const PaymentTerms = () => {
  const navigate = useNavigate();
  const [terms, setTerms] = React.useState("net30");

  return (
    <Layout title="Payment Terms">
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
              <Clock className="h-5 w-5" />
              Payment Terms
            </CardTitle>
            <CardDescription>
              Set default payment terms for your invoices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              defaultValue={terms}
              onValueChange={setTerms}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 border p-4 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="due_on_receipt" id="due_on_receipt" />
                <Label htmlFor="due_on_receipt" className="flex-1 cursor-pointer">
                  <div className="font-medium">Due on Receipt</div>
                  <div className="text-sm text-gray-500">
                    Payment is due immediately upon receipt
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 border p-4 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="net15" id="net15" />
                <Label htmlFor="net15" className="flex-1 cursor-pointer">
                  <div className="font-medium">Net 15</div>
                  <div className="text-sm text-gray-500">
                    Payment is due within 15 days
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 border p-4 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="net30" id="net30" />
                <Label htmlFor="net30" className="flex-1 cursor-pointer">
                  <div className="font-medium">Net 30</div>
                  <div className="text-sm text-gray-500">
                    Payment is due within 30 days
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 border p-4 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="net60" id="net60" />
                <Label htmlFor="net60" className="flex-1 cursor-pointer">
                  <div className="font-medium">Net 60</div>
                  <div className="text-sm text-gray-500">
                    Payment is due within 60 days
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

export default PaymentTerms;