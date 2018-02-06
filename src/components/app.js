import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Homepage from './homepage';
import OurMacarons from './ourMacarons';
import GiftParties from './giftsParties'
import ContactForm from './contact'

const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/ourMacarons' component={OurMacarons}/>
            <Route path='/giftsParties' component={GiftParties}/>
            <Route path='/contact' component={ContactForm}/>
            <Footer/>
        </div>
    )
};

export default App;
