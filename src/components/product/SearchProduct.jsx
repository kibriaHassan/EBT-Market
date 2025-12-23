import { Link } from "react-router"


const SearchProduct = ({product}) => {
    const {price,thumbnail,title,id} = product || {}
    return (
        <>
            <Link to={`/product/${id}`} className=" bg-gray-800 px-5 flex items-center gap-5 justify-between border border-gray-700">
                <img className="w-15" src={thumbnail} alt={title} />
                <h4>{title}</h4>
                <p>{price}</p>
            </Link>
        </>
    )
}

export default SearchProduct