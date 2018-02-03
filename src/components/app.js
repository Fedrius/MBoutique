import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Homepage from './homepage';

import Contact from './contact'

const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Route exact path='/' component={Homepage}/>


            <Route path='/contact' component={Contact}/>
            <Footer/>
        </div>
    )
};

export default App;
