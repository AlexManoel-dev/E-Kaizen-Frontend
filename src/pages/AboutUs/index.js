import React from "react";
import { Container, About, Text, Contact } from './style';

export default function AboutUs(){
    return(
        <Container>
            <About>
                <Text>
                    <h1>Sobre nós</h1>
                    <h4>Somos uma startup que tem como objetivo selecionar as melhores peças de computadores de mercado e revendê-las, facilitando assim a vida do usuário!</h4>
                </Text>
                <Contact>
                    <ion-icon name="mail-outline" />
                    <ion-icon name="logo-instagram" />
                    <ion-icon name="logo-facebook" />
                </Contact>
            </About>
        </Container>
    );
};