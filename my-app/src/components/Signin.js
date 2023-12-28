import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated, config } from 'react-spring';
import { Link } from "react-router-dom";

const Signin = ({ setDisplaySignin, setDisplayStart,  }) => {

    const fadeIn = useSpring({
        opacity: setDisplaySignin ? 1 : 0,
        from: { opacity: 0 },
        config: config.slow
    });

    const GoToStart = () => {
        setDisplaySignin(false);
        setDisplayStart(true);
        console.log("GoToStart");
    }



    return (
        <animated.section style={fadeIn} id="signin" className="signin">
            <div className="home_signin">
                <FontAwesomeIcon className="signin_icon" icon={faArrowLeft} onClick={GoToStart} />
                <h1>Sign in</h1>
                <form className="home_signin_form">
                    <label className="home_signin_form_label">E-mail</label>
                    <input className="home_signin_form_input" type="email" />
                    <label className="home_signin_form_label">Password</label>
                    <input className="home_signin_form_input" type="password" />
                    <Link to={"shop"}>
                        <button className="home_signin_form_btn" >Sign in</button>
                    </Link>
                </form>
            </div>
        </animated.section>
    );
};

export default Signin;
