import styled from "styled-components";

export const Container = styled.div`
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    height: 100vh;
    background-color: var(--kombu-green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid purple; */
`;

export const Carousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`;

export const Images = styled.div`
    opacity: ${(props) => (props.index === props.current ? 1 : 0)};
    transition-duration: ${(props) => (props.index === props.current ? "1s" : "1s ease")};
    transform: ${(props) => (props.index === props.current ? "scale(1.08)" : "")};

    img {
        width: 500px;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
        /* border: 1px solid green; */
    }
`;

export const Titulo = styled.h1`
    padding-bottom: 100px;;
`;