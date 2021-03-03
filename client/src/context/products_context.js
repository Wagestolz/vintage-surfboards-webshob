import axios from "../utils/axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN });
    };
    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE });
    };

    const getSingleProduct = (id) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        axios
            .get(`/getproduct/${id}`)
            .then(({ data }) => {
                // console.log("data single Product: ", data);
                dispatch({
                    type: GET_SINGLE_PRODUCT_SUCCESS,
                    payload: data[0],
                });
            })
            .catch((err) => {
                dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: err });
            });
    };

    useEffect(() => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        axios
            .get("/getproducts")
            .then(({ data }) => {
                console.log("data all products: ", data);
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
            })
            .catch((err) => {
                dispatch({ type: GET_PRODUCTS_ERROR, payload: err });
            });
    }, []);

    return (
        <ProductsContext.Provider
            value={{ ...state, openSidebar, closeSidebar, getSingleProduct }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
// make sure use
export const useProductsContext = () => {
    return useContext(ProductsContext);
};
