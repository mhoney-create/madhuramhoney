import React from "react";
import axios from "axios";

export function PaymentComponent() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    console.log("script loaded");
    const result = await axios.post(
      "http://localhost:3500/api/createpaymentorder",
      {
        items: [
          {
            productId: "6746a8696e8b2f678917c79b",
            productName: "moringahoney",
            quantity: 2,
            price: 299, // Price for 100g variant
            size: "100g",
          },
        ],
        totalAmount: 598, // (299 * 2) + (699 * 1)
        userId: "673c429801fdf6f32a2389fb", // Replace with actual user ID from your system
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { order } = result.data;
    console.log(order);
    const options = {
      key: "rzp_test_XUyV1Om2oZEBvT", // Enter the Key ID generated from the Dashboard
      amount: order.amount.toString(),
      currency: order.currency,
      name: "Madhurum Honey",
      description: "Test Transaction",
      // image: { logo },
      order_id: order.id,
      handler: async function (response) {
        const data = {
          orderCreationId: order.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log("calling success api");
        const result = await axios.post(
          "http://localhost:3500/api/success",
          data
        );
        console.log("called success api");
        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="flex bg-purple-600">
      <p>Buy React now!</p>
      <button className="App-link" onClick={displayRazorpay}>
        Pay ₹500
      </button>{" "}
    </div>
  );
}

export default PaymentComponent;
