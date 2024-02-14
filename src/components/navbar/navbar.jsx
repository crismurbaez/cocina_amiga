import { React, useEffect, useState } from "react";

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
        { name: 'Nosotros', link: '/about', current: false, },
        { name: 'Productos', link: '/products', current: false, },
        { name: 'Novedades', link: '/news', current: false, },
        { name: 'Contacto', link: '/contact', current: false, },
        { name: 'Usuario', link: '/users', current: false, },
    ])
    const body = document.body;
    //condicional de abrir o cerrar menu mobile
    const [isOpen, setIsOpen] = useState(false);
    // al hacer scroll se modifica el tamaño del logo
    const [prevScrollPos, setPrevScrollPos] = useState(document.documentElement.scrollTop);


    const navbarClick = (index, event) => {
        console.log(index);
        setNavigation((prevNav) => prevNav?.map((item, i) => (
            i === index
                ? { ...item, current: true }
                : { ...item, current: false })));
        body.style.overflow = 'scroll';
        setIsOpen(false);
    };

    const closeMenu = (event) => {
        if (event.button === 0) {
            body.style.overflow = 'scroll';
            setIsOpen(false);
        }
    };

    const openMenu = () => {
        body.style.overflow = 'hidden';
        setIsOpen(true)
    };

    const handleScroll = () => {
        const currentScrollPos = document.documentElement.scrollTop;
        // setIsOpen(false);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={s.container_navbar}>
            <div >
                {/* menu mobile */}
                <div className={s.mobile}>
                    <div className={s.position_menu}>
                        <div onClick={() => openMenu()} className={s.menu_hamburger}>
                            <div className={s.menu_image}></div>
                            <div className={s.menu_image}></div>
                            <div className={s.menu_image}></div>
                        </div>
                    </div>

                    <div
                        onClick={closeMenu}
                        style={{ display: isOpen ? 'flex' : 'none' }}
                        className={s.back_sidebar}
                    >
                    </div>
                    <div
                        style={{
                            transform: isOpen ? 'translateX(0)' : 'translateX(-200%)',
                        }}
                        className={s.container_sidebar}>
                        <div className={s.sidebar}
                        >

                            <img onClick={closeMenu} className={s.arrow_menu} src="./images/svg/arrow-left.svg" alt="" />

                            {navigation.map((nav, index) => {
                                return (
                                    <div className={s.container_element_menu}>
                                        <div
                                            key={index + 1} className={[nav.current ? s.active_mobile : s.link]} >
                                            <Link
                                                name={nav.name}
                                                onClick={(e) => navbarClick(index, e.target)}
                                                className={[nav.current ? s.active_mobile : s.link]}
                                                to={nav.link}>
                                                {nav.name}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                            {/* agrego este div como espacio inferior
                            ya que no lo agrega al container principal 
                            al colocarle un paddig-bottom
                            */}
                            <div className={s.link}></div>
                        </div>
                    </div>


                    <div key={'logo'}>
                        <img style={{ display: prevScrollPos === 0 ? 'flex' : 'none' }} className={s.logo} src="./images/logo.jpg" alt="" />
                    </div>
                </div>
                {/* menu desktop */}
                <dir className={s.desktop}>
                    <div
                        style={{
                            backgroundColor: prevScrollPos === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.8)',
                        }}
                        className={s.navbar}>
                        {navigation?.map((nav, index) => {
                            return (
                                // Analiza cuando el menú llega hasta la mitad de elementos
                                (index !== Math.floor(navigation.length / 2)) ?
                                    <div key={index + 1} className={[nav.current ? s.active : s.link]} >
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
                                        <div
                                            key={'logo'}
                                        >
                                            <img
                                                style={{
                                                    width: prevScrollPos === 0 ? '150px' : '70px',
                                                    marginLeft: prevScrollPos === 0 ? '0px' : '43px',
                                                    marginRight: prevScrollPos === 0 ? '0px' : '43px',
                                                    borderWidth: prevScrollPos === 0 ? '10px' : '5px'
                                                }}
                                                className={s.logo} src="./images/logo.jpg" alt="" />
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
                </dir>
            </div>
        </nav >
    )
}

export default Navbar;