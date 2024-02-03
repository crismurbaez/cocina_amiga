import React, { useEffect, useState, useRef } from "react";
import s from './carousel.module.css';


const Carousel = () => {
    // imágenes del carrusel, UNO solamente debe tener current=true 
    // si NINGUNO es current=true el carrusel se mostrará vacío al inicio!!!!
    // las imágenes deben ser de fondo transparente para que se vean más bonitas
    const autoplay = useRef();
    const [isAnimating, setIsAnimating] = useState(true);
    const [imagesCarousel, setImagesCarousel] = useState([
        {
            src: "choco-cake-nueces-transp.png",
            alt: "torta de chocolate con nueces",
            text: "Esta choco cake es una bomba de delicias!!",
            current: true,
        },
        {
            src: "red-velvet-removebg.png",
            alt: "torta red velvet",
            text: "Torta red velvet de frutos rojos.",
            current: false,
        },
        {
            src: "merengue-cake-removebg.png",
            alt: "torta de merengue",
            text: "Mi torta de merengue favorita...",
            current: false,
        },
        {
            src: "tarta-chocolate-removebg.png",
            alt: "tarta de chocolate",
            text: "Una rica tarta de chocolate para los mates.",
            current: false,
        },
        {
            src: "tarta-frutas-removebg.png",
            alt: "tarta de frutas",
            text: "Tarta de frutas fresca y dulce.",
            current: false,
        },
    ])
    const modifyCarousel = (index) => {
        setImagesCarousel((prevIm) => prevIm?.map((item, i) => (
            i === index
                ? { ...item, current: true }
                : { ...item, current: false })));
    }

    const goRigth = () => {
        var siguiente = 0;
        var longitud = imagesCarousel?.length
        imagesCarousel?.map((image, index) => {
            return ((image.current === true) && (siguiente = (((index + 1) < longitud) ? (index + 1) : 0)));
        });
        modifyCarousel(siguiente)
    };

    const goLeft = () => {
        var siguiente = 0;
        var ultimo = imagesCarousel?.length - 1
        imagesCarousel?.map((image, index) => {
            return ((image.current === true) && (siguiente = (((index - 1) < 0) ? (index + ultimo) : (index - 1))));
        });
        modifyCarousel(siguiente)
    };

    const circleCaroussel = (index) => {
        modifyCarousel(index);
    }

    const pauseTimer = () => {
        setIsAnimating(false);
    };

    const playTimer = () => {
        setIsAnimating(true);
    };
    // eslint-disable-next-line no-unused-expressions
    useEffect(() => {
        if (isAnimating) {
            clearTimeout(autoplay.current);
            autoplay.current = setTimeout(() => {
                goRigth();
            }, 3000);
        }
    }), ([isAnimating]);

    return (<section className={s.section_carousel}>
        <div className={s.decorationBackground}>
            {imagesCarousel?.map((image, index) => {
                return (
                    (image.current === true) && (<>
                        <p key={index + image.text} className={s.textCarousel}>{image?.text}</p>
                        <img key={index + image.src} className={s.imageCarousel}
                            src={"./images/products/" + image?.src}
                            alt={image?.alt}
                        />
                    </>)
                )
            })}
        </div>
        {/* círculos de posición */}
        <div className={s.circlesPositionFlex}>
            <div className={s.circlesPosition}>

                <div className={s.circles}>
                    {imagesCarousel?.map((image, index) => {
                        return (
                            (image.current === true) ?
                                <div
                                    key={index.toString()}
                                    onMouseEnter={pauseTimer}
                                    onMouseLeave={playTimer}
                                    onClick={() => circleCaroussel(index)}
                                    className={s.circleCarouselActive}></div>
                                :
                                <div
                                    className={s.circleCarousel}
                                    key={index.toString()}
                                    onMouseEnter={pauseTimer}
                                    onMouseLeave={playTimer}
                                    onClick={() => circleCaroussel(index)}
                                ></div>
                        )
                    })}
                </div>
            </div>
        </div>
        {/* botones */}
        <img
            className={s.flechaDerecha}
            onMouseEnter={pauseTimer}
            onMouseLeave={playTimer}
            onClick={goRigth}

            src="./images/svg/flecha-circular.svg"
            alt="" />
        <img
            onMouseEnter={pauseTimer}
            onMouseLeave={playTimer}
            onClick={goLeft}
            className={s.flechaIzquierda}
            src="./images/svg/flecha-circular.svg"
            alt="" />
    </section>
    )
};

export default Carousel;