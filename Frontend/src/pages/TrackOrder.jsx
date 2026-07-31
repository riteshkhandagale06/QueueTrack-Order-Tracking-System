import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrderByNumber } from "../services/orders";

function TrackOrder() {
  const { outletId, orderNumber } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadOrder = async () => {
    try {
      const response = await getOrderByNumber(orderNumber);

      if (response.success) {
        setOrder(response.order);
      } else {
        setOrder(null);
      }
    } catch (error) {
      console.log(error);
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load immediately
    loadOrder();

    // Auto refresh every 3 seconds
    const interval = setInterval(() => {
      loadOrder();
    }, 3000);

    return () => clearInterval(interval);
  }, [orderNumber]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-3xl font-bold text-blue-600">
          Loading Order...
        </h1>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

          <h1 className="text-4xl font-bold text-red-600">
            Order Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            Please check your order number.
          </p>

          <Link
            to={`/outlet/${outletId}`}
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Go Back
          </Link>

        </div>
      </div>
    );
  }

  const colors = {
    Pending: "bg-orange-100 text-orange-700",
    Preparing: "bg-yellow-100 text-yellow-700",
    Ready: "bg-green-100 text-green-700",
    Delivered: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          QueueTrack
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Live Order Tracking
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex justify-between">
            <span className="font-semibold">Customer</span>
            <span>{order.customerName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Order Number</span>
            <span>#{order.orderNumber}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Token</span>
            <span>{order.token}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold">Status</span>

            <span
              className={`px-4 py-2 rounded-full font-semibold ${
                colors[order.status] || "bg-gray-100 text-gray-700"
              }`}
            >
              {order.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Created</span>

            <span>
              {order.createdAt?._seconds
                ? new Date(
                    order.createdAt._seconds * 1000
                  ).toLocaleString()
                : "N/A"}
            </span>
          </div>

        </div>

        <div className="mt-10 text-center">

          <p className="text-green-600 font-semibold">
            🟢 Status updates automatically every 3 seconds
          </p>

          <Link
            to={`/outlet/${outletId}`}
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Track Another Order
          </Link>

        </div>

      </div>

    </div>
  );
}

export default TrackOrder;