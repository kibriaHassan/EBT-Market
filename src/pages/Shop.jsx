import { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import axios from "axios";
import { Link } from "react-router";
import SearchProduct from "../components/product/SearchProduct";
import Loader from "../components/ui/Loader";

const Shop = () => {
  // static dummy products
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [skip, setSkip] = useState(0)
  const [search, setSearch] = useState('')
  const [searchProducts, setSearchProducts] = useState([])
  const [isPending, setIsPending] = useState(false)
  useEffect(() => {
    setIsPending(true)
    axios('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(error => {
        console.log(error.message)
      })
      .finally(() => {
        setIsPending(false)
      })
  }, [])
  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
      .then(res => setCategories(res.data))
  }, [])
  // console.log(categories)
  const handleCategory = async (event) => {
    const category = event.target.value;
    setIsPending(true)
    try {
      const productsByCategory = await axios(category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products')
      setProducts(productsByCategory.data.products)
      setSkip(0)
    } catch (error) {

    } finally {
      setIsPending(false)
    }
  }
  const handleSort = async (e) => {
    setIsPending(true)
    const sort = e.target.value;
    const sortProducts = [...products].sort((a, b) => sort === 'dsc' && a.price - b.price || sort === 'asc' && b.price - a.price)
    setProducts(sortProducts)
    setIsPending(false)
  }
  // paginaton
  const limit = 8;
  const pages = [...Array(Math.ceil(products?.length / limit))]
  const handlePagination = (i) => {
    // console.log(i)
    setSkip(limit * i)
  }
  // search
  const handleSearch = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setSearch(value)
    const filter = products.filter((item) => item.title.toLowerCase().includes(value))
    setSearchProducts(filter)
  }
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
          <div className="flex-1 max-w-md relative">
            <input onChange={handleSearch}
              type="search"
              placeholder="Search products..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {search && <div className="bg-gray-900 p-4 rounded-b-lg border border-gray-700 absolute left-0 top-10 w-full">
              <div className="space-y-1">
                {searchProducts?.map(item => (
                  <SearchProduct product={item} key={item.id} />
                ))}
              </div>
              {searchProducts.length == 0 && <h4 className="text-lg text-center">Not Found</h4>}
            </div>}
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select onChange={handleCategory} className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none">
              <option value={''}>All Categories</option>
              {categories?.map(category => (<option key={category.slug} value={category.slug}>{category.name}</option>))}
            </select>
            {/* Sort */}
            <select onChange={handleSort} className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none">
              <option value={''}>Sort by</option>
              <option value={'dsc'}>Price: Low to High</option>
              <option value={'asc'}>Price: High to Low</option>
            </select>
          </div>
        </div>
        {/* ================= PRODUCT GRID ================= */}
        {isPending ? <Loader /> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.slice(skip, skip + limit).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>}
        {/* ================= PAGINATION ================= */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">

            {skip >= limit && <button onClick={() => setSkip((prv) => prv - limit)} className="px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800">Prev</button>}
            {products.length > limit && pages?.map((_, i) => <button key={i} onClick={() => handlePagination(i)} className={`${i === (skip / limit) && 'bg-indigo-600 text-white'} px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800`}>{i + 1}</button>)}
            {skip + limit < products.length && <button onClick={() => setSkip((prv) => prv + limit)} className="px-3 py-2 text-sm rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800">Next</button>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;
