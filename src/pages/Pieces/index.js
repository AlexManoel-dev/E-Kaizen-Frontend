import React, { useState } from 'react';
import { Container, Cards } from './style';
import Card from '../../components/Cards/Pieces';
import { cardsData } from "../../assets/data/cardsData";

export default function Pieces(){
    return(
        <Container>
            <h1>Peças</h1>
            <Cards>
                {cardsData.map((c,i) => (
                    <Card
                        key={i} 
                        name={c.name}
                        title={c.title}
                        subtitle={c.subtitle}
                        pathname={c.pathname}
                    />
                ))}
            </Cards>
        </Container>
    );
};