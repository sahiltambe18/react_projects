import { Link } from 'react-router-dom';
import { logout } from '../../store/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLoggedin)
  const state = useSelector(state => state.auth)

  console.log(state)

  const logOutHandler = ()=>{
    dispatch(logout)
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          {!isLogged &&
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {isLogged &&
            <li>
              <button onClick={logOutHandler} >Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
