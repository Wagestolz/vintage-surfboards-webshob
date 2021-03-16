import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";

const CartButtons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_items } = useCartContext();
    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">{total_items}</span>
                </span>
            </Link>
            <button type="button" className="auth-btn" onClick={closeSidebar}>
                Login <FaUserPlus />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;
    .cart-btn {
        color: var(--hawaii-red);
        font-family: var(--ff-heading);
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
        display: flex;
        align-items: center;
    }
    .cart-container {
        display: flex;
        align-items: center;
        position: relative;
        svg {
            height: 1.6rem;
            margin-left: 5px;
        }
    }
    .cart-value {
        position: absolute;
        font-family: var(--ff-heading);
        top: -10px;
        right: -16px;
        background: var(--hawaii-yellow);
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: var(--hawaii-red);
        padding: 12px;
    }
    .auth-btn {
        display: flex;
        font-family: var(--ff-heading);
        align-items: center;
        background: transparent;
        border-color: transparent;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--hawaii-red);
        letter-spacing: var(--spacing);
        svg {
            margin-left: 5px;
        }
    }
`;
export default CartButtons;
