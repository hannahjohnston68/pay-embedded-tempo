import React from "react";
import Layout from "../layout/Layout";
import DashboardHeader from "./DashboardHeader";
import OutstandingInvoices from "./OutstandingInvoices";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock } from "lucide-react";

const PaymentDashboard = () => {
  return (
    <Layout title="Payment Dashboard">
      <div className="space-y-6">
        <DashboardHeader />

        {/* Single set of metric tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-blue-600">
                  Total Transactions
                </span>
                <span className="text-2xl font-bold mt-1">156</span>
                <span className="text-xs text-gray-500 mt-1">Last 30 days</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-green-600">
                  Total Amount
                </span>
                <span className="text-2xl font-bold mt-1">$12,450.80</span>
                <span className="text-xs text-gray-500 mt-1">Last 30 days</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-amber-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-amber-600">
                  Pending Payments
                </span>
                <span className="text-2xl font-bold mt-1">$3,450.75</span>
                <span className="text-xs text-gray-500 mt-1">
                  5 invoices awaiting payment
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">
                    Conversion Rate
                  </span>
                </div>
                <span className="text-2xl font-bold mt-1">78.5%</span>
                <span className="text-xs text-gray-500 mt-1">
                  ↑ 4.3% from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    Avg. Processing
                  </span>
                </div>
                <span className="text-2xl font-bold mt-1">1.2 days</span>
                <span className="text-xs text-gray-500 mt-1">
                  ↓ 0.3 days vs. last month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <OutstandingInvoices />
      </div>
    </Layout>
  );
};

export default PaymentDashboard;
