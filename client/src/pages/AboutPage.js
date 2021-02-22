import styled from "styled-components";
import { PageHero } from "../components";

const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />
            <Wrapper className="page section section-center">
                <img src="./about.jpg" alt="evolution of surfboards" />
                <article>
                    <div className="title">
                        <h2>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam fugit quas suscipit quo libero, iusto odit eum
                        quia blanditiis? Harum neque, dolore maxime fuga eos
                        quas amet facere ut? Quis incidunt deserunt modi
                        provident repudiandae iusto voluptas aut minus nisi quos
                        voluptatum quod alias, dolor vitae eius esse perferendis
                        molestias quia! Quos dolorem animi quae esse
                        perferendis, expedita provident iste.
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 500px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: auto 0;
        margin-top: 2rem;
        color: var(--clr-primary-4);
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;
export default AboutPage;
