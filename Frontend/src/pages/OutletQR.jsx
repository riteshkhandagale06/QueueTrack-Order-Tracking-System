import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

function OutletQR() {
  const outletName = "Burger King";
  const outletId = "outlet_001";

 
const trackingURL = "http://192.168.0.104:5173/outlet/burgerking";

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center w-[450px]">

        <h1 className="text-4xl font-bold text-blue-600">
          QueueTrack
        </h1>

        <p className="text-xl mt-4 font-semibold">
          {outletName}
        </p>

        <div className="bg-white p-5 inline-block mt-8 rounded-xl">
          <QRCode
            value={trackingURL}
            size={250}
          />
        </div>

        <p className="mt-8 text-gray-600">
          Scan this QR to Track Your Order
        </p>

        <p className="text-sm text-gray-400 mt-2 break-all">
          {trackingURL}
        </p>
        <div className="mt-8">

  <Link
    to="/dashboard"
    className="block w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold"
  >
    ← Back to Dashboard
  </Link>

</div>

      </div>

    </div>
  );
}

export default OutletQR;