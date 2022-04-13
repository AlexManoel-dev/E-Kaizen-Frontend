import React from 'react';
import { Container } from './style';
import { cardsData } from "../../../assets/data/cardsData";

export default function Card({ name, title, subtitle }){
    return(
        <Container>
            <ion-icon name={name}  />
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button>Ver mais</button>
        </Container>
    );
};