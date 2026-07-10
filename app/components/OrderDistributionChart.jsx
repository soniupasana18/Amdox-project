

"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {motion} from"framer-motion";

const data = [
  { name: "Pending", value: 35, color: "#f59e0b" },
  { name: "Processing", value: 25, color: "#3b82f6" },
  { name: "Shipped", value: 20, color: "#10b981" },
  { name: "Delivered", value: 15, color: "#8b5cf6" },
  { name: "Cancelled", value: 5, color: "#ef4444" },
];

export default function OrderChartStatus() {
  return (
    <motion.div
          className="
            bg-[#1e1e1e]
            backdrop-blur-md
            shadow-lg
            rounded-xl
            p-4
            md:p-6
            border
            border-[#1f1f1f]
            mx-2
            md:mx-0
          "
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition ={{delay:0.2,duration:0.5}}
        >
      <h2 className="text-lg font-semibold mb-5 text-gray-800 dark:text-white">
        Order Status
      </h2>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              outerRadius={90}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                border: "1px solid #4b5563",
                borderRadius: "8px",
                padding: "8px",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />

            <Legend
              iconType="circle"
              layout="horizontal"
              align="center"
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {data.map((item) => (
          <div
            key={item.name}
            className="border rounded-lg p-3 text-center dark:border-gray-700"
          >
            <div className="flex items-center justify-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>

            <p className="mt-2 text-lg font-bold">{item.value}</p>
            <p className="text-xs text-gray-500">{item.value}%</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}