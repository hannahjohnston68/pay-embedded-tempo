import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  ChevronDown,
  Download,
  Filter,
  Plus,
  Search,
  Settings,
} from "lucide-react";

interface DashboardHeaderProps {
  totalTransactions?: number;
  totalAmount?: string;
  dateRange?: string;
  onDateRangeChange?: (range: string) => void;
  onSearch?: (query: string) => void;
  onFilter?: () => void;
  onAddTransaction?: () => void;
  onExport?: () => void;
}

const DashboardHeader = ({
  totalTransactions = 156,
  totalAmount = "$12,450.80",
  dateRange = "Last 30 days",
  onDateRangeChange = () => {},
  onSearch = () => {},
  onFilter = () => {},
  onAddTransaction = () => {},
  onExport = () => {},
}: DashboardHeaderProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSettingsClick = () => {
    navigate('/notifications/settings');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Payment Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitor and manage your payment transactions
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSettingsClick}
            className="text-gray-600"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onExport}
            className="text-gray-600"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>

          <Button size="sm" onClick={onAddTransaction}>
            <Plus className="h-4 w-4 mr-2" />
            New Transaction
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-blue-600">
                Total Transactions
              </span>
              <span className="text-2xl font-bold mt-1">
                {totalTransactions}
              </span>
              <span className="text-xs text-gray-500 mt-1">{dateRange}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-100">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-green-600">
                Total Amount
              </span>
              <span className="text-2xl font-bold mt-1">{totalAmount}</span>
              <span className="text-xs text-gray-500 mt-1">{dateRange}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-100">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-purple-600">
                QuickBooks Sync
              </span>
              <span className="text-2xl font-bold mt-1">
                Last synced 2h ago
              </span>
              <span className="text-xs text-green-500 mt-1">
                All transactions reconciled
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-9"
          />
        </form>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {dateRange}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onDateRangeChange("Today")}>
                Today
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDateRangeChange("Last 7 days")}
              >
                Last 7 days
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDateRangeChange("Last 30 days")}
              >
                Last 30 days
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDateRangeChange("This month")}>
                This month
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDateRangeChange("Last month")}>
                Last month
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDateRangeChange("Custom range")}
              >
                Custom range...
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            size="sm"
            onClick={onFilter}
            className="text-gray-600"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
