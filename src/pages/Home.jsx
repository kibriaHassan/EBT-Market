import { Link } from "react-router";
import ProductCard from "../components/product/ProductCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])
  return (
    <div className="bg-gray-950 text-gray-100">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to <span className="text-indigo-400">EBT Market</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-md">
              Everything you need, one place.
              Smart shopping experience with modern design.
            </p>

            <div className="mt-6 flex gap-4">
              <Link to="/shop" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
              <Link to="/cart" className="btn btn-outline btn-lg">
                View Cart
              </Link>
            </div>
          </div>

          {/* Right (Image placeholder) */}
          <div className="hidden md:block">
            <div className="h-80 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden">
              <img className="w-full h-full object-cover bg-right" src="https://img.freepik.com/premium-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-116652.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: "Fast Delivery",
            desc: "Quick and reliable delivery across the country.",
          },
          {
            title: "Secure Payment",
            desc: "Safe payment options with trusted gateways.",
          },
          {
            title: "Quality Products",
            desc: "Carefully selected products for best quality.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link
            to="/shop"
            className="text-indigo-400 hover:text-indigo-300"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.slice(0,4).map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-900 border-t border-gray-800">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold">
            Start Shopping with EBT Market
          </h2>
          <p className="mt-3 text-gray-400">
            Discover modern, simple and fast online shopping.
          </p>

          <Link to="/shop" className="btn btn-primary btn-lg mt-6 inline-block">
            Explore Products
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
