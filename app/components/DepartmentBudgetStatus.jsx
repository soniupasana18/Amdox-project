// "use client";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// interface BudgetData {
//   department: string;
//   allocated: number;
//   spent: number;
//   remaining: number;
// }

// interface Props {
//   data: BudgetData[];
// }

// export default function DepartmentBudgetStatus({ data }: Props) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6">
//       <h2 className="text-xl font-semibold mb-5">
//         Department Budget Status
//       </h2>

//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart
//           data={data}
//           margin={{
//             top: 20,
//             right: 20,
//             left: 10,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="department" />
//           <YAxis />
//           <Tooltip />
//           <Legend />

//           <Bar dataKey="allocated" fill="#3B82F6" radius={[4, 4, 0, 0]} />
//           <Bar dataKey="spent" fill="#EF4444" radius={[4, 4, 0, 0]} />
//           <Bar dataKey="remaining" fill="#22C55E" radius={[4, 4, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {motion} from"framer-motion";

const data = [
  { department: "HR", budget: 120000 },
  { department: "Finance", budget: 180000 },
  { department: "Sales", budget: 250000 },
  { department: "IT", budget: 300000 },
  { department: "Marketing", budget: 200000 },
];

export default function DepartmentBudgetStatus() {
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
      <h2 className="text-lg font-bold mb-4">Department Budget Status</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="budget" fill="#3B82F6" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}