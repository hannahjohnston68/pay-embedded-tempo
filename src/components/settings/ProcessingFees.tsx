import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Zap, Info } from "lucide-react";

const ProcessingFees = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Processing Fees">
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
              <Zap className="h-5 w-5" />
              Processing Fees
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700 text-sm">
                Current Rate: 2.9% + $0.30 per transaction
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Fee Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 border rounded-lg">
                  <span>Base Rate</span>
                  <span className="font-medium">2.9%</span>
                </div>
                <div className="flex justify-between p-3 border rounded-lg">
                  <span>Fixed Fee</span>
                  <span className="font-medium">$0.30</span>
                </div>
                <div className="flex justify-between p-3 border rounded-lg bg-gray-50">
                  <span className="font-medium">Total per Transaction</span>
                  <span className="font-medium">2.9% + $0.30</span>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg flex gap-2">
                <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Processing fees are automatically deducted from each transaction. 
                  Volume discounts may be available for businesses processing over $100,000 per month.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ProcessingFees;