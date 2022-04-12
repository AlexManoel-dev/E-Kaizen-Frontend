import React, { useState } from "react";
import { Container, Carousel, Images, Titulo } from "./style";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function BetterPieces({ data }) {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    function nextImage() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    function previousImage() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <Container>
            {/* <Titulo>Título</Titulo> */}
            <Carousel>
                <FaArrowAltCircleLeft
                    style={{
                        fontSize: "3rem",
                        zIndex: "10",
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                    onClick={previousImage}
                />
                {data.map((d, i) => {
                    return (
                        <Images index={i} current={current} key={i}>
                            {i === current && <img src={d.image} alt="Error" key={i} />}
                        </Images>
                    );
                })}
                <FaArrowAltCircleRight
                    style={{
                        fontSize: "3rem",
                        zIndex: "10",
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                    onClick={nextImage}
                />
            </Carousel>
        </Container>
    );
}
