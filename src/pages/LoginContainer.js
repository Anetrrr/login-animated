import React from "react";
import "../component/Form.css"
import LoginForm from "../component/LoginForm";
import LoginImg from "../component/LoginImg";
const LoginContainer = () => {
  return (
  <div className="container">
   <div className="img-container"> <LoginImg /> </div>
   <div className="form-container"> <LoginForm /> </div>

  </div>
  
  )
};

export default LoginContainer;
