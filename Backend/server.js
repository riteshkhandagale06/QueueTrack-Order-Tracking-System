import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./firebase/firebase.js";

dotenv.config();

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());

// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 QueueTrack Backend Running Successfully",
  });
});

// ===============================
// Firebase Test Route
// ===============================

app.get("/test-firebase", async (req, res) => {
  try {
    const snapshot = await db.collection("orders").get();

    res.json({
      success: true,
      totalOrders: snapshot.size,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ===============================
// Create Order
// ===============================

app.post("/orders", async (req, res) => {
  try {
    const {
      customerName,
      orderNumber,
      token,
      foodItems,
      totalAmount,
      status,
      outletId,
    } = req.body;

    const newOrder = {
      customerName,
      orderNumber,
      token: token || 1,
      foodItems: foodItems || [],
      totalAmount: totalAmount || 0,
      status: status || "Pending",
      outletId: outletId || "outlet_001",
      createdAt: new Date(),
    };

    const docRef = await db.collection("orders").add(newOrder);

    res.status(201).json({
      success: true,
      message: "Order Created Successfully",
      id: docRef.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ===============================
// Get All Orders
// ===============================

app.get("/orders", async (req, res) => {
  try {
    const snapshot = await db.collection("orders").get();

    const orders = [];

    snapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.json({
      success: true,
      total: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ===============================
// Get Single Order By Order Number
// ===============================

app.get("/orders/:orderNumber", async (req, res) => {
  try {
    const snapshot = await db
      .collection("orders")
      .where("orderNumber", "==", req.params.orderNumber)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    const doc = snapshot.docs[0];

    res.json({
      success: true,
      order: {
        id: doc.id,
        ...doc.data(),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ===============================
// Update Order Status
// ===============================

app.put("/orders/:id", async (req, res) => {
  try {
    const { status } = req.body;

    await db.collection("orders").doc(req.params.id).update({
      status,
    });

    res.json({
      success: true,
      message: "Order Status Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ===============================
// Delete Order
// ===============================

app.delete("/orders/:id", async (req, res) => {
  try {
    await db.collection("orders").doc(req.params.id).delete();

    res.json({
      success: true,
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 QueueTrack Backend Running on http://0.0.0.0:${PORT}`);
});