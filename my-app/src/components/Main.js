import React, { useState } from 'react';
import bgmain from "../assets/bgmain.png";

import MainSearchbar from "./MainSearchbar";
import MainBrands from "./MainBrands";
import MainNew from "./MainNew";
import MainProfil from "./MainProfil";
import MainIcons from "./MainIcons";

const Main = () => {
    const stylTla = {
        backgroundImage: `url(${bgmain})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    };


    return (
        <section id="main" className="main" style={stylTla}>
           <MainIcons/>
            <div className="main_main">
               <MainSearchbar/>
               <MainBrands/>
               <MainNew/>
            </div>
           <MainProfil/>
        </section>
    );
};

export default Main;
