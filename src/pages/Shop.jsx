import { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";

const Shop = () => {
  // static dummy products
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])

  return (
    <div className="bg-gray-950 text-gray-100">
      <div className="container py-12">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop</h1>
          <p className="text-gray-400">
            Browse and choose your favorite products
          </p>
        </div>

        {/* ================= SEARCH + FILTER BAR ================= */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">

          {/* Search */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Gadgets</option>
            </select>

            <select className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.slice(0,8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">

            <button className="px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800">
              Prev
            </button>

            <button className="px-3 py-2 text-sm rounded-lg bg-indigo-600 text-white">
              1
            </button>

            <button className="px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800">
              2
            </button>

            <button className="px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800">
              3
            </button>

            <button className="px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800">
              Next
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;
