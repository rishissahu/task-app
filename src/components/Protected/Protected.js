import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.uid) {
       
      navigate("/login");
    }
  }, [user, navigate]);

   

  return children;
};

export default Protected;
