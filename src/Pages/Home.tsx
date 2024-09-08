import { useRef } from "react";
import Approch from "../components/HomePage/Approch";
import Navbar from "../components/HomePage/Navbar";
import "./Home.css"
const Home: React.FC = () => {
  const approachRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToApproach = () => {
    if (approachRef.current) {
      approachRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-main-bg bg-cover bg-no-repeat min-h-screen">
      <Navbar handleScrollToApproach={handleScrollToApproach} />
      <div ref={approachRef}>
        <Approch />
      </div>
    </div>
  );
};

export default Home;
