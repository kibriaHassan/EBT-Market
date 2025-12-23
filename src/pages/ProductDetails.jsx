import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { addtocart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import Loader from "../components/ui/Loader";

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [productPhoto, setProductPhoto] = useState('')
  const cart = useSelector((state) => state.cart)
  const [loadin, setLoading] = useState(true)
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => { })
      .finally(setLoading(false))
  }, [id])
  const { title, price, thumbnail, category, description, brand, stock, images } = product || {};
  const handleAddTOCart = () => {
    const isExist = cart.some(item => item.id === Number(id))
    if (isExist) return toast.warn('This product already exist in your cart')
      dispatch(addtocart({ ...product, quantity: 1 }))
    toast.success(`Product was added to your cart.`)
  }
  return (
    <div className="bg-gray-950 text-gray-100">
      <div className="container py-12 grid md:grid-cols-2 gap-10">

        {/* ================= IMAGE SECTION ================= */}
        {loadin && !title ? <Loader /> : 
        title && <> <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

          {/* Main Image */}
          <div className="h-80 w-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 mb-4">
            <img className="w-full h-full object-cover" src={productPhoto ? productPhoto : thumbnail} alt={title} />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {images?.map((item) => (
              <div onClick={() => setProductPhoto(item)}
                key={item}
                className="h-20 w-20 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500 hover:border-indigo-500 cursor-pointer transition"
              >
                <img className="w-full" src={item} alt={title} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {title}
          </h1>

          <p className="text-xl text-indigo-400 font-semibold mb-4">
            $ {price}
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
            <span>
              Category: <span className="text-gray-200 capitalize">{category}</span>
            </span>
            <span>
              Brand: <span className="text-gray-200">{brand}</span>
            </span>
            <span>
              Stock: <span className="text-green-400">{stock} Pcs</span>
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button onClick={handleAddTOCart} className="btn btn-primary btn-lg">
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-outline btn-lg">
              Go to Cart
            </Link>
          </div>
        </div>
        </>
        
        }

        

      </div>
    </div>
  );
};

export default ProductDetails;
