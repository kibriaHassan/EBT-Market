import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartItemCard from "../components/product/CartItemCard";
import { useEffect, useState } from "react";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0)
  const cartItems = useSelector(state => state.cart)
  let total = 0;
  useEffect(() => {
    cartItems.map(item => {
      total += item.price * item.quantity
    })
    setSubTotal(total)
  })
  return (
    <div className="bg-gray-950 text-gray-100">
      <div className="container py-12">
        {/* ================= HEADER ================= */}
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {cartItems.length === 0 ? <div>
            <h4 className="text-center text-3xl font-bold">Cart Empty</h4>
          </div> : <>

            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <CartItemCard key={item.id} product={item} />
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
                  <span>$ {subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>$ {subTotal > 1 ? 10 : 0}</span>
                </div>
                <div className="flex justify-between border-t border-gray-800 pt-3 text-gray-100 font-medium">
                  <span>Total</span>
                  <span>$ {subTotal > 1 ? (subTotal + 10).toFixed(2) : 0}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="btn btn-primary btn-lg w-full mt-6 text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>}

        </div>

      </div>
    </div>
  );
};

export default Cart;
