import React from 'react';
import bgmain from "../assets/bgmain.png";


const Main = () => {


    const stylTla = {
        backgroundImage: `url(${bgmain})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    };
    return (
        <section id="main" className="main" style={stylTla}>
            <div className="main_icons">Mainicons</div>
            <div className="main_main">
                <div className="main_searchbar"><h1>Searchbar</h1></div>
                <div className="main_choose_brand"><h1>choosebrand</h1></div>
                <div className="main_new"><h1>new</h1></div>
            </div>
            <div className="main_profil_and_cart"><h1>sss            profil</h1></div>
        </section>
    );
};

export default Main;