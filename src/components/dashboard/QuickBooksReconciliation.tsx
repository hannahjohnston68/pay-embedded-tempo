import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  ArrowRightCircle,
  XCircle,
} from "lucide-react";

interface QuickBooksReconciliationProps {
  syncStatus?: "synced" | "syncing" | "error" | "partial";
  lastSyncTime?: string;
  syncPercentage?: number;
  discrepancies?: {
    id: string;
    type: string;
    description: string;
    amount: number;
    status: "resolved" | "pending" | "failed";
  }[];
  onRefresh?: () => void;
  onViewAll?: () => void;
  onResolve?: (id: string) => void;
}

const QuickBooksReconciliation = ({
  syncStatus = "synced",
  lastSyncTime = "2 hours ago",
  syncPercentage = 100,
  discrepancies = [
    {
      id: "disc-001",
      type: "Invoice",
      description: "Amount mismatch on invoice #1234",
      amount: 125.5,
      status: "pending",
    },
    {
      id: "disc-002",
      type: "Payment",
      description: "Payment recorded in Method but missing in QuickBooks",
      amount: 350.0,
      status: "resolved",
    },
    {
      id: "disc-003",
      type: "Customer",
      description: "Customer details out of sync",
      amount: 0,
      status: "failed",
    },
  ],
  onRefresh = () => {},
  onViewAll = () => {},
  onResolve = () => {},
}: QuickBooksReconciliationProps) => {
  const getStatusIcon = () => {
    switch (syncStatus) {
      case "synced":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "syncing":
        return <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "partial":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusText = () => {
    switch (syncStatus) {
      case "synced":
        return "Fully Synced";
      case "syncing":
        return "Syncing...";
      case "error":
        return "Sync Failed";
      case "partial":
        return "Partially Synced";
      default:
        return "Fully Synced";
    }
  };

  const getStatusColor = () => {
    switch (syncStatus) {
      case "synced":
        return "text-green-500";
      case "syncing":
        return "text-blue-500";
      case "error":
        return "text-red-500";
      case "partial":
        return "text-amber-500";
      default:
        return "text-green-500";
    }
  };

  const getStatusBadge = (status: "resolved" | "pending" | "failed") => {
    switch (status) {
      case "resolved":
        return (
          <Badge variant="default" className="bg-green-500">
            Resolved
          </Badge>
        );
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">
            QuickBooks Reconciliation
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onRefresh}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh sync status</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>Last synced {lastSyncTime}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className={`font-medium ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>
          {syncStatus === "syncing" && (
            <div className="flex-1 ml-2">
              <Progress value={syncPercentage} className="h-2" />
            </div>
          )}
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">
            Discrepancies (
            {discrepancies.filter((d) => d.status !== "resolved").length})
          </h4>
          {discrepancies.length > 0 ? (
            <div className="space-y-3 max-h-[150px] overflow-y-auto pr-1">
              {discrepancies.map((discrepancy) => (
                <div
                  key={discrepancy.id}
                  className="p-2 bg-gray-50 rounded-md border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">{discrepancy.type}</p>
                      <p className="text-xs text-gray-500">
                        {discrepancy.description}
                      </p>
                      {discrepancy.amount > 0 && (
                        <p className="text-xs font-medium mt-1">
                          ${discrepancy.amount.toFixed(2)}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(discrepancy.status)}
                      {discrepancy.status === "pending" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2"
                          onClick={() => onResolve(discrepancy.id)}
                        >
                          Resolve
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-gray-50 rounded-md text-center">
              <p className="text-sm text-gray-500">No discrepancies found</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={onViewAll}
        >
          <span>View All</span>
          <ArrowRightCircle className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuickBooksReconciliation;
