import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { id, title, price, thumbnail } = product || {};
  
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-indigo-500 transition">

      {/* Image */}
      <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500 object-cover">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          "Product Image"
        )}
      </div>

      {/* Info */}
      <h3 className="text-gray-100 font-medium line-clamp-1">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        ৳ {price}
      </p>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button className="btn btn-primary btn-sm flex-1">
          Add to Cart
        </button>

        <Link
          to={`/product/${id}`}
          className="btn btn-outline btn-sm flex-1 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
