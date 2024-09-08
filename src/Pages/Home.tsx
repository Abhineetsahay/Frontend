import { useRef } from "react";
import Approch from "../components/HomePage/Approch";
import Navbar from "../components/HomePage/Navbar";

const Home: React.FC = () => {
  const approachRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToApproach = () => {
    if (approachRef.current) {
      approachRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar handleScrollToApproach={handleScrollToApproach} />
      <div ref={approachRef}>
        <Approch />
      </div>
    </div>
  );
}

export default Home;
