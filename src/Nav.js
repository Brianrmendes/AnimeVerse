import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav(){
const [show, handleShow] = useState(false);
const history = useHistory();

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    }   else {
        handleShow(false);
    }

}

useEffect(() => {
    window.addEventListener("scroll", 
    transitionNavBar);
    return() => window.removeEventListener('scroll',
    transitionNavBar); 
}, [])
    return ( 
    <div className={`nav ${show && "nav__black"}`}>
        <div nav__content="nav__content">
            <img 
            onClick={() => history.push("/")}
            className='nav__logo'
            src="https://cdn.discordapp.com/attachments/852893329317822538/856907226647232512/aLEN_FINAL_LOGO.png" 
            alt=""
            />

            <img 
            onClick={() => history.push("/profile")}
            className='nav__avatar'
            src="https://i.pinimg.com/originals/55/40/59/554059f14554a1501db801a7f4219b42.png"
            alt=""
            />
        </div>
    </div>

    );


        
}

export default Nav