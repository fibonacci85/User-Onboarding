import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup'
import './App.css';
import formSchema from './validation/formSchema';




function App() {

  //initial state

const [formState, setFormState] = useState({
  name: "",
  email: "",
  password: "",
  checkbox: "",
});

//state for errors

const [errors, setErrors] = useState({
  name: "",
  email: "",
  password: "",
  checkbox: "",
});

//button state

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
formSchema.isValid(formState).then(valid => {
  setButtonDisabled(!valid)
})
},[formState]);


//post state

const [post, setPost] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>⬇️ Join Our Team! ⬇️</h1>
        <Form 
        formState={formState}
        setFormState={setFormState} 
        errors={errors}
        setErrors={setErrors}
        buttonDisabled={buttonDisabled}
        setButtonDisabled={setButtonDisabled}
        post={post}
        setPost={setPost}
        />
      </header>
    </div>
  );
}

export default App;
