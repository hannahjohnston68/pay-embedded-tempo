import React from "react";
import { Bell, Check, Clock, CreditCard, DollarSign, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NotificationProps {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "payment" | "reminder" | "system";
  read: boolean;
}

interface NotificationCenterProps {
  notifications?: NotificationProps[];
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  onClearAll?: () => void;
}

const NotificationCenter = ({
  notifications = [],
  onMarkAsRead = () => {},
  onMarkAllAsRead = () => {},
  onClearAll = () => {},
}: NotificationCenterProps) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "payment":
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case "reminder":
        return <Clock className="h-4 w-4 text-amber-500" />;
      case "system":
        return <CreditCard className="h-4 w-4 text-blue-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="w-full bg-white flex flex-col overflow-hidden max-h-[480px]">
      <div className="p-3 border-b flex items-center justify-between bg-gray-50">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm">Notifications</h3>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {unreadCount} new
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMarkAllAsRead}
            className="text-xs"
          >
            <Check className="h-3 w-3 mr-1" />
            Mark all read
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Clear all
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <NotificationList
          notifications={notifications}
          onMarkAsRead={onMarkAsRead}
          getNotificationIcon={getNotificationIcon}
        />
      </ScrollArea>
    </div>
  );
};

interface NotificationListProps {
  notifications: NotificationProps[];
  onMarkAsRead: (id: string) => void;
  getNotificationIcon: (type: string) => React.ReactNode;
}

const NotificationList = ({
  notifications,
  onMarkAsRead,
  getNotificationIcon,
}: NotificationListProps) => {
  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
        <Bell className="h-12 w-12 mb-4 text-gray-300" />
        <p className="text-sm">No notifications to display</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 mb-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer ${!notification.read ? "bg-blue-50" : "bg-white"}`}
            onClick={() => onMarkAsRead(notification.id)}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1.5 rounded-full bg-gray-100">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4
                    className={`text-sm font-medium truncate ${!notification.read ? "text-blue-800" : "text-gray-800"}`}
                  >
                    {notification.title}
                  </h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                    {notification.time}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default NotificationCenter;
