import { Button } from "@mui/material";
import { auth } from "../components/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DashBoard=()=>{
          const navigate=useNavigate();
          const LogOut=async()=>{
                    try {
                              await auth.signOut();
                              toast.success("User Logged Successfully")
                              navigate("/auth")
                    } catch (error) {
                              toast.error("Error");
                    }
          }
          return (
                    <>
                    {/* In Profile */}
                    <div>
                    <Button variant="contained" color="primary" onClick={LogOut}>Log Out</Button>
                    </div>
                    </>
          )
}

export default DashBoard;