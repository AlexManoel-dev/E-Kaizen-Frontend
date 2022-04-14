import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { cardsData } from "../../../assets/data/cardsData";

export default function Card({ name, title, subtitle, pathname }){

    const navigate = useNavigate();

    return(
        <Container>
            <ion-icon name={name}  />
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button 
                onClick={() => {
                    navigate({
                        pathname: `${pathname}`
                    })
                }}
            >Ver mais</button>
        </Container>
    );
};