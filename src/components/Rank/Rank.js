import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div>
            <div className='white f3'>
                
                {
                    `${name}, Your Latest Entry Count:`
                }
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;