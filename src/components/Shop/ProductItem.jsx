/* eslint-disable react/prop-types */
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { addItem } from '../../store/CartSlice'

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;


  const handleClick = () => {
    dispatch(addItem({id, title, price, description , quantity:1}))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
