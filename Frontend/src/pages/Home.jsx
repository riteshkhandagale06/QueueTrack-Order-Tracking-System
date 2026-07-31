import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();
  const { outletId } = useParams();

  const handleTrackOrder = () => {
    if (!orderNumber.trim()) {
      alert("Please enter your order number.");
      return;
    }

    navigate(`/outlet/${outletId}/track/${orderNumber}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-blue-600">
            QueueTrack
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Track Your Food Order
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Enter your order number below
          </p>

        </div>

        <div className="mt-10">

          <input
            type="text"
            value={orderNumber}
            placeholder="Example : 101"
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleTrackOrder}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Track Order
          </button>

        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Powered by QueueTrack
        </div>

      </div>

    </div>
  );
}

export default Home;