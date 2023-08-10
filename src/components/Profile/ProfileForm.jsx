import classes from './ProfileForm.module.css';
import { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {changePass} from '../../store/AuthSlice'

const ProfileForm = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.idToken)
  const [password ,setPassword] = useState("")
  const onSubmit = (e)=>{
    e.preventDefault();
    
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAlQ0NuH41NbVAe86XopUWAvoL_zwLmpWg",{
      method: "POST",
      body: JSON.stringify({
        idToken:token,
        password,
        returnSecureToken:true
      }),
      headers:{
        "Content-Type": "application/json"
      }
    }).then((data)=>(data.json()))
    .then((data)=>{
      
      dispatch(changePass({idToken: data.idToken}))
    })
  }

  const handleChange = (e)=>{
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' name='password' value={password} onChange={e=> handleChange(e)} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
