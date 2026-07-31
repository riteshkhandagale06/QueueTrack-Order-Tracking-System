import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createOrder } from "../services/orders";

function CreateOrder() {
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [foodItem, setFoodItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerName || !orderNumber || !foodItem) {
      alert("Please fill all fields");
      return;
    }

    // Auto Generate Token
    const token = Math.floor(100 + Math.random() * 900);

    try {
      await createOrder({
        customerName,
        orderNumber,
        foodItems: [foodItem],
        token,
        status: "Pending",
        outletId: "burgerking",
      });

      alert("✅ Order Created Successfully");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Failed to create order");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[500px]">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Create Order
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Add New Customer Order
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            placeholder="Customer Name"
            className="w-full border p-3 rounded-xl"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Order Number (Example: A101)"
            className="w-full border p-3 rounded-xl"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />

          <input
            type="text"
            placeholder="Food Item (Example: Burger)"
            className="w-full border p-3 rounded-xl"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
          >
            Create Order
          </button>

          <Link
            to="/dashboard"
            className="block text-center bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl"
          >
            ← Back to Dashboard
          </Link>

        </form>

      </div>

    </div>
  );
}

export default CreateOrder;