import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  BarChart4
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Invoice {
  id: string;
  status: "Overdue" | "Paid" | "Unpaid" | "Partial payment" | "Open";
  customer: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  balance: number | null;
  currency: string;
}

const Invoices = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Mock data for invoices
  const invoices: Invoice[] = [
    {
      id: "1",
      status: "Overdue",
      customer: "Christine powell",
      issueDate: "Apr 12 2023",
      dueDate: "Jun 4 2023",
      amount: 500.99,
      balance: null,
      currency: "CAD"
    },
    {
      id: "2",
      status: "Paid",
      customer: "Emily Pazz",
      issueDate: "Jun 4 2023",
      dueDate: "May 9 2024",
      amount: 421.466,
      balance: 0,
      currency: "CAD"
    },
    {
      id: "3",
      status: "Unpaid",
      customer: "Hannah Jon",
      issueDate: "May 9 2024",
      dueDate: "May 12 2024",
      amount: 31241.33,
      balance: 422.00,
      currency: "CAD"
    },
    {
      id: "4",
      status: "Partial payment",
      customer: "Daniel Rey",
      issueDate: "May 12 2024",
      dueDate: "Jun 16 2024",
      amount: 131.33,
      balance: 531.45,
      currency: "CAD"
    },
    {
      id: "5",
      status: "Open",
      customer: "Bland Ave",
      issueDate: "-",
      dueDate: "-",
      amount: 123.55,
      balance: null,
      currency: "CAD"
    },
    {
      id: "6",
      status: "Overdue",
      customer: "Niagra falls",
      issueDate: "Jun 16 2024",
      dueDate: "Jul 28 2024",
      amount: 125.88,
      balance: null,
      currency: "CAD"
    },
    {
      id: "7",
      status: "Overdue",
      customer: "April Summer",
      issueDate: "Jun 16 2024",
      dueDate: "Jul 28 2024",
      amount: 312.99,
      balance: 31.85,
      currency: "CAD"
    },
  ];

  // Calculate pagination
  const totalItems = invoices.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentInvoices = invoices.slice(0, itemsPerPage);

  // Status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Overdue":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-600"></span>
            {status}
          </Badge>
        );
      case "Paid":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-600"></span>
            {status}
          </Badge>
        );
      case "Unpaid":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-yellow-600"></span>
            {status}
          </Badge>
        );
      case "Partial payment":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            {status}
          </Badge>
        );
      case "Open":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-gray-600"></span>
            {status}
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            {status}
          </Badge>
        );
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <Layout title="Invoices">
      <div className="space-y-6">
        {/* Back button */}
        <div className="flex items-center">
          <Button variant="ghost" className="text-gray-500 hover:text-gray-700 p-0">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border rounded-md">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Overdue</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">5</span>
                </div>
                <span className="text-2xl font-bold text-red-600">$20,000.76</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border rounded-md">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Outstanding</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">5</span>
                </div>
                <span className="text-2xl font-bold">$325,465.12</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border rounded-md">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Upcoming</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">24</span>
                </div>
                <span className="text-2xl font-bold">$325,465.12</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border rounded-md">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-600">Average time to get paid</span>
                </div>
                <span className="text-2xl font-bold">3 <span className="text-lg">days</span></span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Invoices list header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">All Invoices</h2>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-8 h-9 w-[240px] rounded-md border border-gray-300"
                />
              </div>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                <BarChart4 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Invoices table */}
          <div className="border rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-10">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Issue date</TableHead>
                  <TableHead>Due date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Currency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentInvoices.map((invoice) => (
                  <TableRow
                    key={invoice.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/invoices/${invoice.id}`)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    </TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>{invoice.customer}</TableCell>
                    <TableCell>{invoice.issueDate}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>${formatCurrency(invoice.amount)}</TableCell>
                    <TableCell>{invoice.balance !== null ? `$${formatCurrency(invoice.balance)}` : '-'}</TableCell>
                    <TableCell>{invoice.currency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              1-{Math.min(itemsPerPage, totalItems)} of {totalItems}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-1">
                <span className="text-sm">Show</span>
                <select
                  className="h-8 rounded border border-gray-300 text-sm"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* New invoice button can be added to the header if needed */}
      </div>
    </Layout>
  );
};

export default Invoices;