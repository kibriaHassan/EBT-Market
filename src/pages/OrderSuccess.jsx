import { Link } from "react-router";

const OrderSuccess = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-[70vh] flex items-center">
      <div className="container py-20 text-center">

        {/* Success Icon */}
        <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-green-600/20 flex items-center justify-center">
          <svg
            className="h-10 w-10 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold mb-3">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-400 mb-6">
          Thank you for shopping with <span className="text-indigo-400">EBT Market</span>.  
          Your order has been confirmed.
        </p>

        {/* Order Info */}
        <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6 text-left mb-8">
          <p className="text-sm text-gray-400 mb-2">
            <span className="text-gray-200">Order ID:</span> #EBT123456
          </p>
          <p className="text-sm text-gray-400 mb-2">
            <span className="text-gray-200">Payment Method:</span> Cash on Delivery
          </p>
          <p className="text-sm text-gray-400">
            <span className="text-gray-200">Estimated Delivery:</span> 3–5 working days
          </p>
        </div>
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
          <Link to="/" className="btn btn-outline btn-lg">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;
