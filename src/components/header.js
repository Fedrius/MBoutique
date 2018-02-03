import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png'

export default (props)=> {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img className='navLogo' src={Logo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Welcomeee</Link></li>
                    <li><a href="#">Our Macarons</a></li>
                    <li><a href="#">Gifts & Parties</a></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}