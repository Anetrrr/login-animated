import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Form from './Form';
import img from '../assets/loginlogo.svg';

const LoginForm = () => {
	

	const fields = [
		{ name: 'username', type: 'text', placeholder: 'Username'},
		{ name: 'password', type: 'password', placeholder: 'Password' },
	];
	


	return (
		<>
			
			<Form
				fields={fields}
				title="Login"

			/>
			<section className="forgot">
            <Link to='/reset'>Forgot password
            </Link>
            </section>
			<section className="register">
				Do you have an account?
				<Link to="/register"> Register</Link>
			</section>
		</>
	);
};

export default LoginForm;
