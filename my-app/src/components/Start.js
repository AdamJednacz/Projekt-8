import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from 'react-spring';
const Start = ({ setDisplaySignin, setDisplayStart, setDisplayRegister }) => {
    const fadeIn = useSpring({
        opacity: setDisplayStart ? 1 : 0,
        from: { opacity: 0 },
        config: config.slow
    });
    const GoToSginin = () => {
        setDisplaySignin(true);
        setDisplayStart(false);
        setDisplayRegister(false);
        console.log("123");
    }

    const GoToRegister = () => {
        setDisplaySignin(false);
        setDisplayStart(false);
        setDisplayRegister(true);
    }

    return (
        <animated.section style={fadeIn} className="start" id="start">
            <div className="home_start">
                <h1>Let's Get Started</h1>
                <div className="home_socialmedia_login">
                    <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faFacebookF} />Facebook</button>
                    <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faTwitter} />Twitter</button>
                    <button className="home_socialmedia_login_btn"><FontAwesomeIcon className="icon" icon={faGoogle} />Google</button>
                </div>
                <p>Already have an account? <a href="#" onClick={GoToSginin}>Sign in</a></p>
                <button onClick={GoToRegister}>Create an Account</button>
            </div>
        </animated.section>
    );
};

export default Start;
