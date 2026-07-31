import { db } from "../firebase/firebase.js";

const ordersCollection = db.collection("orders");

// Create Order
export const createOrder = async (orderData) => {
  const docRef = await ordersCollection.add(orderData);
  return { id: docRef.id, ...orderData };
};

// Get All Orders
export const getAllOrders = async () => {
  const snapshot = await ordersCollection.get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Update Order
export const updateOrder = async (id, data) => {
  await ordersCollection.doc(id).update(data);
};

// Delete Order
export const deleteOrder = async (id) => {
  await ordersCollection.doc(id).delete();
};