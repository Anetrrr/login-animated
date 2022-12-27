import React from "react";
import './Form.css'
import Form from "../component/Form"
import {Link} from 'react-router-dom'

const Register = () => {
    const fields = [
		{ name: 'FullName', type: 'text', placeholder: 'Full Name' },
		{ name: 'email', type: 'text', placeholder: 'Email' },
		{ name: 'password', type: 'password', placeholder: 'Password' },
	];
        
    
    return (
        <div className="form-container">
		<div>
            <Form title='Register' fields={fields} />
        </div>
        <section className="forgot">
            <Link to='/reset'>Forgot password
            </Link>
            </section>
			<span className="register">
				Already have an account?
				<Link to="/">  Login</Link>
			</span>
        
            </div>
	);
};

export default Register;
