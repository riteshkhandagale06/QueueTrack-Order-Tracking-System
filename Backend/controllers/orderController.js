import { db } from "../firebase/firebase.js";

export const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      tokenNumber,
      foodItem,
      status
    } = req.body;

    const order = {
      customerName,
      tokenNumber,
      foodItem,
      status,
      createdAt: new Date()
    };

    const docRef = await db.collection("orders").add(order);

    res.status(201).json({
      success: true,
      id: docRef.id,
      order
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};