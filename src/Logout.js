import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("login");
        // Login page pe redirect
        navigate("/login", { replace: true });
    }, [navigate]);

    return (
        <h2>Logging out...</h2>
    );
}

export default Logout;
