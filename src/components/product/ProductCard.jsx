import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addtocart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { id, title, price, thumbnail, category } = product || {};
  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleAddTOCart = () => {
    const isExist = cart.some(item=>item.id===id)
    if (isExist) return toast.warn('This product already exist in your cart')
    dispatch(addtocart({ ...product, quantity: 1 }))
    toast.success(`Product was added to your cart.`)
  }
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl  hover:border-indigo-500 transition overflow-hidden">

      {/* Image */}
      <div className="h-60 bg-gray-800 flex items-center justify-center text-gray-500 object-cover">
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
      <div className="p-4">
        <h3 className="text-gray-100 font-medium line-clamp-1">
          {title}
        </h3>
        <div className="flex justify-between">
          <p className="text-sm text-gray-400 mt-1">
            $ {price}
          </p>
          <p className="text-sm text-gray-400 mt-1 capitalize">
            {category}
          </p>
        </div>
        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <button onClick={handleAddTOCart} className="btn btn-primary btn-sm flex-1">
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
    </div>
  );
};

export default ProductCard;
