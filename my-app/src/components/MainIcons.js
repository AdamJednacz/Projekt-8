import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const MainIcons = () => {
    return (
        <div className="main_icons">
            <div className="main_icons_icon_container" data-text="Home">
                <FontAwesomeIcon className="main_icons_icon_item" icon={faHouse}/>
                <span className="icon_text">Home</span>
            </div>
            <div className="main_icons_icon_container" data-text="Like">
                <FontAwesomeIcon className="main_icons_icon_item" icon={faHeart} />
                <span className="icon_text">Like</span>
            </div>
            <div className="main_icons_icon_container" data-text="Cart">
                <FontAwesomeIcon className="main_icons_icon_item" icon={faShoppingCart}  />
                <span className="icon_text">Cart</span>
            </div>
            <div className="main_icons_icon_container" data-text="Discord">
                <FontAwesomeIcon className="main_icons_icon_item" icon={faDiscord}  />
                <span className="icon_text">Discord</span>
            </div>
        </div>
    );
};

export default MainIcons;
