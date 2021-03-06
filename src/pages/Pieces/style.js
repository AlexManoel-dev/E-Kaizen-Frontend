import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--dark-green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid purple; */
    @media screen and (max-width: 768px){
        height: auto;
    }

    h1{
        color: white;
        margin-bottom: 30px;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    height: 60%;
    justify-content: center;
    /* border: 1px solid red; */
`;