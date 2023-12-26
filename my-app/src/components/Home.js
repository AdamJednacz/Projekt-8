import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import pool from "../assets/pool.jpg"
import bghome from "../assets/bghome4.jpg"
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Home = () => {
    const stylTla = {
        backgroundImage: `url(${bghome})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    };
    return (
        <section style={stylTla}  className="home" id="home">
            <div className="container">
                <LazyLoadImage height="auto" width="40%" src={pool} alt={pool} effect="blur"/>
                <div className="home_start">
                    <h1>Let's Get Started</h1>
                    <div className="home_socialmedia_login">
                        <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faFacebookF} />Facebook</button>
                        <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon"icon={faTwitter} />Twitter</button>
                        <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faGoogle} />Google</button>
                    </div>
                    <p>Already have an account? <Link to="/Sig in">Sign in</Link></p>
                    <button>Create an Account</button>
                </div>
            </div>
        </section>
    );
};

export default Home;