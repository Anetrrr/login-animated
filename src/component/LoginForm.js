import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Form from './Form';
import img from '../assets/loginlogo.svg';

const LoginForm = () => {
	

	const fields = [
		{ name: 'username', type: 'text', placeholder: 'Username', id: 1 },
		{ name: 'password', type: 'password', placeholder: 'Password', id: 2 },
	];
	


	return (
		<>
			{/* <div className="img-container">
				<img
					src={img}
					alt=""
				/>
			</div> */}
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
