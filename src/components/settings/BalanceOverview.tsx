import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const BalanceOverview = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Balance Overview">
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
              <DollarSign className="h-5 w-5" />
              Balance Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white border rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Available Balance</p>
                  <h2 className="text-3xl font-semibold">$12,450.75</h2>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90">
                    Withdraw Funds
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Payment Received</p>
                      <p className="text-sm text-gray-500">From Acme Corp</p>
                    </div>
                  </div>
                  <span className="font-medium text-green-600">+$3,500.00</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <ArrowDownRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Withdrawal</p>
                      <p className="text-sm text-gray-500">To Chase Business ****4589</p>
                    </div>
                  </div>
                  <span className="font-medium text-blue-600">-$5,000.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BalanceOverview;