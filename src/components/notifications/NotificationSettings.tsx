import React from "react";
import Layout from "../layout/Layout";
import AlertTypes from "./AlertTypes";
import ChannelPreferences from "./ChannelPreferences";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

const NotificationSettings = () => {
  return (
    <Layout title="Notification Settings">
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Configure how and when you receive notifications about payment
              activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="types" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="types">Alert Types</TabsTrigger>
                <TabsTrigger value="channels">
                  Communication Channels
                </TabsTrigger>
              </TabsList>
              <TabsContent value="types" className="mt-0">
                <AlertTypes />
              </TabsContent>
              <TabsContent value="channels" className="mt-0">
                <ChannelPreferences />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotificationSettings;
