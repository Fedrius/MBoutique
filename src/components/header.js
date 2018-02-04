import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png'

export default (props)=> {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img className='navLogo' src={Logo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Welcome</Link></li>
                    <li><Link to='/ourMacarons'>Our Macarons</Link></li>
                    <li><Link to='/giftsParties'>Gifts & Parties</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}