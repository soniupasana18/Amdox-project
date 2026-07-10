"use client";

import React from "react";

const cards = [
  {
    title: "Total Revenue",
    value: "₹12,50,000",
    color: "text-green-400",
  },
  {
    title: "Total Expenses",
    value: "₹7,20,000",
    color: "text-red-400",
  },
  {
    title: "Net Profit",
    value: "₹5,30,000",
    color: "text-blue-400",
  },
  {
    title: "Pending Invoices",
    value: "148",
    color: "text-yellow-400",
  },
];

const FinanceDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Finance Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-gray-400 text-sm">
              {card.title}
            </h3>

            <p className={`text-3xl font-bold mt-3 ${card.color}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#1e1e1e] rounded-xl border border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Finance Summary
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700 text-gray-300">
              <th className="py-3">Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-3 text-gray-200">Sales Revenue</td>
              <td className="text-green-400">₹8,40,000</td>
              <td className="text-green-400">Received</td>
            </tr>

            <tr className="border-b border-gray-800">
              <td className="py-3 text-gray-200">Operational Cost</td>
              <td className="text-red-400">₹2,90,000</td>
              <td className="text-red-400">Paid</td>
            </tr>

            <tr className="border-b border-gray-800">
              <td className="py-3 text-gray-200">Pending Payments</td>
              <td className="text-yellow-400">₹1,10,000</td>
              <td className="text-yellow-400">Pending</td>
            </tr>

            <tr>
              <td className="py-3 text-gray-200">Tax Amount</td>
              <td className="text-blue-400">₹65,000</td>
              <td className="text-blue-400">Upcoming</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceDashboard;

