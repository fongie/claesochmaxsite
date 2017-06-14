import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
const styles = {
    fontFamily: 'Rock Salt',
    textAlign: 'center',

};
const AboutHeader = () => {
    return (
        <div style={{...styles}}>
            <PageHeader>
                <p style={{fontSize: '90px'}}>Claes&Max</p>
                <small>street musicians for hire</small>
            </PageHeader>
        </div>
    );
}
AboutHeader.propTypes = propTypes;
AboutHeader.defaultProps = defaultProps;

export default AboutHeader;
