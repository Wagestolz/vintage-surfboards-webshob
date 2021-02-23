import styled from "styled-components";
import axios from "../utils/axios";
import { useState } from "react";

const Contact = () => {
    const [subscriber, setSubscriber] = useState("");

    const handleChange = (e) => {
        setSubscriber({
            [e.target.name]: e.target.value,
        });
    };
    const handleClick = (e) => {
        e.preventDefault();
        axios
            .post("/subscribe", subscriber)
            .then((res) => {
                console.log("subscribed successfully:", res);
                setSubscriber(null);
            })
            .catch((err) => {
                console.log("error at POST /subscriber", err);
            });
    };
    return (
        <Wrapper>
            <div className="section-center">
                <h3>Join our newsletter and get 15% off</h3>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem fugiat omnis minus nihil mollitia vel repudiandae
                        cumque provident doloremque nam.
                    </p>
                    <form className="contact-form">
                        <input
                            type="email"
                            className="form-input"
                            placeholder="enter email"
                            name="email"
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="submit-btn"
                            onClick={handleClick}
                        >
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    padding: 5rem 0;
    h3 {
        text-transform: none;
    }
    p {
        line-height: 2;
        max-width: 45em;
        color: var(--clr-primary-4);
    }
    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr auto;
    }
    .form-input,
    .submit-btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 2px solid var(--clr-primary-4);
    }
    .form-input {
        border-right: none;
        color: var(--clr-primary-4);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }
    .submit-btn {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    .form-input::placeholder {
        color: var(--clr-primary-4);
        text-transform: capitalize;
    }
    .submit-btn {
        background: var(--hawaii-red);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: var(--transition);
        color: var(--hawaii-creme);
    }
    .submit-btn:hover {
        color: var(--hawaii-red);
        background: var(--hawaii-yellow);
    }
    @media (min-width: 992px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 8rem;
            margin-top: 2rem;
        }
        p {
            margin-bottom: 0;
        }
    }
    @media (min-width: 1280px) {
        padding: 15rem 0;
    }
`;

export default Contact;
