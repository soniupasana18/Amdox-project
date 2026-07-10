"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Package,
  Users,
  DollarSign,
  ShoppingCart,
  Settings,
  Mail,
  Bell,
  CircleHelp,
  Menu,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Inventory", icon: Package, href: "/inventory" },
  { name: "HR", icon: Users, href: "/hr" },
  { name: "Finance", icon: DollarSign, href: "/finance" },
  { name: "Supply-Chain", icon: ShoppingCart, href: "/supply-chain" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Messages", icon: Mail, href: "/messages" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Help", icon: CircleHelp, href: "/help" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-[#111827] text-white p-4 border-r border-gray-800 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="flex justify-between items-center mb-8">
        {isOpen && (
          <h1 className="text-xl font-bold">
            Amdox-ERP
          </h1>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    index === 0
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  <Icon size={20} />

                  {isOpen && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}