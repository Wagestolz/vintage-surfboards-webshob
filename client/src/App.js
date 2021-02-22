import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
    About,
    Home,
    Products,
    SingleProduct,
    Cart,
    Error,
    Checkout,
    PrivateRoute,
} from "./pages";
import styled from "styled-components";

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route
                    exact
                    path="/products/:id"
                    children={<SingleProduct />}
                ></Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
                <Route exact path="*">
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
