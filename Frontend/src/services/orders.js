


import api from "./api";

/* ===========================
   Get All Orders
=========================== */
export const getAllOrders = async () => {
  try {
    const response = await api.get("/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

/* ===========================
   Get Order By Order Number
=========================== */
export const getOrderByNumber = async (orderNumber) => {
  try {
    const response = await api.get(`/orders/${orderNumber}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

/* ===========================
   Create New Order
=========================== */
export const createOrder = async (orderData) => {
  try {
    const response = await api.post("/orders", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

/* ===========================
   Update Order Status
=========================== */
export const updateOrder = async (id, status) => {
  try {
    const response = await api.put(`/orders/${id}`, {
      status,
    });

    return response.data;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
};

/* ===========================
   Delete Order
=========================== */
export const deleteOrder = async (id) => {
  try {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};