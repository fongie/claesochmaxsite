import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import img from './headerimg.png';

const propTypes = {
};
const defaultProps = {
};
const styles = {
    height: '100vh',
    background: `url(${img}) no-repeat center center fixed`,
    backgroundSize: 'cover'
};

class HeaderPage extends Component {
    render() {
        return (
            <div style={{...styles}}>
            </div>
        );
    }
}

HeaderPage.propTypes = propTypes;
HeaderPage.defaultProps = defaultProps;

export default HeaderPage;
