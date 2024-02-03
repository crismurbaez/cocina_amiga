import React from "react";
import s from './home.module.css';
import Carousel from '../../components/carousel/carousel'
import Made from '../../components/made/made';
import Info from '../../components/info/info';
import Team from '../../components/team/team';

// PARA HACER!!!!
// Hacer una sección de administración para dar el alta de toda la información.
// separar todo en componentes

const Home = () => {

    return (
        <div className={s.home}>

            <Carousel></Carousel>

            <Made></Made>

            <Info></Info>

            <Team></Team>

        </div>
    )
};

export default Home;