import React from "react";
import s from './team.module.css';

const Team = () => {
    return (
        <section className={s.section_team}>
            <div className={s.container_team}>
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
            </div>
        </section>
    )
};

export default Team;