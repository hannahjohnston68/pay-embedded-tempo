import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import {
  Search,
  Filter,
  MoreVertical,
  ArrowUpDown,
  Calendar,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  quickbooksStatus: "synced" | "pending" | "error";
}

interface OutstandingInvoicesProps {
  invoices?: Invoice[];
  onViewInvoice?: (id: string) => void;
  onSendReminder?: (id: string) => void;
  onMarkAsPaid?: (id: string) => void;
}

const OutstandingInvoices = ({
  invoices = [
    {
      id: "1",
      invoiceNumber: "INV-001",
      client: "Acme Corp",
      amount: 1250.0,
      dueDate: "2023-06-15",
      status: "pending",
      quickbooksStatus: "synced",
    },
    {
      id: "2",
      invoiceNumber: "INV-002",
      client: "Globex Inc",
      amount: 3450.75,
      dueDate: "2023-06-10",
      status: "overdue",
      quickbooksStatus: "synced",
    },
    {
      id: "3",
      invoiceNumber: "INV-003",
      client: "Stark Industries",
      amount: 7800.5,
      dueDate: "2023-06-25",
      status: "pending",
      quickbooksStatus: "pending",
    },
    {
      id: "4",
      invoiceNumber: "INV-004",
      client: "Wayne Enterprises",
      amount: 5200.25,
      dueDate: "2023-06-05",
      status: "overdue",
      quickbooksStatus: "error",
    },
    {
      id: "5",
      invoiceNumber: "INV-005",
      client: "Oscorp",
      amount: 1800.0,
      dueDate: "2023-06-30",
      status: "pending",
      quickbooksStatus: "synced",
    },
  ],
  onViewInvoice = (id) => console.log(`View invoice ${id}`),
  onSendReminder = (id) => console.log(`Send reminder for invoice ${id}`),
  onMarkAsPaid = (id) => console.log(`Mark invoice ${id} as paid`),
}: OutstandingInvoicesProps) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [markAsPaidDialog, setMarkAsPaidDialog] = useState<{ open: boolean; invoiceId: string | null }>({
    open: false,
    invoiceId: null,
  });

  const handleViewInvoice = (id: string) => {
    navigate(`/invoices/${id}`);
  };

  const handleSendReminder = async (id: string) => {
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Reminder Sent",
        description: `Payment reminder sent for invoice ${id}`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send payment reminder. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleMarkAsPaid = async (id: string) => {
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Invoice Updated",
        description: `Invoice ${id} has been marked as paid`,
        duration: 3000,
      });
      
      setMarkAsPaidDialog({ open: false, invoiceId: null });
      
      // In a real app, you would update the invoice list or trigger a refresh
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update invoice status. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || invoice.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: "paid" | "pending" | "overdue") => {
    switch (status) {
      case "paid":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Paid
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Pending
          </Badge>
        );
      case "overdue":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Overdue
          </Badge>
        );
      default:
        return null;
    }
  };

  const getQuickbooksStatusIcon = (status: "synced" | "pending" | "error") => {
    switch (status) {
      case "synced":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Outstanding Invoices
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search invoices..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">
                <div className="flex items-center">
                  Invoice #
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Client
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-4 w-4" />
                  Amount
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  Due Date
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>QuickBooks</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">
                    {invoice.invoiceNumber}
                  </TableCell>
                  <TableCell>{invoice.client}</TableCell>
                  <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                  <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {getQuickbooksStatusIcon(invoice.quickbooksStatus)}
                      <span className="text-xs text-gray-500">
                        {invoice.quickbooksStatus === "synced"
                          ? "Synced"
                          : invoice.quickbooksStatus === "pending"
                            ? "Pending"
                            : "Error"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleViewInvoice(invoice.id)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleSendReminder(invoice.id)}
                          disabled={invoice.status === "paid"}
                        >
                          Send Reminder
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setMarkAsPaidDialog({ open: true, invoiceId: invoice.id })}
                          disabled={invoice.status === "paid"}
                        >
                          Mark as Paid
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No outstanding invoices found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {filteredInvoices.length} of {invoices.length} invoices
        </div>
        <Button variant="outline" size="sm">
          View All Invoices
        </Button>
      </div>

      <AlertDialog 
        open={markAsPaidDialog.open} 
        onOpenChange={(open) => setMarkAsPaidDialog({ open, invoiceId: null })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Mark Invoice as Paid</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to mark this invoice as paid? This action will update the invoice status and sync with QuickBooks.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => markAsPaidDialog.invoiceId && handleMarkAsPaid(markAsPaidDialog.invoiceId)}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OutstandingInvoices;
