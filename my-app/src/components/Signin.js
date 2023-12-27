import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Signin = ({setDisplaySignin, setDisplayStart  }) => {

    const GoToStart = () => {
        setDisplaySignin(false);
        setDisplayStart(true);
        console.log("GoToStart");
    }
    return (
        <section id="signin" className="signin">

            <div className="home_signin">
                <FontAwesomeIcon className="sigin_icon" icon={faArrowLeft} onClick={GoToStart}  />
                <h1>Sign in</h1>
                <form className="home_signin_form">
                    <label className="home_signin_form_label">E-mail</label>
                    <input className="home_signin_form_input" type="email" />
                    <label className="home_signin_form_label">Password</label>
                    <input className="home_signin_form_input" type="password" />
                    <button className="home_signin_form_btn" >Sign in</button>
                </form>
            </div>
        </section>
    );
};

export default Signin;