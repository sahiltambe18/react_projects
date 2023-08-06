import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'

const Cart = () => {

  const items = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const len = items.length
  
  return (
    <Card className={classes.cart}>
      {/* <h2>Your Shopping Cart</h2> */}
      <ul>
        {len>0 && 
          items.map(item => <CartItem key={item.id} item={{...item}} />)
        }
      </ul>
      {len>0 ? <h1>Total : {totalPrice}</h1> : <h2>Your Cart is Empty</h2>}
      
    </Card>
  );
};

export default Cart;
