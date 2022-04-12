import React from 'react';

// Components
import Animation from '../../components/Animations/Computer';
import BetterPieces from '../../components/Carousel/BetterPieces';

import { carouselData } from '../../assets/data/carouselData';

export default function Index(){
    return(
        <>
            <Animation />
            <BetterPieces data={carouselData}/>
        </>
    );
};