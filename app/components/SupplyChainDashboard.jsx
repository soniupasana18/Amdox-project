"use client";

import { useState } from "react";

export default function SupplyChainDashboard() {

  const [orders, setOrders] = useState([
    {
      id:1,
      product:"Laptop",
      supplier:"Dell",
      quantity:50,
      status:"Delivered"
    },
    {
      id:2,
      product:"Mobile",
      supplier:"Samsung",
      quantity:100,
      status:"Processing"
    },
    {
      id:3,
      product:"Keyboard",
      supplier:"Logitech",
      quantity:80,
      status:"Pending"
    }
  ]);


  const [product,setProduct] = useState("");
  const [supplier,setSupplier] = useState("");
  const [quantity,setQuantity] = useState("");


  const addOrder = ()=>{

    if(!product || !supplier || !quantity)
      return;


    setOrders([
      ...orders,
      {
        id:Date.now(),
        product,
        supplier,
        quantity,
        status:"Pending"
      }
    ]);


    setProduct("");
    setSupplier("");
    setQuantity("");

  };


  const deleteOrder=(id)=>{

    setOrders(
      orders.filter(
        order=>order.id !== id
      )
    );

  };



  return (

    <div className="p-6 bg-[#1e1e1e]-100 min-h-screen">


      <h1 className="text-3xl font-bold mb-6">
        Supply Chain Dashboard
      </h1>



      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">


        <div className="bg-blue-600 text-white p-5 rounded-xl">
          <h3>Total Suppliers</h3>
          <p className="text-3xl font-bold">
            25
          </p>
        </div>


        <div className="bg-green-600 text-white p-5 rounded-xl">
          <h3>Purchase Orders</h3>
          <p className="text-3xl font-bold">
            120
          </p>
        </div>


        <div className="bg-purple-600 text-white p-5 rounded-xl">
          <h3>Inventory Items</h3>
          <p className="text-3xl font-bold">
            850
          </p>
        </div>


        <div className="bg-orange-500 text-white p-5 rounded-xl">
          <h3>Shipments</h3>
          <p className="text-3xl font-bold">
            45
          </p>
        </div>


        <div className="bg-red-500 text-white p-5 rounded-xl">
          <h3>Pending</h3>
          <p className="text-3xl font-bold">
            15
          </p>
        </div>


      </div>




      {/* Features */}

      <div className="grid md:grid-cols-3 gap-5 mb-8">


        <div className="bg-[#1e1e1e] p-5 rounded-xl shadow">
          <h2 className="font-bold text-xl">
            Vendor Management
          </h2>
          <p>
            Manage suppliers, vendor details and contracts.
          </p>
        </div>



        <div className="bg-[#1e1e1e] p-5 rounded-xl shadow">
          <h2 className="font-bold text-xl">
            Purchase Management
          </h2>
          <p>
            Track purchase orders and approvals.
          </p>
        </div>



        <div className="bg-[#1e1e1e] p-5 rounded-xl shadow">
          <h2 className="font-bold text-xl">
            Shipment Tracking
          </h2>
          <p>
            Monitor delivery status and logistics.
          </p>
        </div>


      </div>




      {/* Add Order */}


      <div className="bg-[#1e1e1e] p-6 rounded-xl shadow mb-8">


        <h2 className="text-xl font-bold mb-4">
          Create Purchase Order
        </h2>


        <div className="grid md:grid-cols-3 gap-4">


          <input
          className="border p-3 rounded"
          placeholder="Product Name"
          value={product}
          onChange={(e)=>setProduct(e.target.value)}
          />


          <input
          className="border p-3 rounded"
          placeholder="Supplier Name"
          value={supplier}
          onChange={(e)=>setSupplier(e.target.value)}
          />


          <input
          className="border p-3 rounded"
          placeholder="Quantity"
          value={quantity}
          onChange={(e)=>setQuantity(e.target.value)}
          />


        </div>


        <button
        onClick={addOrder}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
        >
          Add Order
        </button>


      </div>




      {/* Purchase Order Table */}


      <div className="bg-[#1e1e1e] p-6 rounded-xl shadow">


        <h2 className="text-xl font-bold mb-4">
          Purchase Orders
        </h2>


        <table className="w-full border">


        <thead className="bg-[#1e1e1e]-200">

        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Product</th>
          <th className="border p-2">Supplier</th>
          <th className="border p-2">Quantity</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Action</th>
        </tr>

        </thead>


        <tbody>

        {
          orders.map((order)=>(

            <tr key={order.id}>

              <td className="border p-2">
                {order.id}
              </td>

              <td className="border p-2">
                {order.product}
              </td>

              <td className="border p-2">
                {order.supplier}
              </td>

              <td className="border p-2">
                {order.quantity}
              </td>

              <td className="border p-2">
                {order.status}
              </td>

              <td className="border p-2">

                <button
                onClick={()=>deleteOrder(order.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))
        }

        </tbody>


        </table>


      </div>


    </div>

  );
}