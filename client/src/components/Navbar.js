import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
// import { useUserContext } from '../context/user_context'

const Nav = () => {
    const { openSidebar } = useProductsContext();
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src="./logo.png" alt="Vintage" />
                    </Link>
                    <button
                        type="button"
                        className="nav-toggle"
                        onClick={openSidebar}
                    >
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}
                </ul>
                <CartButtons />
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 175px;
            margin-left: -15px;
        }
    }
    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--hawaii-red);
        cursor: pointer;
        svg {
            font-size: 2rem;
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }
    @media (min-width: 992px) {
        .nav-toggle {
            display: none;
        }
        .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            li {
                margin: 0 0.5rem;
            }
            a {
                color: var(--hawaii-red);
                font-size: 1.3rem;
                text-transform: capitalize;
                font-family: var(--ff-heading);
                letter-spacing: var(--spacing);
                padding: 0.5rem;
                &:hover {
                    border-bottom: 2px solid var(--hawaii-darkblue);
                }
            }
        }
        .cart-btn-wrapper {
            display: grid;
        }
    }
`;

export default Nav;
