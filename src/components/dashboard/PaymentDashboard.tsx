import React from "react";
import Layout from "../layout/Layout";
import DashboardHeader from "./DashboardHeader";
import OutstandingInvoices from "./OutstandingInvoices";
import NotificationCenter from "./NotificationCenter";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock } from "lucide-react";

const PaymentDashboard = () => {
  return (
    <Layout title="Payment Dashboard">
      <div className="space-y-6">
        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <OutstandingInvoices />
          </div>
          <div className="space-y-6">
            <Card className="w-full h-auto bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-green-100">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Conversion Rate</h3>
                </div>
                <div className="mt-2">
                  <p className="text-3xl font-bold text-gray-900">78.5%</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Invoice payment rate
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-green-600">
                      ↑ 4.3%
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      from last month
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full h-auto bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    Avg. Processing Time
                  </h3>
                </div>
                <div className="mt-2">
                  <p className="text-3xl font-bold text-gray-900">1.2 days</p>
                  <p className="text-sm text-gray-500 mt-1">
                    From invoice to payment
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-green-600">
                      ↓ 0.3 days
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      faster than last month
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <NotificationCenter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDashboard;
