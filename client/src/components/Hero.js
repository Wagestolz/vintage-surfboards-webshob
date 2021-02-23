import styled from "styled-components";
import { Link } from "react-router-dom";
// import heroBcg from "../assets/hero-bcg.jpeg";
// import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
    return (
        <Wrapper className="section-center">
            <article className="content">
                <h1>
                    aloha vintage
                    <br />
                    surfhsop
                </h1>
                <p>
                    Rare surfboards, handcrafted by the some of the best shapers
                    in the world. We offer a curated collection of vintage
                    surfboards from the 60's and 70’s.
                </p>
                <Link to="/products" className="btn hero-btn">
                    shop now
                </Link>
            </article>
            <article className="img-container">
                <img src="./hero2.jpg" alt="surfboards" className="main-img" />
                <img src="./hero.jpg" alt="surfboards" className="accent-img" />
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    min-height: 60vh;
    display: grid;
    place-items: center;
    .img-container {
        display: none;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin-bottom: 2rem;
        color: var(--clr-primary-4);
        font-size: 1rem;
    }
    @media (min-width: 992px) {
        height: calc(100vh - 5rem);
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        h1 {
            margin-bottom: 2rem;
        }
        p {
            font-size: 1.25rem;
        }
        .hero-btn {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
        }
        .img-container {
            display: block;
            position: relative;
        }
        .main-img {
            width: 100%;
            height: 550px;
            position: relative;
            border-radius: var(--radius);
            display: block;
            object-fit: cover;
        }
        .accent-img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 250px;
            transform: translateX(-50%);
            border-radius: var(--radius);
        }
        .img-container::before {
            content: "";
            position: absolute;
            width: 10%;
            height: 80%;
            background: var(--hawaii-yellow);
            bottom: 0%;
            left: -8%;
            border-radius: var(--radius);
        }
    }
`;

export default Hero;
