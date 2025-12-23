import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex items-center">
      <div className="container py-20 text-center">

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-indigo-500 mb-4">
          404
        </h1>
        {/* Message */}
        <h2 className="text-2xl font-bold mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link to="/shop" className="btn btn-outline btn-lg">
            Go to Shop
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
