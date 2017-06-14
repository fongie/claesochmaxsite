import React from 'react';

const CopyrightLink = () => {
    return(
            <p style={{textAlign: 'center'}}>
                &copy; 
                <a 
                    style={{textDecoration: 'none'}} 
                    href="http://maxk.se"
                >
                    2017 Max Körlinge
                </a>
            </p>

    );
};

export default CopyrightLink;
