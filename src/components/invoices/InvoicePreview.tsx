import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Download, Send, Eye, CreditCard } from "lucide-react";

interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

interface InvoicePreviewProps {
  invoiceNumber?: string;
  date?: string;
  dueDate?: string;
  clientName?: string;
  clientEmail?: string;
  clientAddress?: string;
  companyName?: string;
  companyAddress?: string;
  companyEmail?: string;
  lineItems?: LineItem[];
  subtotal?: number;
  tax?: number;
  total?: number;
  notes?: string;
  status?: "draft" | "sent" | "paid" | "overdue";
}

const InvoicePreview = ({
  invoiceNumber = "INV-2023-001",
  date = "2023-06-15",
  dueDate = "2023-07-15",
  clientName = "Acme Corporation",
  clientEmail = "billing@acmecorp.com",
  clientAddress = "123 Business Ave, Suite 100, San Francisco, CA 94107",
  companyName = "Your Business Name",
  companyAddress = "456 Commerce St, New York, NY 10001",
  companyEmail = "accounts@yourbusiness.com",
  lineItems = [
    {
      description: "Website Development",
      quantity: 1,
      unitPrice: 2500,
      amount: 2500,
    },
    {
      description: "Hosting (Annual)",
      quantity: 1,
      unitPrice: 300,
      amount: 300,
    },
    {
      description: "Maintenance",
      quantity: 5,
      unitPrice: 100,
      amount: 500,
    },
  ],
  subtotal = 3300,
  tax = 297,
  total = 3597,
  notes = "Payment due within 30 days. Please make payment to the bank account specified in the email.",
  status = "draft",
}: InvoicePreviewProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "draft":
        return "bg-gray-200 text-gray-800";
      case "sent":
        return "bg-blue-100 text-blue-800";
      case "paid":
        return "bg-green-100 text-green-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md overflow-auto">
      <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold">Invoice Preview</h3>
        <div className="flex space-x-2">
          <Badge className={getStatusColor()}>{status.toUpperCase()}</Badge>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button size="sm">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>

      <div className="p-6">
        <Card className="border-0 shadow-none">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {companyName}
                </h2>
                <p className="text-gray-600 mt-1">{companyAddress}</p>
                <p className="text-gray-600">{companyEmail}</p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
                <p className="text-gray-600 mt-1">#{invoiceNumber}</p>
              </div>
            </div>

            {/* Client and Invoice Details */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Bill To:
                </h3>
                <p className="font-semibold text-gray-800">{clientName}</p>
                <p className="text-gray-600">{clientAddress}</p>
                <p className="text-gray-600">{clientEmail}</p>
              </div>
              <div className="text-right">
                <div className="mb-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    Issue Date:
                  </h3>
                  <p className="text-gray-800">{date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    Due Date:
                  </h3>
                  <p className="text-gray-800">{dueDate}</p>
                </div>
              </div>
            </div>

            {/* Line Items */}
            <div className="mb-8">
              <div className="bg-gray-100 rounded-t-lg p-3 grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600">
                <div className="col-span-6">Description</div>
                <div className="col-span-2 text-right">Quantity</div>
                <div className="col-span-2 text-right">Unit Price</div>
                <div className="col-span-2 text-right">Amount</div>
              </div>
              <div className="border-x border-b rounded-b-lg overflow-hidden">
                {lineItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-3 text-sm border-b last:border-b-0"
                  >
                    <div className="col-span-6">{item.description}</div>
                    <div className="col-span-2 text-right">{item.quantity}</div>
                    <div className="col-span-2 text-right">
                      ${item.unitPrice.toFixed(2)}
                    </div>
                    <div className="col-span-2 text-right">
                      ${item.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-64">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax (9%):</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between py-2 font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <div className="flex justify-center mb-8">
              <Button className="w-full max-w-xs" size="lg">
                <CreditCard className="h-5 w-5 mr-2" />
                Pay Now
              </Button>
            </div>

            {/* Notes */}
            {notes && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Notes:
                </h3>
                <p className="text-gray-600 text-sm">{notes}</p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Thank you for your business!</p>
              <p className="mt-1">
                Payment processed securely through Method Pay
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvoicePreview;
