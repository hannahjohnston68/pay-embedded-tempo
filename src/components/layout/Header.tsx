import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  HelpCircle,
  LogOut,
  User,
  DollarSign,
  Clock,
  AlertCircle,
  Settings,
  Sparkles // Add Sparkles icon for the toast
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"; // Add this import
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "payment" | "reminder" | "system";
  read: boolean;
}

const sampleNotifications: Notification[] = [
  {
    id: "1",
    title: "Payment Received",
    message: "Acme Corp paid invoice #INV-2023-001 for $3,500.00",
    time: "Just now",
    type: "payment",
    read: false
  },
  {
    id: "2",
    title: "Payment Due Soon",
    message: "Invoice #INV-2023-008 for Stark Industries is due in 2 days",
    time: "10 minutes ago",
    type: "reminder",
    read: false
  },
  {
    id: "3",
    title: "Payment Overdue",
    message: "Wayne Enterprises invoice #INV-2023-005 is 3 days overdue",
    time: "1 hour ago",
    type: "reminder",
    read: false
  }
];

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const unreadCount = sampleNotifications.filter(n => !n.read).length;

  useEffect(() => {
    // Show the toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "✨ Try Method Pay",
        description: "Experience faster payments and seamless integration",
        action: (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('https://www.furever.dev', '_blank')}
            className="border-blue-200 hover:border-blue-300 hover:bg-blue-50"
          >
            <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
            Get Started
          </Button>
        ),
        className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100",
        duration: 5000, // Show for 5 seconds
      });
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "payment":
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case "reminder":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">
          {title || "Company Name"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://www.furever.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </a>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
            >
              <Bell className="h-4 w-4 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[380px] p-0" align="end">
            <div className="p-3 border-b flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">Notifications</h3>
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {unreadCount} new
                  </Badge>
                )}
              </div>
              <Button variant="ghost" size="sm">
                Mark all read
              </Button>
            </div>
            <ScrollArea className="h-[300px]">
              {sampleNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border-b last:border-0 hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="p-2 border-t bg-gray-50">
              <Button variant="ghost" size="sm" className="w-full text-blue-600">
                View all notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white p-0"
            >
              MP
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/profile')}>
                <User className="h-4 w-4 mr-2" />
                <span>Profile</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/settings')}>
                <Settings className="h-4 w-4 mr-2" />
                <span>Settings</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="h-4 w-4 mr-2" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
