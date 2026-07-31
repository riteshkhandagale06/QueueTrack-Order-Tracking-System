import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrder,
  deleteOrder,
} from "../services/orders";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  const loadOrders = async () => {
    try {
      const response = await getAllOrders();
      setOrders(response.orders || []);
    } catch (error) {
      console.log(error);
      alert("Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrders();

    const interval = setInterval(() => {
      loadOrders();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const changeStatus = async (id, status) => {
    await updateOrder(id, status);
    loadOrders();
  };

  const removeOrder = async (id) => {
    await deleteOrder(id);
    loadOrders();
  };

  const filteredOrders = orders.filter((order) => {
    return (
      order.customerName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      order.orderNumber
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      String(order.token).includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-blue-600">
            QueueTrack Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage Food Court Orders
          </p>
        </div>

        <div className="flex gap-3">

          <Link
            to="/create-order"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
          >
            + Create Order
          </Link>

          <Link
            to="/outlet-qr"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
          >
            QR Code
          </Link>

          <Link
            to="/login"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
          >
            Logout
          </Link>

        </div>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search Customer / Order / Token..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">

        <div className="bg-white rounded-xl shadow p-5">
          <h2>Total Orders</h2>
          <p className="text-4xl font-bold">{orders.length}</p>
        </div>

        <div className="bg-yellow-100 rounded-xl shadow p-5">
          <h2>Pending</h2>
          <p className="text-4xl font-bold">
            {orders.filter((o) => o.status === "Pending").length}
          </p>
        </div>

        <div className="bg-blue-100 rounded-xl shadow p-5">
          <h2>Preparing</h2>
          <p className="text-4xl font-bold">
            {orders.filter((o) => o.status === "Preparing").length}
          </p>
        </div>

        <div className="bg-green-100 rounded-xl shadow p-5">
          <h2>Ready</h2>
          <p className="text-4xl font-bold">
            {orders.filter((o) => o.status === "Ready").length}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">Order</th>
              <th>Customer</th>
              <th>Token</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order) => (

              <tr
                key={order.id}
                className="border-b text-center"
              >

                <td className="p-4">
                  {order.orderNumber}
                </td>

                <td>{order.customerName}</td>

                <td>{order.token}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : order.status === "Preparing"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="space-x-2">

                  <button
                    onClick={() =>
                      changeStatus(order.id, "Preparing")
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                  >
                    Preparing
                  </button>

                  <button
                    onClick={() =>
                      changeStatus(order.id, "Ready")
                    }
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
                  >
                    Ready
                  </button>

                  <button
                    onClick={() =>
                      removeOrder(order.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;