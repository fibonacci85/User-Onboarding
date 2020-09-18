import React from "react";
import './Form.css';
import * as yup from 'yup'
import formSchema from '../validation/formSchema';
import axios from 'axios';




const Form = (props) => {

    const formState = props.formState;
    const setFormState = props.setFormState;
    const errors = props.errors;
    const setErrors = props.setErrors;
    const buttonDisabled = props.buttonDisabled;
    const setButtonDisabled = props.setButtonDisabled;
    const post = props.post;
    const setPost = props.setPost;


    //validation

const validateChange = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,[e.target.name] : ""
      });
    })
  .catch(err => {
      setErrors({
          ...errors,[e.target.name] : err.errors[0]
      });
  });
};

    const formSubmit = event => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', formState)
        .then(response => {
            setPost(response.data);
            console.log("success",post);
            
            setFormState({
                name: "",
                email: "",
                password: "",
                checkbox: "",
            })
        })
        .catch( err => {
            console.log(err.response)
        })
    };

    const inputChange = event => {
        event.persist();
        const newFormData = {
          ...formState, [event.target.name] : event.target.type === 
          "checkbox" ? event.target.checked : event.target.value
        };
        validateChange(event);
        setFormState(newFormData);
      };


return (

    <div className="theForm">
        <form onSubmit={formSubmit}>
            <h2>Sign <span>your life</span> away to us!</h2><br/>
            <input 
            className="name" 
            name = "name" 
            type = "text" 
            placeholder = "Name" 
            value={formState.name}
            onChange={inputChange}
            /><br/> 
            {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            <input 
            className="email" 
            name = "email" 
            type = "email" 
            placeholder = "Email" 
            value={formState.email}
            onChange={inputChange}
            /><br/>
            {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
            <input 
            className="password" 
            name = "password" 
            type = "password" 
            placeholder = "Password" 
            value={formState.password}
            onChange={inputChange}
            /><br/>
            {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            <br/>
             I agree: <input 
             name = "checkbox" 
             type = "checkbox" 
             checked={formState.checkbox}
             onChange={inputChange} 
             /><br/>
            <br/> 
            <button disabled={buttonDisabled}>Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>

        </form>
    </div>

)

}


export default Form;