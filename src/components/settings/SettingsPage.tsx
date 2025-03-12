import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import PreferencesStep from "../onboarding/PreferencesStep";
import AlertTypes from "../notifications/AlertTypes";
import ChannelPreferences from "../notifications/ChannelPreferences";
import {
  Building2, // Replace Bank with Building2 for company/bank icon
  CreditCard,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Calendar,
  Settings,
  Bell,
  Lock,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Method Pay Settings">
      <div className="space-y-6 max-w-6xl mx-auto">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="general">
              Overview
            </TabsTrigger>
            <TabsTrigger value="payment">
              Payment Settings
            </TabsTrigger>
            <TabsTrigger value="notifications">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Overview</CardTitle>
                <CardDescription>
                  Manage your payout schedule, processing fees, and banking details
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Payout Schedule
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Current schedule: Weekly payouts every Friday
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/payout-schedule')}
                    >
                      Manage Schedule <ArrowRight className="h-4 w-4" />
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
                      Current rate: 2.9% + $0.30 per transaction
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/processing-fees')}
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Connected Bank Account
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Chase Business ****4589
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/bank-account')}
                    >
                      Manage Account <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Balance Overview section removed */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>
                  Configure your default payment methods and terms
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Default Payment Method
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure your preferred payment method for transactions
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/payment-method')}
                    >
                      Configure <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-green-50 text-green-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Payment Terms
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Set default payment terms for your invoices
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/payment-terms')}
                    >
                      Manage Terms <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Tabs defaultValue="types" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="types">Alert Types</TabsTrigger>
                <TabsTrigger value="channels">
                  Communication Channels
                </TabsTrigger>
              </TabsList>
              <TabsContent value="types" className="mt-0">
                <AlertTypes />
              </TabsContent>
              <TabsContent value="channels" className="mt-0">
                <ChannelPreferences />
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Configure fraud protection and monitor access logs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight">
                        Fraud Protection
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Configure fraud detection rules and security thresholds
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/fraud-protection')}
                    >
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
                      View account access logs and security audit trails
                    </p>
                    <Button 
                      className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
                      onClick={() => navigate('/settings/access-logs')}
                    >
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
