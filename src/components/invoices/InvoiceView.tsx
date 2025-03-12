import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import InvoicePreview from "./InvoicePreview";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const InvoiceView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app this would come from an API call
  const invoice = useMemo(() => {
    // This simulates finding the invoice from the OutstandingInvoices data
    const mockInvoices = [
      {
        id: "1",
        invoiceNumber: "INV-001",
        date: "2023-06-15",
        dueDate: "2023-07-15",
        clientName: "Acme Corp",
        clientEmail: "billing@acmecorp.com",
        clientAddress: "123 Business Ave, Suite 100, San Francisco, CA 94107",
        companyName: "Your Business Name",
        companyAddress: "456 Commerce St, New York, NY 10001",
        companyEmail: "accounts@yourbusiness.com",
        lineItems: [
          {
            description: "Website Development",
            quantity: 1,
            unitPrice: 1250.0,
            amount: 1250.0,
          }
        ],
        subtotal: 1250.0,
        tax: 112.5,
        total: 1362.5,
        status: "sent" as const, // Changed from "pending" to "sent"
      },
      {
        id: "2",
        invoiceNumber: "INV-002",
        date: "2023-06-10",
        dueDate: "2023-07-10",
        clientName: "Globex Inc",
        clientEmail: "accounts@globex.com",
        clientAddress: "456 Tech Park, Suite 200, Boston, MA 02110",
        companyName: "Your Business Name",
        companyAddress: "456 Commerce St, New York, NY 10001",
        companyEmail: "accounts@yourbusiness.com",
        lineItems: [
          {
            description: "Consulting Services",
            quantity: 1,
            unitPrice: 3450.75,
            amount: 3450.75,
          }
        ],
        subtotal: 3450.75,
        tax: 310.57,
        total: 3761.32,
        status: "overdue" as const,
      }
    ];

    return mockInvoices.find(inv => inv.id === id);
  }, [id]);

  if (!invoice) {
    return (
      <Layout title="Invoice Not Found">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Invoices
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Invoice not found</h2>
            <p className="mt-2 text-gray-600">The requested invoice could not be found.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Invoice Details">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Invoices
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <InvoicePreview {...invoice} />
        </div>
      </div>
    </Layout>
  );
};

export default InvoiceView;