import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <button onClick={click}>Login</button>
    </div>
  );
};

export default Login;
