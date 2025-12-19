import { Link } from "react-router";

const ProductDetails = () => {
  return (
    <div className="bg-gray-950 text-gray-100">
      <div className="container py-12 grid md:grid-cols-2 gap-10">

        {/* ================= IMAGE SECTION ================= */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          
          {/* Main Image */}
          <div className="h-80 w-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 mb-4">
            Main Product Image
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-20 w-20 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500 hover:border-indigo-500 cursor-pointer transition"
              >
                Img {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Wireless Headphone
          </h1>

          <p className="text-xl text-indigo-400 font-semibold mb-4">
            ৳ 3,500
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            High quality wireless headphone with modern design and
            long battery life. Perfect for music, gaming and daily use.
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
            <span>
              Category: <span className="text-gray-200">Electronics</span>
            </span>
            <span>
              Brand: <span className="text-gray-200">EBT Audio</span>
            </span>
            <span>
              Stock: <span className="text-green-400">In Stock</span>
            </span>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-400 text-sm">Quantity:</span>
            <div className="flex items-center border border-gray-700 rounded-lg">
              <button className="px-3 py-1 text-gray-300 hover:bg-gray-800">
                -
              </button>
              <span className="px-4 py-1">1</span>
              <button className="px-3 py-1 text-gray-300 hover:bg-gray-800">
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="btn btn-primary btn-lg">
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-outline btn-lg">
              Go to Cart
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
