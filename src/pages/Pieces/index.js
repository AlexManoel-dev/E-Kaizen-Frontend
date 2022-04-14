import React, { useState } from 'react';
import { Container, Cards } from './style';
import Card from '../../components/Cards/Pieces';
import { cardsData } from "../../assets/data/cardsData";

export default function Pieces(){
    return(
        <Container>
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