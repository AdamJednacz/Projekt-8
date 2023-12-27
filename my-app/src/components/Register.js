import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Register = ({ setDisplayStart, setDisplayRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const GoToStart = () => {
        setDisplayRegister(false);
        setDisplayStart(true);
        console.log("GoToStart");
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return;
        }

        // Your registration logic goes here

        // Reset password match error
        setPasswordMatchError(false);
    }

    return (
        <section id="register" className="register">
            <div className="home_register">
                <FontAwesomeIcon className="register_icon" icon={faArrowLeft} onClick={GoToStart} />
                <h1>Register</h1>
                <form className="home_register_form" onSubmit={handleSignUp}>
                    <label className="home_register_form_label">E-mail</label>
                    <input
                        className="home_register_form_input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label className="home_register_form_label">Password</label>
                    <input
                        className="home_register_form_input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label className="home_register_form_label">Confirm Password</label>
                    <input
                        className="home_register_form_input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {passwordMatchError && <p style={{ color: 'red', marginTop: '0' }}>Passwords do not match</p>}
                    <button className="home_register_form_btn" style={{ marginBottom: passwordMatchError ? '0.4em' : '0.95em' }}>Sign up</button>
                </form>
            </div>
        </section>
    );
};

export default Register;
