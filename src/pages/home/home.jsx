import React, { useEffect, useState, useRef } from "react";
import s from './home.module.css';
// PARA HACER!!!!
// Hacer una sección de administración para dar el alta de toda la información.
// separar todo en componentes

const Home = () => {
    // imágenes del carrusel, UNO solamente debe tener current=true 
    // si NINGUNO es current=true el carrusel se mostrará vacío al inicio!!!!
    // las imágenes deben ser de fondo transparente para que se vean más bonitas
    const autoplay = useRef();
    const [isAnimating, setIsAnimating] = useState(true);
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

    const [information, setInformation] = useState([
        { name: 'Delivery', image: 'delivery4.svg', alt: "delivery", information: 'Sólo en 30 minutos', link: '' },
        { name: 'Package', image: 'package-5.svg', alt: "package", information: 'Free', link: '' },
        { name: 'Discount 15%', image: 'cupcake2.svg', alt: "cupcake", information: 'Por ocasión de la apertura', link: '' }
    ])

    const modifyCaroussel = (index) => {
        setImagesCaroussel((prevIm) => prevIm?.map((item, i) => (
            i === index
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

    const circleCaroussel = (index) => {
        modifyCaroussel(index);
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

    return (
        <div className={s.home}>
            {/* ------------section carousel------------- */}
            <section className={s.section_caroussel}>
                <div className={s.decorationBackground}>
                    {imagesCaroussel?.map((image, index) => {
                        return (
                            (image.current === true) && (<>
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
                                    <div
                                        key={index.toString()}
                                        onMouseEnter={pauseTimer}
                                        onMouseLeave={playTimer}
                                        onClick={() => circleCaroussel(index)}
                                        className={s.circleCarousselActive}></div>
                                    :
                                    <div
                                        className={s.circleCaroussel}
                                        key={index.toString()}
                                        onMouseEnter={pauseTimer}
                                        onMouseLeave={playTimer}
                                        onClick={() => circleCaroussel(index)}
                                    ></div>
                            )
                        })}
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

            {/* -----------section information ------------------------ */}
            <section className={s.section_information}>
                <div className={s.cards}>
                    {
                        information.map((inf, index) => {
                            return (
                                <div className={`
                                    ${s.card} 
                                    ${index % 2 === 0
                                        ? s.odd_card
                                        : s.even_card}
                                        `}>
                                    <div className={`
                                        ${s.circle_card} 
                                        ${index % 2 === 0
                                            ? s.odd_circle
                                            : s.even_circle}
                                            `}>
                                        <img
                                            className={s.imageCard}
                                            src={"./images/svg/" + inf.image}
                                            alt={inf.alt} />
                                    </div>
                                    <div className={`
                                        ${s.name}
                                        ${index % 2 === 0
                                            ? s.odd_name
                                            : s.even_name}
                                            `}>{inf.name}</div>
                                    <div className={`
                                        ${s.information}
                                            ${index % 2 === 0
                                            ? s.odd_info
                                            : s.even_info}
                                        }`}>{inf.information}</div>
                                    <button className={`
                                        ${s.read_more}
                                        ${index % 2 === 0
                                            ? s.odd_read
                                            : s.even_read}
                                        `}>Leer más</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* ---------section our team ------------------ */}
            <section className={s.section_team}>
                <div className={s.titulo_team}>Nuestro equipo</div>
                <div className={s.body_team}>
                    <div className={s.info_team} ><img className={s.img_team} src="./images/team/agustin_rosales.jpg" alt="Agustín Rosales" />
                        <p className={s.name_team}>Agustín Rosales</p>
                        <p className={s.detail_team}>Chef</p>
                    </div>
                    <div className={s.info_team}><img className={s.img_team} src="./images/team/celeste_soria.jpg" alt="Celeste Soria" />
                        <p className={s.name_team}>Celeste Soria</p>
                        <p className={s.detail_team}>Lic. en Turismo</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;