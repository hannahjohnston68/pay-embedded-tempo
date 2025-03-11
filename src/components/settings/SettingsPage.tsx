import React from "react";
import Layout from "../layout/Layout";
import {
  LayoutGrid,
  CreditCard,
  ArrowRight,
  Zap,
  Shield,
  RefreshCw,
  Users,
  Calendar,
  Settings,
  Bell,
  Lock,
  CreditCard as CreditCardIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <Layout title="Settings">
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
            Method Pay Settings
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Configure your Method Pay settings, manage integrations, and
            customize your payment experience.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <Settings className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Account Settings
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Manage your account details, business information, and
                      user preferences.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Manage Account <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-green-50 text-green-600">
                        <Bell className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Notifications
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure how and when you receive notifications about
                      payment activities.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Team Access
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Manage team members and their access permissions to Method
                      Pay.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Manage Team <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <CreditCardIcon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Payment Methods
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure which payment methods you accept from your
                      customers.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-green-50 text-green-600">
                        <Zap className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Processing Fees
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      View and manage your payment processing fees and billing
                      settings.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Payout Schedule
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure when and how often you receive payouts to your
                      bank account.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <RefreshCw className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        QuickBooks
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure your QuickBooks integration and reconciliation
                      settings.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-green-50 text-green-600">
                        <LayoutGrid className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        API Access
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Manage API keys and webhooks for integrating with other
                      systems.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Manage <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Payment Gateways
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure additional payment gateways and processing
                      options.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <Lock className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Authentication
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure two-factor authentication and security settings.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-green-50 text-green-600">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Fraud Protection
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure fraud detection rules and security thresholds.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Access Logs
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      View account access logs and security audit trails.
                    </p>
                    <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                      View Logs <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-gradient-to-r from-[#0e2356]/10 to-[#1a3a7e]/5 p-8 rounded-xl border border-[#0e2356]/10 shadow-sm">
          <h3 className="text-xl font-medium mb-4 text-[#0e2356] tracking-tight">
            Need help with your settings?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">
            Our support team is available to help you configure Method Pay to
            best suit your business needs. Contact us for personalized
            assistance.
          </p>
          <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
            Contact Support
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
