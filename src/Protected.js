import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Component, ...rest }) {
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("login");

    // Agar login nahi hai, toh login page pe redirect
    if (loginStatus !== "true") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <Component />;
}

export default Protected;
