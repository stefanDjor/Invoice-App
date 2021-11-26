import React, { useState } from "react";

export default function Aside(props) {

    return <aside className="aside-col">

        <div className="log-aside">
            <div className="log-color-down"></div>
            <img className="log-img" src={require('../assets/logo.svg').default} alt="logo"/>
        </div>

        <div className="down-part">

            <div className="dark-light-mode">
                
                <img onClick={props.changeTheme} className="moon" src={props.changeIcon} alt="moon"/>
                
            </div>

            <div className="avatar-photo">
                <img className="profil-img" src={require('../assets/image-avatar.jpg').default} alt="avatar"/>
            </div> 

        </div>

    </aside>;
}