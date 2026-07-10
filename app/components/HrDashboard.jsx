

"use client";

import { useState } from "react";

export default function HrDashboard() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul Sharma", department: "HR", position: "HR Manager" },
    { id: 2, name: "Priya Singh", department: "Finance", position: "Accountant" },
    { id: 3, name: "Amit Kumar", department: "IT", position: "Software Engineer" },
  ]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = () => {
    if (!name || !department || !position) return;

    const newEmployee = {
      id: Date.now(),
      name,
      department,
      position,
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setDepartment("");
    setPosition("");
  };

  // ✅ Fixed for JSX
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white rounded-lg p-5">
          <h3>Total Employees</h3>
          <p className="text-3xl font-bold">{employees.length}</p>
        </div>

        <div className="bg-green-500 text-white rounded-lg p-5">
          <h3>Departments</h3>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-purple-500 text-white rounded-lg p-5">
          <h3>Attendance</h3>
          <p className="text-3xl font-bold">96%</p>
        </div>

        <div className="bg-orange-500 text-white rounded-lg p-5">
          <h3>New Hires</h3>
          <p className="text-3xl font-bold">4</p>
        </div>
      </div>

      {/* Add Employee */}
      <div className=" bg-[#1e1e1e]  shadow rounded-lg p-5 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Employee</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <button
          onClick={addEmployee}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="bg-[#1e1e1e]  shadow rounded-lg p-5">
        <h2 className="text-xl font-semibold mb-4">Employee List</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-black">ID</th>
              <th className="border p-2  text-black">Name</th>
              <th className="border p-2 text-black">Department</th>
              <th className="border p-2 text-black">Position</th>
              <th className="border p-2 text-black">Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td className="border p-2">{emp.id}</td>
                <td className="border p-2">{emp.name}</td>
                <td className="border p-2">{emp.department}</td>
                <td className="border p-2">{emp.position}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {employees.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}