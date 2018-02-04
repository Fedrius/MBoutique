import React from 'react';
import Schedule from './schedule';
import Days from '../data/days'
import WelcomeImg from '../assets/images/welcome-image.png'
import MacaronsHomeImg from '../assets/images/macarons-image.png'

export default (props)=> {
    return (
        <div>
            <div className='row'>
                <div className='col s12'>
                    <img className='titleImg' src={WelcomeImg}/>
                </div>
            </div>
            <div className='row'>
                <div className='col s3'>
                    <img className='macaronsMainImg' src={MacaronsHomeImg}/>
                </div>
                <div className='col s9'>
                    <h4>WELCOME TO THE JUNGLE</h4>
                    <p>Bresaol pork chop landjaeger, tri-tip chuck fatback cupim spare ribs.
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
        </div>
    )
}