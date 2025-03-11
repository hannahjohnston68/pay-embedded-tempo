import React from "react";
import { Plus, Search, HelpCircle } from "lucide-react";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Dashboard" }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Plus className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Search className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <HelpCircle className="h-5 w-5 text-gray-600" />
        </button>
        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
          HJ
        </div>
      </div>
    </header>
  );
};

export default Header;
