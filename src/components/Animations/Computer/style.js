import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
    background-color: var(--dark-green);
    position: relative;
    top: 0;
`;

// const cor_fonte = keyframes`
//     0,100%{color: #0ff}
//     25%{color: #f0f}
// `;

// export const Animation = styled.div`
//     width: 600px;
//     height: 300px;
//     border: 1px solid red;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     animation-duration: 8s;
//     animation-name: ${cor_fonte};
//     animation-iteration-count: infinite;

//     p {
//         font-size: 28px;
//         color: var(--olive-green);
//     }
// `;
