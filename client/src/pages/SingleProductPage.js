import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars,
    PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const {
        single_product_loading: loading,
        single_product_loading: error,
        single_product: product,
        getSingleProduct,
    } = useProductsContext();

    useEffect(() => {
        getSingleProduct(id);
    }, [id]);
    // useEffect(() => {
    //     if (error) {
    //         setTimeout(() => {
    //             history.push("/");
    //         }, 3000);
    //     }
    // }, [error]);

    // const { id: asin } = product;
    // const {
    //     name,
    //     price,
    //     description,
    //     stock,
    //     stars,
    //     reviews,
    //     brand,
    //     images,
    // } = product.fields;

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    if (product.fields) {
        return (
            <Wrapper>
                <PageHero title={product.fields.name} product />
                <div className="section section-center page">
                    <Link to="/products" className="btn">
                        back to products
                    </Link>
                    <div className="product-center">
                        <ProductImages images={product.fields.image} />
                        <section className="content">
                            <h2>{product.fields.name}</h2>
                            <Stars />
                            <h5 className="price">
                                {formatPrice(product.fields.price)}
                            </h5>
                            <p className="desc">{product.fields.description}</p>
                            <p className="info">
                                <span>Available : </span>
                                {product.fields.stock > 0
                                    ? "In stock"
                                    : "out of stock"}
                            </p>
                            <p className="info">
                                <span>asin : </span>
                                {product.id}
                            </p>
                            <p className="info">
                                <span>brand : </span>
                                {product.fields.brand}
                            </p>
                            <hr />
                            {product.fields.stock > 0 && <AddToCart />}
                        </section>
                    </div>
                </div>
            </Wrapper>
        );
    } else {
        return null;
    }
};

const Wrapper = styled.main`
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .price {
        color: var(--clr-primary-5);
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        span {
            font-weight: 700;
        }
    }
    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .price {
            font-size: 1.25rem;
        }
    }
`;

export default SingleProductPage;
