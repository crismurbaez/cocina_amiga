import React from "react";
import s from './made.module.css';

const Made = () => {
    return (
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
    )
}

export default Made;