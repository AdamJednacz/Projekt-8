import React, { useState } from 'react';
import bgmain from "../assets/bgmain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHeart, faBars, faShoppingCart, faUser, faCircle, faCircleInfo, faLock, faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
    const stylTla = {
        backgroundImage: `url(${bgmain})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // Tutaj możesz obsłużyć logikę wyszukiwania, na przykład wysyłając zapytanie do API, itp.
        console.log('Searching for:', searchTerm);
    };

    return (
        <section id="main" className="main" style={stylTla}>
            <div className="main_icons">
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShoppingCart} />
                <FontAwesomeIcon icon={faDiscord} />
            </div>
            <div className="main_main">
                <div className="main_searchbar">
                    <input
                        className="main_searchbar_input"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="main_choose_brand"><h1>choosebrand</h1></div>
                <div className="main_new"><h1>new</h1></div>
            </div>
            <div className="main_profil">
                <FontAwesomeIcon icon={faUser} />
                <p>Name</p>
                <FontAwesomeIcon icon={faBars} />
                <div className="main_profil_menu">
                    <FontAwesomeIcon icon={faCircle} /><p>Dark Mode</p>
                    <FontAwesomeIcon icon={farCircleRegular} /> <p>Light Mode</p>
                    <FontAwesomeIcon icon={faCircleInfo} /><p>Account</p>
                    <FontAwesomeIcon icon={faLock} /><p>Password</p>
                    <FontAwesomeIcon icon={faGear} /><p>Settings</p>
                </div>
            </div>
        </section>
    );
};

export default Main;
