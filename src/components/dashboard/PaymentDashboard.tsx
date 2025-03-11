import React from "react";
import Layout from "../layout/Layout";
import DashboardHeader from "./DashboardHeader";
import OutstandingInvoices from "./OutstandingInvoices";
import QuickBooksReconciliation from "./QuickBooksReconciliation";
import NotificationCenter from "./NotificationCenter";

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
            <QuickBooksReconciliation />
            <NotificationCenter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDashboard;
