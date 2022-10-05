import React, {  useState } from 'react';
import './Navbar.css';
import { CgMenuRight, CgClose } from "react-icons/cg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {title: 'Home', id: '#hero', cName: 'nav-link', link: '/home'},
    {title: 'About', id: '#about', cName: 'nav-link', link: '/about'},
    {title: 'Projects', id: '#projects', cName: 'nav-link', link: '/projects'},
    {title: 'Contact', id: '#contact', cName: 'nav-link', link: '/contact'},
  ]

  const onToggle = () => (setToggle(!toggle))


    return (
      <nav>
        <div className="logo">{`<Abdoul Oumar />`} </div>

          <ul className={`nav-list ${toggle && 'nav-active'}`}>
            {navLinks.map((navLink, index) => {
              return (
                  <li className='nav-item' key={index}>
                    <AnchorLink className={navLink.cName} href={navLink.id} onClick={toggle && onToggle}>{navLink.title}</AnchorLink>
                  </li>
                
              )
            })}
          </ul>

        <div className="menu-icon" onClick={onToggle}>
                {toggle ? <div className='icon'><CgClose /></div> : <div className='icon'><CgMenuRight /></div>}

        </div>
      </nav>
    )
}

export default Navbar;

