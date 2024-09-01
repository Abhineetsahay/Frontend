import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/Firebase/Firebase";
import RegisteInRailMadad from "../components/Registration/Registartion.Rail";
import Login1 from "../components/Registration/Login1";

const Authoisation: React.FC = () => {
  const [authState, setAuthState] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/dashboard`);
      } else {
        setAuthState(true);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const toggleAuth = () => setAuthState((prev) => !prev);

  return (
    <>
      {authState ? (
        <RegisteInRailMadad toggleAuth={toggleAuth} />
      ) : (
        <Login1 toggleAuth={toggleAuth} />
      )}
    </>
  );
};

export default Authoisation;
