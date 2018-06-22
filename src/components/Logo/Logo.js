import React from 'react';
import Tilt from 'react-tilt'; // install react-tilt first: npm install --save react-tilt
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{height: 100, width: 100, }} src={brain} alt='logo' /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;