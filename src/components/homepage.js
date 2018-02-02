import React from 'react';
import Header from './header';
import Schedule from './schedule';
import Footer from './footer';

import Days from '../data/days'
import Logo from '../assets/images/logo.png'
import WelcomeImg from '../assets/images/welcome-image.png'
import MacaronsMainImg from '../assets/images/macarons-image.png'

export default ()=> {
    return (
        <div className='container'>
            <Header logo={Logo}/>
            <div className='row'>
                <div className='col s12'>
                    <img className='welcomeImg' src={WelcomeImg}/>
                </div>
            </div>
            <div className='row'>
                <div className='col s3'>
                    <img className='macaronsMainImg' src={MacaronsMainImg}/>
                </div>
                <div className='col s9'>
                    <h4>WELCOME TO THE JUNGLE</h4>
                    <p>Bresaola pork chop landjaeger, tri-tip chuck fatback cupim spare ribs.
                        Shoulder shankle venison, shank tongue tri-tip cow rump.
                        Tenderloin sirloin leberkas, corned beef sausage ground round hamburger drumstick.
                        Chicken tenderloin cupim, fatback bacon swine ham hock andouille pork pig.</p>
                    <p>Bresaola pork chop landjaeger, tri-tip chuck fatback cupim spare ribs.
                        Shoulder shankle venison, shank tongue tri-tip cow rump.
                        Tenderloin sirloin leberkas, corned beef sausage ground round hamburger drumstick.
                        Chicken tenderloin cupim, fatback bacon swine ham hock andouille pork pig.</p>
                    <p>Bresaola pork chop landjaeger, tri-tip chuck fatback cupim spare ribs.
                        Shoulder shankle venison, shank tongue tri-tip cow rump.
                        Tenderloin sirloin leberkas, corned beef sausage ground round hamburger drumstick.
                        Chicken tenderloin cupim, fatback bacon swine ham hock andouille pork pig.</p>
                </div>
            </div>
            <Schedule days={Days}/>
            <Footer/>
        </div>
    )
}