import React, { useState } from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [flag, setFlag] = useState(false)
    window.addEventListener('resize', (ev)=>{
        if(ev.target.screen.width >= 875) {
            setFlag(false)
        }
    })
  return (
    <nav className='navBar'>
        <div className="logo">
          <img src={require('../assets/images/ibexlogo.webp')} alt="TheIBexClub-Logo"/>
        </div>
        <div>
            <ul className="menu">
                <li><Link to="about-us" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to="roadmap" spy={true} smooth={true} offset={50} duration={500}>Roadmap</Link></li>
                <li><Link to="FAQ" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link></li>
                <li><Link to="team" spy={true} smooth={true} offset={50} duration={500}>Team</Link></li>
            </ul>
        </div>
        <div className="contacts">
            <ul className="social-medias">
                <li>
                    <a href="https://twitter.com/TheIbexClub?t=Lxe6dbgndORCAEu-diaRog&s=09" target="_blank" rel="noreferrer"><i className="lni lni-twitter-filled"></i></a>
                </li>
                <li>
                    <i className="lni lni-discord"></i>
                </li>
                <li>
                    <a href="https://instagram.com/theibexclub?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><i className="lni lni-instagram-original"></i></a>
                </li>
            </ul>
        </div>
        <ul className="menu dropdown-menu" style={{
                display: flag ? 'flex': 'none'
            }}>
            <li>
                <Link to="about-us" spy={true} smooth={true} offset={50} duration={500} 
                className="clickable-menu" 
                onClick={_=>{flag? setFlag(false): setFlag(true)}}>About</Link>
            </li>
            <li>
                <Link to="roadmap" spy={true} smooth={true} offset={50} duration={500} 
                className="clickable-menu" 
                onClick={_=>{flag? setFlag(false): setFlag(true)}}>Roadmap</Link>
            </li>
            <li>
                <Link to="FAQ" spy={true} smooth={true} offset={50} duration={500} 
                className="clickable-menu" 
                onClick={_=>{flag? setFlag(false): setFlag(true)}}>FAQ</Link>
            </li>
            <li>
                <Link to="team" spy={true} smooth={true} offset={50} duration={500} 
                className="clickable-menu" 
                onClick={_=>{flag? setFlag(false): setFlag(true)}}>Team</Link>
            </li>
            <ul className="social">
                <li>
                    <a className="clickable-menu" onClick={_=>{flag? setFlag(false): setFlag(true)}} href="https://twitter.com/TheIbexClub?t=Lxe6dbgndORCAEu-diaRog&s=09" target="_blank" rel="noreferrer"><i className="lni lni-twitter-filled"></i></a>
                </li>
                <li>
                    <span className="clickable-menu" onClick={_=>{flag? setFlag(false): setFlag(true)}}><i className="lni lni-discord"></i></span>
                </li>
                <li>
                    <a className="clickable-menu" onClick={_=>{flag? setFlag(false): setFlag(true)}} href="https://instagram.com/theibexclub?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><i className="lni lni-instagram-original"></i></a>
                </li>
            </ul>
            
        </ul>
            <ul className="menu-bar">
                <li id="dropdown" style={{
                display: !flag ? 'inline-flex': 'none'
                }}
                onClick={_=>{flag? setFlag(false): setFlag(true)}}><i>&#8801;</i></li>
                <li id="cancel" style={{
                display: flag ? 'inline-flex': 'none'
            }}
            onClick={_=>{flag ? setFlag(false) : setFlag(true)}}
            ><img src={require('../assets/images/icon/new canel.png')} alt='TheIbexClub Cancel'/></li>
            </ul>
    </nav>
  )
}

export default Navbar