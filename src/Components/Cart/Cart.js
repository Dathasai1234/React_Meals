import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {

    const cartitems = <ul className={classes['cart-items']}>
        {[{id: 'c1', name: 'sushi', amount: '2', price: '12.99'}]
        .map(items => <li>{items.name}</li>)}
        </ul>

    return <Modal onCloseCart = {props.onHideCart}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <div>35.62</div>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;