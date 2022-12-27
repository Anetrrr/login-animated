import React from "react";
import Form from './Form'
import { Link } from "react-router-dom";
import {GrFormClose} from 'react-icons/gr'
import './Form.css'


const Reset = () => {
     const fields = [
		{ name: 'email', type: 'email', placeholder: 'Enter email' },
     ]
  return (
    <div className="form-container">
    <div className="close-icon">
    <Link to='/'><GrFormClose size={25}  />
    </Link>
    </div>
    
    <div>
        <Form title='Reset Password' fields={fields} />
    </div>
    <span className="forgot">We'll send you a reset link</span>
        
    
        </div>

    
  
  
  )
};

export default Reset;
