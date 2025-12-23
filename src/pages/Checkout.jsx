import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Checkout = () => {
    const delivery = 10;
    const [subTotal, setSubTotal] = useState(0)
    const checkoutItems = useSelector(state => state.cart)
    let total = 0;
    useEffect(() => {
        checkoutItems.map(item => {
            total += item.price * item.quantity
        })
        setSubTotal(total)
    })
    console.log(subTotal)
    return (
        <div className="bg-gray-950 text-gray-100">
            <div className="container py-12">

                {/* ================= HEADER ================= */}
                <h1 className="text-3xl font-bold mb-8">
                    Checkout
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* ================= SHIPPING INFO ================= */}
                    <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-6">
                            Shipping Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none"
                            />
                            <textarea
                                rows="3"
                                placeholder="Full Address"
                                className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none"
                            />
                        </div>

                        {/* Payment */}
                        <div className="mt-8">
                            <h3 className="font-medium mb-4">
                                Payment Method
                            </h3>
                            <label className="flex items-center gap-3">
                                <input type="radio" defaultChecked />
                                <span>Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    {/* ================= ORDER SUMMARY ================= */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-fit">
                        <h2 className="text-xl font-semibold mb-6">
                            Your Order
                        </h2>

                        {/* Products */}
                        <div className="space-y-4 mb-6">
                            {checkoutItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between text-sm"
                                >
                                    <div>
                                        <p className="text-gray-100">
                                            {item.title}
                                        </p>
                                        <p className="text-gray-500">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>
                                    <p className="text-gray-300">
                                        $ {(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Price Summary */}
                        <div className="space-y-3 text-sm text-gray-400 border-t border-gray-800 pt-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$ {subTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span>$ {delivery}</span>
                            </div>
                            <div className="flex justify-between text-gray-100 font-medium">
                                <span>Total</span>
                                <span>$ {(subTotal+delivery).toFixed(2)}</span>
                            </div>
                        </div>

                        <Link
                            to="/success"
                            className="btn btn-primary btn-lg w-full mt-6 text-center"
                        >
                            Place Order
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Checkout;
