import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import pool from "../assets/pool.jpg"
import bghome from "../assets/bghome4.jpg"
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
                <img src={pool} alt={pool}/>
                <div className="home_start">
                    <h1>Let's Get Started</h1>
                    <div className="home_socialmedia_login">
                        <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faFacebookF} />Facebook</button>
                        <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon"icon={faTwitter} />Twitter</button>
                        <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faGoogle} />Google</button>
                    </div>
                    <p>Already have an account? <a href="">Sign in</a></p>
                    <button>Create an Account</button>
                </div>
            </div>
        </section>
    );
};

export default Home;