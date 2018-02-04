import React from 'react';
import OurMacaronsTitleImg from '../assets/images/our-macarons-image.png';
import OurMacaronsMainImg from '../assets/images/our-macarons-background.png';

export default (props)=> {
    const style = {
        background: `url(${OurMacaronsMainImg}) center no-repeat`
    }

    return (
        <div>
            <div className='row'>
                <div className='col s12'>
                    <img className='titleImg' src={OurMacaronsTitleImg}/>
                </div>
            </div>
            <div className='row'>
                <div className='col s12' id='extraCentering'>
                    <h5>Our macarons are freshly made by hand</h5>
                    <p>The vivid hues of our unique macarons reflect the natural flavors and
                        essences that infuse the ganache filling of these delicious almond cookies
                        each has its own personality, and all of them are made to savour for
                        their delicacy and unique character.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col s12' style={style}>
                    <h5>Classics</h5>
                    <ul>
                        <li>Caribbean choclate</li>
                        <li>Caribbean chocolat</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolate</li>
                        <li>Caribbean chocolatsse</li>
                        <li>Caribbean choclate</li>
                        <li>Caribbean chocolate</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col s12'>
                    <p>After purchase we recommend keeping macarons in the refrigerator; let them
                    come to room temperature before serving - about 10 minutes. For best degustation,
                    our macarons should be consumed within 3 days.</p>
                </div>
            </div>
        </div>
    )
}