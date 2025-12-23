import React from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../features/cart/cartSlice';

const CartItemCard = ({product}) => {
    const {title,quantity,price,thumbnail}= product || {};
    const dischpatch = useDispatch()
    const increase = ()=> {
        dischpatch(increaseQuantity(product))
    }
    const decrease = ()=> {
        dischpatch(decreaseQuantity(product))
    }
    const handleRemove = ()=>{
        dischpatch(removeItem(product))
    }
    return (
        <>
            <div
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-6"
            >
                {/* Image */}
                <div className="h-24 w-24 bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500">
                    <img className='w-full h-full object-center' src={thumbnail} alt={title} />
                </div>

                {/* Info */}
                <div className="flex-1">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        ৳ {price}
                    </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center border border-gray-700 rounded-lg">
                    <button onClick={decrease} className="px-3 py-1 text-gray-300 hover:bg-gray-800">
                        -
                    </button>
                    <span className="px-4 py-1">
                        {quantity}
                    </span>
                    <button onClick={increase} className="px-3 py-1 text-gray-300 hover:bg-gray-800">
                        +
                    </button>
                </div>

                {/* Remove */}
                <button onClick={handleRemove} className="text-red-400">
                    <ImCross />
                </button>
            </div>
        </>
    )
}

export default CartItemCard