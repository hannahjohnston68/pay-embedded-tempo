import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Calendar,
  FileText,
  FileSpreadsheet,
  Receipt,
  CreditCard,
  Landmark,
  Mail,
  ClipboardList,
  Truck,
  FileCheck,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#0e2356] text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">method</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {[
            {
              name: "Dashboard",
              icon: <LayoutGrid className="h-5 w-5" />,
              path: "/",
            },
            {
              name: "Contacts",
              icon: <Users className="h-5 w-5" />,
              path: "/contacts",
            },
            {
              name: "Activities",
              icon: <Calendar className="h-5 w-5" />,
              path: "/activities",
            },
            {
              name: "Invoices",
              icon: <FileText className="h-5 w-5" />,
              path: "/invoices",
            },
            {
              name: "Estimates",
              icon: <FileSpreadsheet className="h-5 w-5" />,
              path: "/estimates",
            },
            {
              name: "Sales Receipts",
              icon: <Receipt className="h-5 w-5" />,
              path: "/sales-receipts",
            },
            {
              name: "Payments",
              icon: <CreditCard className="h-5 w-5" />,
              path: "/payments",
            },
            {
              name: "Accounts",
              icon: <Landmark className="h-5 w-5" />,
              path: "/accounts",
            },
            {
              name: "Send Email",
              icon: <Mail className="h-5 w-5" />,
              path: "/send-email",
            },
            {
              name: "Sales Orders",
              icon: <ClipboardList className="h-5 w-5" />,
              path: "/sales-orders",
            },
            {
              name: "Field Crew",
              icon: <Truck className="h-5 w-5" />,
              path: "/field-crew",
            },
            {
              name: "Proposals",
              icon: <FileCheck className="h-5 w-5" />,
              path: "/proposals",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
