import React from "react";
import { Link } from "react-router-dom";
import {
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
    <div className="w-64 h-screen bg-gradient-to-b from-[#0e2356] to-[#1a3a7e] text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white tracking-tight">method</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-4">
          <div className="text-xs uppercase text-white/50 font-semibold tracking-wider px-2 mb-2">
            Transactions
          </div>
          <ul className="space-y-1">
            {[
              {
                name: "Invoices",
                icon: <FileText className="h-4 w-4" />,
                path: "/",
              },
              {
                name: "Payments",
                icon: <CreditCard className="h-4 w-4" />,
                path: "/payments",
              },
              {
                name: "Sales Receipts",
                icon: <Receipt className="h-4 w-4" />,
                path: "/sales-receipts",
              },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <div className="bg-white/10 p-1.5 rounded-md">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 mb-4">
          <div className="text-xs uppercase text-white/50 font-semibold tracking-wider px-2 mb-2">
            Business
          </div>
          <ul className="space-y-1">
            {[
              {
                name: "Contacts",
                icon: <Users className="h-4 w-4" />,
                path: "/contacts",
              },
              {
                name: "Activities",
                icon: <Calendar className="h-4 w-4" />,
                path: "/activities",
              },
              {
                name: "Estimates",
                icon: <FileSpreadsheet className="h-4 w-4" />,
                path: "/estimates",
              },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <div className="bg-white/10 p-1.5 rounded-md">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4">
          <div className="text-xs uppercase text-white/50 font-semibold tracking-wider px-2 mb-2">
            Other
          </div>
          <ul className="space-y-1">
            {[
              {
                name: "Accounts",
                icon: <Landmark className="h-4 w-4" />,
                path: "/accounts",
              },
              {
                name: "Send Email",
                icon: <Mail className="h-4 w-4" />,
                path: "/send-email",
              },
              {
                name: "Sales Orders",
                icon: <ClipboardList className="h-4 w-4" />,
                path: "/sales-orders",
              },
              {
                name: "Field Crew",
                icon: <Truck className="h-4 w-4" />,
                path: "/field-crew",
              },
              {
                name: "Proposals",
                icon: <FileCheck className="h-4 w-4" />,
                path: "/proposals",
              },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <div className="bg-white/10 p-1.5 rounded-md">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="p-4 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
            MP
          </div>
          <div>
            <div className="text-sm font-medium">Method Pay</div>
            <div className="text-xs text-white/60">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
