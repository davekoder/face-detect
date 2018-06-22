import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ 
    onInputChange, /*this prop has been destructured and taken from the App.js file, ImageLinkForm Component*/
    onButtonSubmit
    }) => {
    return(
        <div>
            <p className='f3'>{'This will detect FACES. Try it out!'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                        className='w-50 grow f4 link ph3 pv2 dib white bg-blue'
                        onClick={onButtonSubmit}
                    >Recognize</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;