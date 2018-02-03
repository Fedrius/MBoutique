import React from 'react'
import MailIcon from '../assets/images/mail.png'
import PhoneIcon from '../assets/images/mail.png'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'

export default (props)=> {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className='col s4'>
                        <div className='leftFooter'>
                            <img src={MailIcon}/>
                            <span>order@mboutigue.com</span>
                        </div>
                    </div>
                    <div className='col s4'>
                        <div className='center-align centerFooter'>
                            <img src={PhoneIcon}/>
                            <span>959-800-3111 <br/>
                                Copyright @2014 Mboutique. <br/>
                                All rights reserved.
                            </span>
                        </div>
                    </div>
                    <div className='col s4'>
                        <div className='rightFooter'>
                            <img src={FacebookIcon}/>
                            <img src={TwitterIcon}/>
                            <span>Follow us</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}