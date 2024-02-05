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
        { name: 'Tortas', link: '/cakes', current: false, },
        { name: 'Cupcakes', link: '/cupcakes', current: false, },
        { name: 'Novedades', link: '/news', current: false, },
        { name: 'Galería', link: '/gallery', current: false, },
        { name: 'Contacto', link: '/contact', current: false, },
    ])
    // agregar isOpen a redux para que sea un estado global, así puedo agregar un opacado a 
    // toda la página cuando el sidebar está abierto
    const [isOpen, setIsOpen] = useState(false);

    const navbarClick = (index, event) => {
        console.log(index);
        setNavigation((prevNav) => prevNav?.map((item, i) => (
            i === index
                ? { ...item, current: true }
                : { ...item, current: false })));
        setIsOpen(false);
    };


    // por ahora se cierra solamente si hago click dentro del sidebar
    // hacer que se cierre cuando hago click por fuera
    const closeMenu = (event) => {
        if (event.button === 0) {
            setIsOpen(false);
        }
    };

    const openMenu = () => {
        setIsOpen(true)
    };

    useEffect(() => {
        console.log(isOpen);
    }, ([isOpen]))

    return (
        <nav >
            <div >
                {/* menu movile */}
                <div className={s.movile}>
                    <div className={s.position_menu}>
                        <div onClick={() => openMenu()} className={s.menu_hamburger}>
                            <div className={s.menu_image}></div>
                            <div className={s.menu_image}></div>
                            <div className={s.menu_image}></div>
                        </div>
                    </div>

                    <div id='sidebar'
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
                            {navigation.map((nav, index) => {
                                return (
                                    <div
                                        key={index + 1} className={[nav.current ? s.active_movile : s.link]} >
                                        <Link
                                            name={nav.name}
                                            onClick={(e) => navbarClick(index, e.target)}
                                            className={[nav.current ? s.active_movile : s.link]}
                                            to={nav.link}>
                                            {nav.name}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                    <div key={'logo'}>
                        <img className={s.logo} src="./images/logo.jpg" alt="" />
                    </div>
                </div>
                {/* menu desktop */}
                <dir className={s.desktop}>
                    <div className={s.navbar}>
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
                </dir>
            </div>
        </nav >
    )
}

export default Navbar;