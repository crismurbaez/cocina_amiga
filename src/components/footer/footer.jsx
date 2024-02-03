import React from "react";
import { Link } from 'react-router-dom';
import s from './footer.module.css';


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container_footer}>
                <div className={s.contact_footer}>Podés encontrar a cocina amiga en:</div>
                <div className={s.container_contact}>
                    <Link to='https://www.instagram.com/tucocinaamiga/' target='blank'>
                        <img className={s.instagram} src="./images/svg/instagram.svg" alt="" />
                    </Link>
                    <Link to='https://web.whatsapp.com/' target='blank'>
                        <img className={s.whatsapp} src="./images/svg/whatsapp.svg" alt="" />
                    </Link>
                </div>
                <div className={s.contact_team}>
                    <div className={s.one_team}> Agustín Rosales
                        <div className={s.container_team}>
                            <Link to='https://www.instagram.com/agustin.rosales99/' target='blank'>
                                <img className={s.instagram} src="./images/svg/instagram.svg" alt="" />
                            </Link>
                            <Link to='https://web.whatsapp.com/' target='blank'>
                                <img className={s.whatsapp} src="./images/svg/whatsapp.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className={s.two_team}>Celeste Soria
                        <div className={s.container_team}>
                            <Link to='https://www.instagram.com/ce.soria/' target='blank'>
                                <img className={s.instagram} src="./images/svg/instagram.svg" alt="" />
                            </Link>
                            <Link to='https://web.whatsapp.com/' target='blank'>
                                <img className={s.whatsapp} src="./images/svg/whatsapp.svg" alt="" />
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={s.linea_footer}></div>
                <div className={s.data}>
                    Sitio web creado por Cristina Murguía
                </div>
                <div className={s.triangle}><img className={s.arrow_footer} src="./images/svg/arrow.svg" alt="" /></div>


            </div>
        </footer>
    )
};

export default Footer;