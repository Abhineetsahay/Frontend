import { auth } from "../components/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DashBoard = () => {
  const navigate = useNavigate();

  const LogOut = async () => {
    try {
      await auth.signOut();
      toast.success("User Logged Out Successfully");
      navigate("/auth");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Profile</h1>
        <button
          onClick={LogOut}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
