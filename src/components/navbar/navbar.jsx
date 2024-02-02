import { React, useState } from "react";
import { Link } from 'react-router-dom';
import s from './navbar.module.css';

const Navbar = () => {

    // hacer responsive, ello conlleva a confeccionar el menú lateral
    // creo que hay elementos UI que react utiliza, es conveniente estos para que sea más rápido??

    // VER OTRAS FORMAS DE POSICIONAR el logo superpuesto, creo que con los pseudo elementos de CSS como ::after...

    // Es conveniente que la cantidad de elementos del menú sea par para que el logo quede centrado
    // se podría ejecutar un algoritmo para que coloque el logo al constado
    //  cuando la cantidad de elementos es impar o que deje un espacio vacío,
    //  o que invente algo para el final, funciona igual pero queda descentrado

    const [navigation, setNavigation] = useState([
        { name: 'Inicio', link: '/', current: true, },
        { name: 'Tortas', link: '/cakes', current: false, },
        { name: 'Cupcakes', link: '/cupcakes', current: false, },
        { name: 'Novedades', link: '/news', current: false, },
        { name: 'Galería', link: '/gallery', current: false, },
        { name: 'Contacto', link: '/contact', current: false, },
    ])

    const navbarClick = (index) => {
        setNavigation((prevNav) => prevNav?.map((item, i) => (
            i === index
                ? { ...item, current: true }
                : { ...item, current: false })));
    };

    return (
        <nav >
            <div className={s.navbar}>

                {navigation?.map((nav, index) => {
                    return (
                        // Analiza cuando el menú llega hasta la mitad de elementos
                        (index !== Math.floor(navigation.length / 2)) ?
                            <div key={index + 1} className={[nav.current ? s.active : s.link]} >
                                {/* En el console.log están las dos formas de escribir el classname 
                                {console.log([nav.current ? s.active : s.link], `${nav.current ? s.active : s.link}`)} */}
                                <Link
                                    name={nav.name}
                                    onClick={(e) => navbarClick(index, e.target)}
                                    className={[nav.current ? s.active : s.link]}
                                    to={nav.link}>

                                    {nav.name}
                                </Link>
                            </div>
                            :
                            <>
                                {/* Coloca el logo y el siguiente elemento en el centro 
                                cuando el menú tenga la mitad elementos. */}
                                <div key={'logo'}>
                                    <img className={s.logo} src="./images/logo.jpg" alt="" />
                                </div>
                                <div key={index + 1} className={[nav.current ? s.active : s.link]} >
                                    <Link

                                        name={nav.name}
                                        onClick={(e) => navbarClick(index, e.target)}
                                        className={[nav.current ? s.active : s.link]}
                                        to={nav.link}>

                                        {nav.name}
                                    </Link>
                                </div>
                            </>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar;