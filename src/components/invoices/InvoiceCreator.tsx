import React, { useState } from "react";
import Layout from "../layout/Layout";
import InvoiceForm from "./InvoiceForm";
import InvoicePreview from "./InvoicePreview";
import PaymentOptions from "./PaymentOptions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";

const InvoiceCreator = () => {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <Layout title="Create Invoice">
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <Tabs
              defaultValue="form"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="form">Invoice Details</TabsTrigger>
                <TabsTrigger value="payment">Payment Options</TabsTrigger>
                <TabsTrigger value="preview">Preview & Send</TabsTrigger>
              </TabsList>
              <TabsContent value="form" className="mt-0">
                <InvoiceForm />
              </TabsContent>
              <TabsContent value="payment" className="mt-0">
                <PaymentOptions />
              </TabsContent>
              <TabsContent value="preview" className="mt-0">
                <div className="flex justify-center">
                  <InvoicePreview />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default InvoiceCreator;
