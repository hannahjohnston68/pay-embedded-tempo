import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Switch } from "../ui/switch";
import { ArrowLeft, FileText, Plus, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";

interface InvoiceDetailProps {
  id?: string;
}

const InvoiceDetail = ({ id }: InvoiceDetailProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const invoiceId = id || params.id;
  
  // State for form fields
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [customer, setCustomer] = useState("United Distributors");
  const [assignedTo, setAssignedTo] = useState("");
  const [date, setDate] = useState("Apr 12, 2023");
  const [dueDate, setDueDate] = useState("Apr 15, 2023");
  const [terms, setTerms] = useState("");
  const [opportunity, setOpportunity] = useState("");
  const [billingAddress, setBillingAddress] = useState("123 Main Street\nSuite 101\nNew York, NY 10001\nUSA");
  const [shippingAddress, setShippingAddress] = useState("123 Main Street\nSuite 101\nNew York, NY 10001\nUSA");
  const [duration, setDuration] = useState("");
  const [proposal, setProposal] = useState("");
  const [sendInvoiceReminder, setSendInvoiceReminder] = useState(true);
  const [customerMessage, setCustomerMessage] = useState("");
  const [memo, setMemo] = useState("");
  
  // Line items
  const [lineItems, setLineItems] = useState([
    { id: 1, desc: "", rate: "", qty: 1, amount: 0, tax: false }
  ]);
  
  // Totals
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  
  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: lineItems.length + 1, desc: "", rate: "", qty: 1, amount: 0, tax: false }
    ]);
  };
  
  const handleRemoveLineItem = (id: number) => {
    setLineItems(lineItems.filter(item => item.id !== id));
  };
  
  return (
    <Layout title="Invoice">
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-500 hover:text-gray-700 p-0"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <div className="flex items-center">
              <FileText className="h-6 w-6 mr-2 text-gray-700" />
              <h1 className="text-xl font-semibold">Invoice</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Preview
            </Button>
            <Button variant="outline" size="sm">
              Send to Customer
            </Button>
          </div>
        </div>
        
        {/* Status tag */}
        <div className="flex items-center">
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-600"></span>
            Overdue
          </Badge>
        </div>
        
        {/* Invoice form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
              <Select value={customer} onChange={(e) => setCustomer(e.target.value)}>
                <option value="United Distributors">United Distributors</option>
                <option value="Acme Corp">Acme Corp</option>
                <option value="Globex Inc">Globex Inc</option>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Invoice #</label>
              <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
              <Textarea 
                value={billingAddress} 
                onChange={(e) => setBillingAddress(e.target.value)}
                rows={4}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
              <Textarea 
                value={shippingAddress} 
                onChange={(e) => setShippingAddress(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assigned to</label>
              <Select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
                <option value="">Select a team member</option>
                <option value="john.doe">John Doe</option>
                <option value="jane.smith">Jane Smith</option>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <Select>
                <option value="">Select or create a tag</option>
                <option value="high-priority">High Priority</option>
                <option value="follow-up">Follow Up</option>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Terms</label>
              <Select value={terms} onChange={(e) => setTerms(e.target.value)}>
                <option value="">Select terms</option>
                <option value="net-15">Net 15</option>
                <option value="net-30">Net 30</option>
                <option value="net-60">Net 60</option>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Opportunity</label>
              <Select value={opportunity} onChange={(e) => setOpportunity(e.target.value)}>
                <option value="">Select an opportunity</option>
                <option value="new-client">New Client</option>
                <option value="expansion">Expansion</option>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <Select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="">Select duration</option>
                <option value="one-time">One-time</option>
                <option value="recurring">Recurring</option>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Proposal</label>
              <Select value={proposal} onChange={(e) => setProposal(e.target.value)}>
                <option value="">Select a proposal</option>
                <option value="proposal-1">Proposal #1</option>
                <option value="proposal-2">Proposal #2</option>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Send invoice reminder toggle */}
        <div className="flex items-center justify-between border-t border-b py-3">
          <span className="text-sm font-medium">Send invoice reminder</span>
          <Switch 
            checked={sendInvoiceReminder} 
            onCheckedChange={setSendInvoiceReminder} 
          />
        </div>
        
        {/* Line items */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Amount (in):</h2>
          <div className="border rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desc</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {lineItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Input 
                        value={item.desc} 
                        onChange={(e) => {
                          const newItems = [...lineItems];
                          const index = newItems.findIndex(i => i.id === item.id);
                          newItems[index].desc = e.target.value;
                          setLineItems(newItems);
                        }}
                        className="border-0 focus:ring-0"
                        placeholder="Description"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Input 
                        value={item.rate} 
                        onChange={(e) => {
                          const newItems = [...lineItems];
                          const index = newItems.findIndex(i => i.id === item.id);
                          newItems[index].rate = e.target.value;
                          setLineItems(newItems);
                        }}
                        className="border-0 focus:ring-0"
                        placeholder="0.00"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Input 
                        type="number" 
                        value={item.qty} 
                        onChange={(e) => {
                          const newItems = [...lineItems];
                          const index = newItems.findIndex(i => i.id === item.id);
                          newItems[index].qty = parseInt(e.target.value);
                          setLineItems(newItems);
                        }}
                        className="border-0 focus:ring-0"
                        min="1"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Input 
                        value={item.amount.toString()} 
                        readOnly
                        className="border-0 focus:ring-0 bg-gray-50"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input 
                        type="checkbox" 
                        checked={item.tax} 
                        onChange={(e) => {
                          const newItems = [...lineItems];
                          const index = newItems.findIndex(i => i.id === item.id);
                          newItems[index].tax = e.target.checked;
                          setLineItems(newItems);
                        }}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemoveLineItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleAddLineItem}
            className="flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Item
          </Button>
          
          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Subtotal:</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Discount (%):</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-sm font-medium">Total:</span>
                <span className="text-sm font-bold">$0.00</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customer message */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Customer Message</label>
          <Textarea 
            value={customerMessage} 
            onChange={(e) => setCustomerMessage(e.target.value)}
            rows={3}
            placeholder="Add a message that will be displayed on the invoice"
          />
        </div>
        
        {/* Memo */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Memo (Internal)</label>
          <Textarea 
            value={memo} 
            onChange={(e) => setMemo(e.target.value)}
            rows={3}
            placeholder="Add a memo for internal reference (not visible to customers)"
          />
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-end space-x-2 pt-4 border-t">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default InvoiceDetail;
