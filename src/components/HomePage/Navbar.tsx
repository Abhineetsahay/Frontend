import { Link } from "react-router-dom";

interface NavbarProps {
  handleScrollToApproach: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleScrollToApproach }) => {
  return (
    <nav className="flex justify-between p-5 border-b-2 border-gray-300 gap-x-10 bg-transparent backdrop-blur-md text-white font-bold font-sans">
      <Link to="/" className="text-2xl animate-pulse">
        Rail Madad
      </Link>
      <div className="flex justify-center text-xl ">
        <ul className="flex gap-4 hover:cursor-pointer">
          <li  className="text-xl transition-all hover:animate-pulse hover:translate-y-1"><Link to="https://daichianoop.github.io/flowchart/" target="_blank">Tech Stack </Link></li>
          <li onClick={handleScrollToApproach} className="text-xl transition-all hover:animate-pulse hover:translate-y-1">Approach</li>
          <li className="text-xl transition-all hover:animate-pulse hover:translate-y-1">
            <Link to="/auth">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
