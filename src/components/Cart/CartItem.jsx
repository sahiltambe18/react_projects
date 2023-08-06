/* eslint-disable react/prop-types */
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../store/CartSlice'

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addItem({ title, quantity, price, id }))
  }
  const remove = () => {
    dispatch(removeItem({ id }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={remove} >-</button>
          <button onClick={add} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
