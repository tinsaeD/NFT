import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    const [scroll, setScroll] = useState(false)
    window.addEventListener('scroll', (ev)=>{
        if(ev.path[1].scrollY >= 669){
            setScroll(true)
        }else{
            if(scroll) setScroll(false)
        }
    })
  return (
    <footer>
        <div className="contacts">
            <ul className="social-media">
            <li>
                <a className="footer-links" href="https://twitter.com/TheIbexClub?t=Lxe6dbgndORCAEu-diaRog&s=09" target="_blank" rel="noreferrer"><i className="lni lni-twitter-filled"></i></a>
            </li>
            <li>
                <i className="footer-links lni lni-discord"></i>
            </li>
            <li>
                <a className="footer-links" href="https://instagram.com/theibexclub?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><i className="lni lni-instagram-original"></i></a>
            </li>
            </ul>
        </div>
        <h1>&copy; 2022 The Ibex CLub</h1>
        <div className="logo">
            <img src={require('../assets/images/ibexlogo.webp')} alt="IBexClub Logo"/>
        </div>
        <div className={scroll? "scroll-up active": "scroll-up" }>
            <Link to="container">
                <img src={require('../assets/images/icon/icons8-scroll-up-96.png')} alt="Scroll Up"/>
            </Link>
        </div>
    </footer>
  )
}

export default Footer