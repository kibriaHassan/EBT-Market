import { Link } from "react-router";

const Cart = () => {
  // static dummy cart items
  const cartItems = [
    {
      id: "p1",
      title: "Wireless Headphone",
      price: 3500,
      quantity: 1,
    },
    {
      id: "p2",
      title: "Smart Watch",
      price: 2800,
      quantity: 2,
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-100">
      <div className="container py-12">

        {/* ================= HEADER ================= */}
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ================= CART ITEMS ================= */}
          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                {/* Image */}
                <div className="h-24 w-24 bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500">
                  Image
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    ৳ {item.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center border border-gray-700 rounded-lg">
                  <button className="px-3 py-1 text-gray-300 hover:bg-gray-800">
                    -
                  </button>
                  <span className="px-4 py-1">
                    {item.quantity}
                  </span>
                  <button className="px-3 py-1 text-gray-300 hover:bg-gray-800">
                    +
                  </button>
                </div>

                {/* Remove */}
                <button className="text-red-400 text-sm hover:text-red-300">
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* ================= ORDER SUMMARY ================= */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳ 9,100</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>৳ 100</span>
              </div>
              <div className="flex justify-between border-t border-gray-800 pt-3 text-gray-100 font-medium">
                <span>Total</span>
                <span>৳ 9,200</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="btn btn-primary btn-lg w-full mt-6 text-center"
            >
              Proceed to Checkout
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
