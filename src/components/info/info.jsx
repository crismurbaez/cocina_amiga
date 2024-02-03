import React, { useState } from "react";
import s from './info.module.css';

const Info = () => {

    const [information, setInformation] = useState([
        { name: 'Delivery', image: 'delivery4.svg', alt: "delivery", information: 'Sólo en 30 minutos', link: '' },
        { name: 'Package', image: 'package-5.svg', alt: "package", information: 'Free', link: '' },
        { name: 'Discount 15%', image: 'cupcake2.svg', alt: "cupcake", information: 'Por ocasión de la apertura', link: '' }
    ])

    return (
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
    )
};

export default Info;