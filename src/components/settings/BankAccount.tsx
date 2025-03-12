import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Building2, Plus, Shield } from "lucide-react";

const BankAccount = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Connected Bank Account">
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
              <Building2 className="h-5 w-5" />
              Connected Bank Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Chase Business</h3>
                  <p className="text-sm text-gray-500">****4589</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                  Primary
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Account
              </Button>
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg flex gap-2">
              <Shield className="h-5 w-5 text-gray-500 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Your bank account information is encrypted and secure. We use 
                industry-standard security measures to protect your data.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BankAccount;