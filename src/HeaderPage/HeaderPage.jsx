import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import img from './headerimg.png';

const propTypes = {
};
const defaultProps = {
};
class HeaderPage extends Component {
    render() {
        return (
            <div>
                <Image src={img} style={{width: '100%'}} />
            </div>
        );
    }
}

HeaderPage.propTypes = propTypes;
HeaderPage.defaultProps = defaultProps;

export default HeaderPage;
