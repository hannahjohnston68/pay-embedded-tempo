import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  Bell,
  Clock,
  AlertCircle,
  CreditCard,
  FileText,
  RefreshCw,
} from "lucide-react";

interface AlertTypeProps {
  alertTypes?: AlertType[];
  frequencies?: FrequencyOption[];
}

interface AlertType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
  frequency: string;
}

interface FrequencyOption {
  value: string;
  label: string;
}

const defaultFrequencies: FrequencyOption[] = [
  { value: "immediate", label: "Immediate" },
  { value: "daily", label: "Daily Summary" },
  { value: "weekly", label: "Weekly Summary" },
  { value: "custom", label: "Custom" },
];

const defaultAlertTypes: AlertType[] = [
  {
    id: "payment-received",
    name: "Payment Received",
    description: "Get notified when a customer makes a payment",
    icon: <CreditCard className="h-5 w-5 text-blue-500" />,
    enabled: true,
    frequency: "immediate",
  },
  {
    id: "payment-due",
    name: "Payment Due Soon",
    description: "Get reminded when invoices are approaching due date",
    icon: <Clock className="h-5 w-5 text-amber-500" />,
    enabled: true,
    frequency: "daily",
  },
  {
    id: "payment-overdue",
    name: "Payment Overdue",
    description: "Get alerted when payments are past their due date",
    icon: <AlertCircle className="h-5 w-5 text-red-500" />,
    enabled: true,
    frequency: "immediate",
  },
  {
    id: "invoice-viewed",
    name: "Invoice Viewed",
    description: "Know when a customer views an invoice you sent",
    icon: <FileText className="h-5 w-5 text-green-500" />,
    enabled: false,
    frequency: "daily",
  },
  {
    id: "reconciliation-issue",
    name: "Reconciliation Issue",
    description: "Be notified of any QuickBooks reconciliation problems",
    icon: <RefreshCw className="h-5 w-5 text-purple-500" />,
    enabled: true,
    frequency: "immediate",
  },
];

const AlertTypes = ({
  alertTypes = defaultAlertTypes,
  frequencies = defaultFrequencies,
}: AlertTypeProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Alert Types
        </CardTitle>
        <CardDescription>
          Configure which notifications you receive and how often
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {alertTypes.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{alert.icon}</div>
              <div>
                <h4 className="text-sm font-medium">{alert.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {alert.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue={alert.frequency}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  {frequencies.map((frequency) => (
                    <SelectItem key={frequency.value} value={frequency.value}>
                      {frequency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Switch
                id={`${alert.id}-switch`}
                defaultChecked={alert.enabled}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AlertTypes;
