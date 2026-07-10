"use client";

import { useState } from "react";

export default function InventoryDashboard() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      quantity: 20,
      price: 45000,
    },
    {
      id: 2,
      name: "Mouse",
      category: "Accessories",
      quantity: 5,
      price: 700,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.category ||
      !form.quantity ||
      !form.price
    ) {
      alert("Please fill all fields");
      return;
    }

    setItems([
      ...items,
      {
        id: Date.now(),
        name: form.name,
        category: form.category,
        quantity: Number(form.quantity),
        price: Number(form.price),
      },
    ]);

    setForm({
      name: "",
      category: "",
      quantity: "",
      price: "",
    });
  };

  const totalItems = items.length;
  const inStock = items.filter((item) => item.quantity > 10).length;
  const lowStock = items.filter(
    (item) => item.quantity > 0 && item.quantity <= 10
  ).length;
  const outOfStock = items.filter((item) => item.quantity === 0).length;

  return (
    <div className="p-6  bg-[#1e1e1e]-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Inventory Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card title="Total Items" value={totalItems} color="bg-blue-500" />
        <Card title="In Stock" value={inStock} color="bg-green-500" />
        <Card title="Low Stock" value={lowStock} color="bg-yellow-500" />
        <Card title="Out of Stock" value={outOfStock} color="bg-red-500" />
      </div>

      {/* Add Item */}
      <div className="bg-[#1e1e1e] rounded-lg shadow p-5 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Inventory Item</h2>

        <form
          onSubmit={addItem}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded p-2"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="border rounded p-2"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleChange}
            className="border rounded p-2"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border rounded p-2"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
      </div>

      {/* Inventory List */}
      <div className="bg-[#1e1e1e] rounded-lg shadow p-5">
        <h2 className="text-xl font-semibold mb-4">Inventory List</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Product</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">₹{item.price}</td>

                <td className="border p-2">
                  {item.quantity === 0 ? (
                    <span className="text-red-600 font-semibold">
                      Out of Stock
                    </span>
                  ) : item.quantity <= 10 ? (
                    <span className="text-yellow-600 font-semibold">
                      Low Stock
                    </span>
                  ) : (
                    <span className="text-green-600 font-semibold">
                      In Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className={`${color} text-white rounded-lg shadow p-5`}>
      <h3 className="text-lg">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}