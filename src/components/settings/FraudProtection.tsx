import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FraudProtection = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = React.useState({
    enableFraudDetection: true,
    highRiskThreshold: "1000",
    blockInternational: false,
    requireCVV: true,
    enableIPTracking: true,
  });

  return (
    <Layout title="Fraud Protection">
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
              <Shield className="h-5 w-5" />
              Fraud Protection Settings
            </CardTitle>
            <CardDescription>
              Configure security rules to protect against fraudulent transactions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border p-4 rounded-lg">
                <div className="space-y-0.5">
                  <Label className="text-base">Fraud Detection</Label>
                  <p className="text-sm text-gray-500">
                    Enable automatic fraud detection for transactions
                  </p>
                </div>
                <Switch
                  checked={settings.enableFraudDetection}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, enableFraudDetection: checked })
                  }
                />
              </div>

              <div className="border p-4 rounded-lg space-y-3">
                <Label htmlFor="threshold">High-Risk Transaction Threshold ($)</Label>
                <Input
                  id="threshold"
                  type="number"
                  value={settings.highRiskThreshold}
                  onChange={(e) =>
                    setSettings({ ...settings, highRiskThreshold: e.target.value })
                  }
                  className="max-w-xs"
                />
                <p className="text-sm text-gray-500">
                  Transactions above this amount will require additional verification
                </p>
              </div>

              <div className="flex items-center justify-between border p-4 rounded-lg">
                <div className="space-y-0.5">
                  <Label className="text-base">Block International Transactions</Label>
                  <p className="text-sm text-gray-500">
                    Prevent transactions from outside your operating country
                  </p>
                </div>
                <Switch
                  checked={settings.blockInternational}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, blockInternational: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between border p-4 rounded-lg">
                <div className="space-y-0.5">
                  <Label className="text-base">Require CVV</Label>
                  <p className="text-sm text-gray-500">
                    Always require CVV for card transactions
                  </p>
                </div>
                <Switch
                  checked={settings.requireCVV}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, requireCVV: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between border p-4 rounded-lg">
                <div className="space-y-0.5">
                  <Label className="text-base">IP Tracking</Label>
                  <p className="text-sm text-gray-500">
                    Track and analyze IP addresses for suspicious activity
                  </p>
                </div>
                <Switch
                  checked={settings.enableIPTracking}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, enableIPTracking: checked })
                  }
                />
              </div>
            </div>

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

export default FraudProtection;