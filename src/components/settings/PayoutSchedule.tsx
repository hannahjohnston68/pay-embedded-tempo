import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Calendar, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const PayoutSchedule = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = React.useState("weekly");

  return (
    <Layout title="Payout Schedule">
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
              <Calendar className="h-5 w-5" />
              Payout Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-700 text-sm">
                Current Schedule: Weekly payouts every Friday
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Select Payout Frequency</h3>
              <RadioGroup
                defaultValue={schedule}
                onValueChange={setSchedule}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4 border p-4 rounded-lg">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily" className="flex-1">
                    <div className="font-medium">Daily</div>
                    <div className="text-sm text-gray-500">
                      Receive payouts every business day
                    </div>
                  </Label>
                  {schedule === "daily" && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </div>

                <div className="flex items-center space-x-4 border p-4 rounded-lg">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly" className="flex-1">
                    <div className="font-medium">Weekly</div>
                    <div className="text-sm text-gray-500">
                      Receive payouts every Friday
                    </div>
                  </Label>
                  {schedule === "weekly" && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </div>

                <div className="flex items-center space-x-4 border p-4 rounded-lg">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly" className="flex-1">
                    <div className="font-medium">Monthly</div>
                    <div className="text-sm text-gray-500">
                      Receive payouts on the 1st of each month
                    </div>
                  </Label>
                  {schedule === "monthly" && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </div>
              </RadioGroup>
            </div>

            <div className="pt-6 border-t">
              <Button className="bg-[#0e2356] hover:bg-[#0e2356]/90">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PayoutSchedule;