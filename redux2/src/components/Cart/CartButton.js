import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice1";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector((state) => state.cart.totalQuantity);
  const onShowCart = (e) => {
    e.preventDefault();
    dispatch(uiActions.onShowCart());
  };

  return (
    <button className={classes.button} onClick={onShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
