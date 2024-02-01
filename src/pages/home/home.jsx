import React, { useEffect, useState } from "react";
import s from './home.module.css';


const Home = () => {
    // imágenes del carrusel, UNO solamente debe tener current=true 
    // si NINGUNO es current=true el carrusel se mostrará vacío al inicio!!!!
    // las imágenes deben ser de fondo transparente para que se vean más bonitas
    const [imagesCaroussel, setImagesCaroussel] = useState([
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

    const modifyCaroussel = (sig) => {
        setImagesCaroussel((prevIm) => prevIm?.map((item, i) => (
            i === sig
                ? { ...item, current: true }
                : { ...item, current: false })));
    }

    const goRigth = () => {
        var siguiente = 0;
        var longitud = imagesCaroussel?.length
        imagesCaroussel?.map((image, index) => {
            return ((image.current === true) && (siguiente = (((index + 1) < longitud) ? (index + 1) : 0)));
        });
        modifyCaroussel(siguiente)
    };

    const goLeft = () => {
        var siguiente = 0;
        var ultimo = imagesCaroussel?.length - 1
        imagesCaroussel?.map((image, index) => {
            return ((image.current === true) && (siguiente = (((index - 1) < 0) ? (index + ultimo) : (index - 1))));
        });
        modifyCaroussel(siguiente)
    };

    return (
        <div className={s.home}>
            {/* ------------section carousel------------- */}
            <section className={s.caroussel}>
                <div className={s.decorationBackground}>
                    {imagesCaroussel?.map((image, index) => {
                        return (
                            (image.current === true) && (<>
                                {console.log(image, index)}
                                <p key={index + image.text} className={s.textCaroussel}>{image?.text}</p>
                                <img key={index + image.src} className={s.imageCaroussel}

                                    src={"./images/products/" + image?.src}
                                    alt={image?.alt}
                                />
                            </>)
                        )
                    })}
                </div>
                {/* círculos de posición */}
                <div className={s.circlesPosition}>
                    <div className={s.circles}>
                        {imagesCaroussel?.map((image, index) => {
                            return (
                                (image.current === true) ?
                                    <div className={s.circleCarousselActive}></div>
                                    :
                                    <div className={s.circleCaroussel}></div>
                            )


                        })}
                    </div>
                </div>
                {/* botones */}
                <img onClick={goRigth} className={s.flechaDerecha} src="./images/svg/flecha-circular.svg" alt="" />
                <img onClick={goLeft} className={s.flechaIzquierda} src="./images/svg/flecha-circular.svg" alt="" />
            </section>

            {/* ----------------section made--------------- */}
            <section className={s.section_made}>
                <div className={s.subsection_made}>
                    <div className={s.made}>
                        <p>A tu casa</p>
                        <p> {`Con amor`}</p>
                    </div>

                    <div className={s.text}>En Cocina Amiga, elaboramos nuestros productos con recetas tradicionales,
                        transmitidas de generación en generación. Utilizamos ingredientes frescos y de temporada,
                        para garantizar un sabor único y delicioso. Nos preocupamos por nuestros clientes,
                        por eso ofrecemos un servicio de atención al cliente personalizado,
                        para que puedas resolver cualquier duda o sugerencia.
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home;