import { useState } from 'react';
import { useFormik } from 'formik'
import Schema from '../../schema/index';
import {login} from '../../store/AuthSlice'
import {useDispatch ,useSelector} from 'react-redux'

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [sub, setSub] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(state=> state.auth)
  console.log(state)

  const onSubmit = (values, actions) => {
    setSub(true)
    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlQ0NuH41NbVAe86XopUWAvoL_zwLmpWg"

    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlQ0NuH41NbVAe86XopUWAvoL_zwLmpWg"
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => (
        data.json()
      ))
      .then((data) => {
        if (data.error) {
          actions.setErrors({message: data.error.message})
        } else {
          console.log(data)
          dispatch(login({idToken:data.idToken}))
        }
      })

    console.log("onSubmit")
    actions.setSubmitting(false)
  }

  const { handleBlur, handleSubmit, handleChange, isSubmitting, touched, values, errors, } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Schema,
    onSubmit
  })

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };




  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {sub && errors.message &&  <p>{errors.message}</p>}
      {sub && console.log(errors.message)}
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' className={errors.email && touched.password ? "input-error" : " "} value={values.email} onChange={handleChange} onBlur={handleBlur} required />
          {touched.email && errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' className={errors.password && touched.password ? "input-error" : " "} value={values.password} onChange={handleChange} onBlur={handleBlur} required />
          {touched.password && errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className={classes.actions}>
          <button disabled={isSubmitting} type='submit' >{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
