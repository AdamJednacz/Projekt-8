import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCircle, faCircleInfo, faGear, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {faCircle as farCircleRegular} from "@fortawesome/free-regular-svg-icons";

const MainProfil = () => {
    return (
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
    );
};

export default MainProfil;