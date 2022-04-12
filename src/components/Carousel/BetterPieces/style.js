import styled from "styled-components";

export const Container = styled.div`
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    height: 100vh;
    background-color: #403e3e;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Carousel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: auto;
    border: 1px solid red;
`;

export const Images = styled.div`
    width: 100px;
    height: 100px;
    opacity: ${(props) => (props.index === props.current ? 1 : 0)};
    transition-duration: ${(props) => (props.index === props.current ? "1s" : "1s ease")};
    transform: ${(props) => (props.index === props.current ? "scale(1.08)" : "")};

    img {
        object-fit: cover;
        border: 1px solid green;
    }
`;
