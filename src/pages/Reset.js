import React from "react";
import Reset from "../component/Reset";
import resetimage from '../assets/resetimage.svg';
import '../component/Form.css'

const reset = () => {
  return (
    <div className="register-container">
    <Reset />
    {/* <LoginImg src={register}/> */}
    <div className="img-container">
               <img
                   src={resetimage}
                   alt=""
               />
           </div>
          
 </div>
  );
};

export default reset;
