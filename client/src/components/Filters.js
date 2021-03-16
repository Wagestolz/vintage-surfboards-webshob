import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
    const {
        filters: {
            text,
            category,
            brand,
            color,
            min_price,
            price,
            max_price,
            shipping,
        },
        updateFilters,
        clearFilters,
        all_products,
    } = useFilterContext();

    const categories = getUniqueValues(all_products, "category");
    const brands = getUniqueValues(all_products, "brand");
    const colors = getUniqueValues(all_products, "colors");

    return (
        <Wrapper>
            <div className="content">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    {/* search input */}
                    <div className="form-control">
                        <input
                            type="text"
                            name="text"
                            placeholder="search"
                            className="search-input"
                            value={text}
                            onChange={updateFilters}
                        />
                    </div>
                    {/* end of search input */}
                    {/* categories */}
                    <div className="form-control">
                        <h5>category</h5>
                        <div>
                            {categories.map((cat, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={updateFilters}
                                        name="category"
                                        type="button"
                                        value={cat}
                                        className={
                                            category == cat.toLowerCase() &&
                                            "active"
                                        }
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* end of categories */}
                    {/* brands  */}
                    <div className="form-control">
                        <h5>brand</h5>
                        <select
                            name="brand"
                            value={brand}
                            onChange={updateFilters}
                            className="company"
                        >
                            {brands.map((brd, idx) => {
                                return (
                                    <option
                                        key={idx}
                                        onClick={updateFilters}
                                        value={brd}
                                    >
                                        {brd}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    {/* end of brands  */}
                    {/* colors  */}
                    <div className="form-control">
                        <h5>colors</h5>
                        <div className="colors">
                            {colors.map((col, idx) => {
                                if (col === "all") {
                                    return (
                                        <button
                                            name="color"
                                            onClick={updateFilters}
                                            value="all"
                                            className={`${
                                                color === "all"
                                                    ? "all-btn active"
                                                    : "all-btn"
                                            }`}
                                        >
                                            all
                                        </button>
                                    );
                                }
                                return (
                                    <button
                                        key={idx}
                                        name="color"
                                        style={{ background: col }}
                                        className={`${
                                            color === col
                                                ? "color-btn active"
                                                : "color-btn"
                                        }`}
                                        // data-color={col}
                                        value={col}
                                        onClick={updateFilters}
                                    >
                                        {color == col && <FaCheck />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* end of colors  */}
                    {/* price  */}
                    <div className="form-control">
                        <h5>price</h5>
                        <p className="price">{formatPrice(price)}</p>
                        <input
                            type="range"
                            name="price"
                            onChange={updateFilters}
                            value={price}
                            min={min_price}
                            max={max_price}
                        />
                    </div>
                    {/* end of price  */}
                    {/* shipping  */}
                    <div className="form-control shipping">
                        <label htmlFor="shipping">free shipping</label>
                        <input
                            type="checkbox"
                            name="shipping"
                            id="shipping"
                            onChange={updateFilters}
                            checked={shipping}
                        />
                    </div>
                    {/* end of shipping  */}
                </form>
                <button
                    type="button"
                    className="clear-btn"
                    onClick={clearFilters}
                >
                    clear filters
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1.25rem;
        h5 {
            margin-bottom: 0.5rem;
        }
    }
    .search-input {
        padding: 0.5rem;
        background: var(--clr-grey-10);
        color: var(--clr-primary-4);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
    }
    .search-input::placeholder {
        text-transform: capitalize;
    }
    button {
        display: block;
        margin: 0.25em 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        letter-spacing: var(--spacing);
        color: var(--clr-primary-4);
        cursor: pointer;
    }
    .active {
        border-color: var(--hawaii-red);
    }
    .company {
        background: var(--clr-grey-10);
        color: var(--clr-primary-4);
        border-radius: var(--radius);
        border-color: transparent;
        padding: 0.25rem;
    }
    .colors {
        display: flex;
        align-items: center;
    }
    .color-btn {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #222;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.7;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 0.5rem;
            color: var(--clr-white);
        }
    }
    .all-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        opacity: 0.5;
    }
    .active {
        opacity: 1;
    }
    .all-btn .active {
        text-decoration: underline;
    }
    .price {
        margin-bottom: 0.25rem;
    }
    label {
        color: var(--clr-primary-4);
    }
    .shipping {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-transform: capitalize;
        column-gap: 0.5rem;
        font-size: 1rem;
    }
    .clear-btn {
        background: var(--hawaii-red);
        color: var(--clr-white);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`;

export default Filters;
