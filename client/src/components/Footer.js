import styled from "styled-components";
const Footer = () => {
    return (
        <Wrapper>
            <h5>
                &copy; {new Date().getFullYear()}
                <span> Vintage Surfboards</span>
            </h5>
            <h5>All rights reserved</h5>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--hawaii-yellow);
    text-align: center;
    span {
        color: var(--hawaii-red);
    }
    h5 {
        color: var(--hawaii-creme);
        margin: 0.1rem;
        font-weight: 600;
        text-transform: none;
        line-height: 1.25;
    }
    @media (min-width: 776px) {
        flex-direction: row;
    }
`;

export default Footer;
