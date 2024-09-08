import { Link } from "react-router-dom";

interface NavbarProps {
  handleScrollToApproach: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleScrollToApproach }) => {
  return (
    <nav className="flex justify-between p-5 border-b-2 border-gray-300 gap-x-10 bg-red-600">
      <Link to="/" className="text-3xl ">
        Rail Madad
      </Link>
      <div className="flex justify-center text-2xl">
        <ul className="flex gap-4 hover:cursor-pointer">
          <li  className="text-3xl transition-all hover:animate-pulse hover:translate-y-1">Tech Stack</li>
          <li onClick={handleScrollToApproach} className="text-3xl transition-all hover:animate-pulse hover:translate-y-1">Approach</li>
          <li className="text-3xl transition-all hover:animate-pulse hover:translate-y-1">
            <Link to="/auth">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
