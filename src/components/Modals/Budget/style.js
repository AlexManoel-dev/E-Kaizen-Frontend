import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 23;
`;

export const ModalContent = styled.div`
    width: 500px;
    height: 60%;
    margin: 0 auto;
    background: #FFF;
    border-radius: 0.25rem;
    box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    position: relative;
`;

export const Form = styled.form`
    width: 100%;
    text-align: center;

    h3 {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }   
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    /* border: 1px solid red; */

    label{
        font-weight: bold;
    }

    input{
        height: 30px;
        border-radius: 7px;
        border: 1px solid;
        margin-bottom: 15px;
        padding: 10px;
        text-align: center;
    }
`;

export const Submit = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 7px;
    cursor: pointer;
    border: 1px solid black;
    margin-top: 40px;
    font-weight: bold;
    &:hover{
        opacity: 0.5;
    }
`;