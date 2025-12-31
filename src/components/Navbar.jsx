import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center pt-12 pb-5 px-10 bg-gray-950">
        <Link to="/" className="lg:text-3xl text-[22px] font-semibold font-mono">PIXEL VAULT</Link>
        <div className="flex gap-5 items-center">
          <Link
            className="lg:text-lg text-[16px] font-medium active:scale-95 bg-blue-600 rounded text-white lg:px-4 lg:py-2 px-2 py-1"
            to="/"
          >
            Home
          </Link>
          <Link
            className="lg:text-lg text-[16px] font-medium active:scale-95 bg-red-600 rounded text-white lg:px-4 lg:py-2 px-2 py-1"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
