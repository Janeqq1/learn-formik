import React from 'react';
import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values =>{
      alert("Login Successful");
      values.username = '';
      values.password = '';
    },
    validate: values => {
      let errors = {};
      const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      if (!values.username) errors.username = 'Field required';
      if (!values.password) errors.password = 'Field required';
      if (values.username && !regexExp.test(values.username)) {
        errors.username = 'Username should be an email'; 
      }
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input id="emailField" name="username" type="email"
          onChange={formik.handleChange} value={formik.values.username} />
        {formik.errors.username ? <div id="emailError" style={{color:'red'}}>
          {formik.errors.username}</div> : null}  
        <div>Password</div>
        <input id="pswField" name="password" type="text"
          onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>
          {formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit">Login</button>
      </form>
    
    </div>
  );
}

export default App;
