import classes from './CartButton.module.css';
import {useDispatch , useSelector} from 'react-redux';
import {toggle } from '../../store/CartSlice'

const CartButton = () => {

  const array = useSelector(state => state.cart.items)
  const totalItems = array.length
  const dispatch = useDispatch();
  const toggleHandler = ()=>{
    dispatch(toggle())
  }
  
  return (
    <button onClick={toggleHandler}  className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
