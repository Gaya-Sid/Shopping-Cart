// Components
import CartItem from "../CartItem/CartItem";

// Types
import { CartItemType } from "../App";

// Styles
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : null}
      {cartItems.map(item => (
        <CartItem />
      ))}
    </Wrapper>
  );
};

export default Cart;
