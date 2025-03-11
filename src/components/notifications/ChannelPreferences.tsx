import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Switch } from "../ui/switch";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";

interface ChannelOption {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
}

interface ChannelPreferencesProps {
  channels?: ChannelOption[];
  defaultChannel?: string;
  onChannelToggle?: (channelId: string, enabled: boolean) => void;
  onDefaultChannelChange?: (channelId: string) => void;
}

const ChannelPreferences = ({
  channels = [
    {
      id: "email",
      name: "Email",
      description: "Receive payment notifications via email",
      icon: <Mail className="h-5 w-5 text-muted-foreground" />,
      enabled: true,
    },
    {
      id: "sms",
      name: "SMS",
      description: "Receive payment notifications via text message",
      icon: <Smartphone className="h-5 w-5 text-muted-foreground" />,
      enabled: false,
    },
    {
      id: "in-app",
      name: "In-app",
      description: "Receive notifications within Method",
      icon: <Bell className="h-5 w-5 text-muted-foreground" />,
      enabled: true,
    },
    {
      id: "push",
      name: "Push",
      description: "Receive push notifications on your devices",
      icon: <MessageSquare className="h-5 w-5 text-muted-foreground" />,
      enabled: false,
    },
  ],
  defaultChannel = "email",
  onChannelToggle = () => {},
  onDefaultChannelChange = () => {},
}: ChannelPreferencesProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Communication Channels
        </CardTitle>
        <CardDescription>
          Choose how you want to receive payment notifications and alerts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex items-start justify-between p-3 rounded-lg border"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{channel.icon}</div>
                <div>
                  <h3 className="font-medium">{channel.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {channel.description}
                  </p>
                </div>
              </div>
              <Switch
                checked={channel.enabled}
                onCheckedChange={(checked) =>
                  onChannelToggle(channel.id, checked)
                }
                aria-label={`Enable ${channel.name} notifications`}
              />
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <h3 className="font-medium mb-3">Default Notification Channel</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select your preferred channel for receiving important notifications
          </p>
          <RadioGroup
            value={defaultChannel}
            onValueChange={onDefaultChannelChange}
            className="space-y-3"
          >
            {channels
              .filter((channel) => channel.enabled)
              .map((channel) => (
                <div key={channel.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={channel.id}
                    id={`default-${channel.id}`}
                  />
                  <Label
                    htmlFor={`default-${channel.id}`}
                    className="cursor-pointer"
                  >
                    {channel.name}
                  </Label>
                </div>
              ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelPreferences;
