import React from "react";
import './Form.css';

const Form = ({fields, title}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  return (
  
    <div className='container-form'>
			<h1 className='login'>{title}</h1>
			<form className='form-full' onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div className='inputline'>
					<input
                        name={field.name}
						type={field.type}
						placeholder={field.placeholder}
                        key={field.id}
					/>
				</div>
            ))}
				
                
                <button>{title}</button>
			</form>
        
  </div>

  )
};

export default Form;
