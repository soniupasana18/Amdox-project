"use client";

import StatCard from "../components/StatCard";
import { DollarSign, ShoppingBag, SquareActivity, Users } from "lucide-react";
import React from "react";
import {motion} from"framer-motion";
import  MonthlyRevenueChart from "../components/MonthlyRevenueChart";
import SalesDistributionCharts from "../components/SalesDistributionCharts";
import OrderDistributionChart from "../components/OrderDistributionChart";

import DepartmentBudgetStatus from "../components/DepartmentBudgetStatus";


const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div 
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial= {{opacity: 0,y:20}}
          animate= {{opacity :1,y:0}}
          transition ={{duration:1}}


       >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="$182,450"
          />

          <StatCard
            name="Employee"
            icon={Users}
            value="1,437"
          />

          <StatCard
            name="Inventory"
            icon={ShoppingBag}
            value="980 items"
          />

          <StatCard
            name="Growth"
            icon={SquareActivity}
            value="+18%"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <MonthlyRevenueChart/>
          <SalesDistributionCharts/>
          <OrderDistributionChart/>
          <DepartmentBudgetStatus/>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;