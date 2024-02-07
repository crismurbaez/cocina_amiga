import React from "react";
import s from "./products.module.css";
import Carousel from "../../components/carousel/carousel";

const Products = () => {
    return (
        <div className={s.products}>

            <Carousel></Carousel>
            <section className={s.cards}>
                <h1 className={s.title_cards}>Despertá tus sentidos con un festín de sabores</h1>
                <div className={s.detail_cards}>
                    ¿Buscás algo más que una simple comida? En nuestro espacio te invitamos
                    a un viaje de placer para tus sentidos con nuestras deliciosas tortas,
                    tartas y opciones vegetarianas. Cada bocado es una explosión de sabores y
                    texturas, elaborados con ingredientes frescos y naturales que te
                    transportarán a un mundo de sensaciones.
                </div>
                <div className={s.card}>

                </div>
            </section>
        </div>
    )
};

export default Products;