import React from 'react';
import img from './headerimg.png';

const styles = {
    height: '100vh',
    background: `url(${img}) no-repeat center center fixed`,
    backgroundSize: 'cover',
};

const HeaderPage = () => {
    return (
        <div style={{...styles}}> </div>
    );
}


export default HeaderPage;
