import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container py-12 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-100">
            EBT Market
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Smart shopping experience with modern design and reliable service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-white transition">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Subscribe to get latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-gray-800 border border-gray-700 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button className="btn btn-primary rounded-l-none!">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container py-4 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} EBT Market. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ Team A
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
