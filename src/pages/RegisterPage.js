import React from "react";
import { Link } from "react-router-dom";
import '../component/Form.css'
import Register from '../component/Register'
import reggie from '../assets/reggie.svg'

const RegisterPage = () => {
    
  return (
  <div className="register-container">
     <Register />
     {/* <LoginImg src={register}/> */}
     <div className="img-container">
				<img
					src={reggie}
					alt=""
				/>
			</div>
           
  </div>
  )
};

export default RegisterPage;
