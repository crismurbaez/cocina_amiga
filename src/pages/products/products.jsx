import React, { useState } from "react";
import s from "./products.module.css";
import Carousel from "../../components/carousel/carousel";

const Products = () => {
    const [imagesProducts, setImagesProducts] = useState([
        {
            name: "Choco Cake",
            src: "choco-cake-nueces-transp.png",
            alt: "torta de chocolate con nueces",
            text: "Esta choco cake es una bomba de delicias!!",
            price: 3500,
        },
        {
            name: "Red Velvet",
            src: "red-velvet-removebg.png",
            alt: "torta red velvet",
            text: "Torta red velvet de frutos rojos.",
            price: 2450,
        },
        {
            name: "Merengue Cake",
            src: "merengue-cake-removebg.png",
            alt: "torta de merengue",
            text: "Mi torta de merengue favorita...",
            price: 3000,
        },
        {
            name: "Tarta de Chocolate",
            src: "tarta-chocolate-removebg.png",
            alt: "tarta de chocolate",
            text: "Una rica tarta de chocolate para los mates.",
            price: 2800,
        },
        {
            name: "Tarta de frutas",
            src: "tarta-frutas-removebg.png",
            alt: "tarta de frutas",
            text: "Tarta de frutas fresca y dulce.",
            price: 4300,
        },
    ])
    return (
        <div className={s.products}>
            <div className={s.decoration_background}>
                <div className={s.intro}>
                    Ya que estás aquí, elegí uno de nuestros productos y...
                </div>
            </div>
            <section className={s.cards}>
                <h1 className={s.title_cards}>...despertá tus sentidos con un festín de sabores</h1>
                <div className={s.detail_cards}>
                    ¿Buscás algo más que una simple comida? En nuestro espacio te invitamos
                    a un viaje de placer para tus sentidos con nuestras deliciosas tortas,
                    tartas y opciones vegetarianas. Cada bocado es una explosión de sabores y
                    texturas, elaborados con ingredientes frescos y naturales que te
                    transportarán a un mundo de sensaciones.
                </div>
                <div className={s.section_cards}>
                    {imagesProducts.map((image, index) => {
                        return (
                            <div className={s.card}>
                                <img className={s.dialog} src="./images/svg/dialog2.svg" alt="dialog" />
                                <div className={s.price} $>{image.price} $</div>
                                <img className={s.image_product}
                                    src={`./images/products/${image.src}`}
                                    alt={`${image.alt}`} />
                                <div className={s.image_name}> {image.name}</div>
                                <div className={s.image_detail}>
                                    {`${image.text}`}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>
        </div>
    )
};

export default Products;