import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--dark-green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`;

export const About = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas: 't'
                         'c';
    width: 60%;
    height: 50%;
    /* border: 1px solid purple; */
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    grid-area: t;
    /* border: 1px solid pink; */
    color: white;
    padding: 20px;

    h1{
        margin-bottom: 30px;
    }
`;

export const Contact = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    grid-area: c;
    /* border: 1px solid blue; */
    color: white;

    ion-icon{
        font-size: 50px;
        cursor: pointer;
    }
`;