import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Start from "./Start";
import Signin from "./Signin";
import Register from "./Register";
import pool from "../assets/pool.jpg"
import bghome from "../assets/bghome4.jpg"
const Home = () => {
    const [displaySignin, setDisplaySignin] = useState(false);
    const [displayStart, setDisplayStart] = useState(true);
    const [displayRegister, setDisplayRegister] = useState(false);

    const stylTla = {
        backgroundImage: `url(${bghome})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    };

    const goToSignin = () => {
        setDisplayStart(false);
        setDisplaySignin(true);
        setDisplayRegister(false);
    }

    const goToRegister = () => {
        setDisplayStart(false);
        setDisplaySignin(false);
        setDisplayRegister(true);

    }

    return (
        <section style={stylTla} className="home" id="home">
            <div className="container">
                <LazyLoadImage height="auto" width="40%" src={pool} alt={pool} effect="blur" />
                {displaySignin ? (
                    <Signin setDisplaySignin={setDisplaySignin} setDisplayStart={setDisplayStart} />
                ) : displayStart ? (
                    <Start setDisplaySignin={setDisplaySignin} setDisplayStart={setDisplayStart} setDisplayRegister={setDisplayRegister} goToSignin={goToSignin} />
                ) : displayRegister ? (
                    <Register setDisplayRegister={setDisplayRegister} setDisplayStart={setDisplayStart} goToRegister={goToRegister} />
                ) : null}
            </div>
        </section>
    );
};

export default Home;
