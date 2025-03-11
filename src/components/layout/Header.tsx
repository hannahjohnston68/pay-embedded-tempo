import React from "react";
import { Plus, Search, HelpCircle, Bell } from "lucide-react";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Dashboard" }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0e2356]/20 focus:border-[#0e2356] outline-none"
            placeholder="Search..."
          />
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
          <Bell className="h-4 w-4 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <HelpCircle className="h-4 w-4 text-gray-600" />
        </button>
        <button className="bg-[#0e2356] hover:bg-[#0e2356]/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors">
          <Plus className="h-4 w-4" />
          <span>New</span>
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-medium shadow-sm">
          MP
        </div>
      </div>
    </header>
  );
};

export default Header;
