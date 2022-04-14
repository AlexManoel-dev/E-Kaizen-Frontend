import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    overflow: hidden;
    box-shadow: 0px 0px 15px -5px;
    border-radius: 10px;
    background-color: var(--kombu-green);
    margin: 8px;

    ion-icon {
        font-size: 64px;
        color: var(--olive-green);
        margin-bottom: 20px;
    }

    h2{
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 30px;
    }

    button{
        background-color: var(--kombu-green);
        border-radius: 10px;
        width: 100px;
        height: 50px;
        font-family: "Arial";
        font-weight: bold;
        border: 1px solid;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
            /* transform: translateY(-5px);
            transition: transform 150ms linear; */
        }
    }
`;