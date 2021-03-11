import ReactDOM from "react-dom";
import "../style.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
// import { CartProvider } from "./context/cart_context";
// import { UserProvider } from "./context/user_context";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <ProductsProvider>
        <FilterProvider>
            <App />
        </FilterProvider>
    </ProductsProvider>,
    document.querySelector("main")
);
