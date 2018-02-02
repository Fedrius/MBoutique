import React from 'react'

export default (props)=> {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img className='navLogo' src={props.logo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Welcome</a></li>
                    <li><a href="#">Our Macarons</a></li>
                    <li><a href="#">Gifts & Parties</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}