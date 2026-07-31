
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TrackOrder from "./pages/TrackOrder";
import OwnerLogin from "./pages/OwnerLogin";
import Dashboard from "./pages/Dashboard";
import OutletQR from "./pages/OutletQR";
import NotFound from "./pages/NotFound";
import CreateOrder from "./pages/CreateOrder";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===========================
            Home Page
        =========================== */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ===========================
            Customer Home
        =========================== */}
        <Route
          path="/outlet/:outletId"
          element={<Home />}
        />

        {/* ===========================
            Track Order
        =========================== */}
        <Route
          path="/outlet/:outletId/track/:orderNumber"
          element={<TrackOrder />}
        />

        {/* ===========================
            Outlet QR Code
        =========================== */}
        <Route
          path="/qr"
          element={<OutletQR />}
        />

        {/* ===========================
            Create Order
        =========================== */}
        <Route
          path="/create-order"
          element={<CreateOrder />}
        />

        {/* ===========================
            Owner Login
        =========================== */}
        <Route
          path="/login"
          element={<OwnerLogin />}
        />

        {/* ===========================
            Dashboard
        =========================== */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/outlet-qr"
          element={<OutletQR />}
        />

        {/* ===========================
            404 Page
        =========================== */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
