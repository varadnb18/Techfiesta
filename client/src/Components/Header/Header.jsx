import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc } from "firebase/firestore";

function Header() {
  const [userDetails, setUserDetails] = useState(null);
  const [header, setHeader] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User data does not exist.");
        }
      } else {
        console.log("User is not logged in.");
      }
    });
  };

  useEffect(() => {
    fetchUserData();

    const token = localStorage.getItem("authToken");
    if (token) {
      setHeader(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setHeader(false);
    setUserDetails(null); // Clear user details after logout
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div>
      <button onClick={header ? handleLogout : () => navigate("/Login-Page")}>
        {header ? "Logout" : "Login"}
      </button>
      <h3>Welcome {userDetails ? userDetails.username : "Guest"}</h3>
    </div>
  );
}

export default Header;
