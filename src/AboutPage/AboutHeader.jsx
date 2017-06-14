import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
const AboutHeader = () => {
    return (
        <div>
            <PageHeader>
                <p>Claes&Max</p>
                <small>street musicians for hire</small>
            </PageHeader>
        </div>
    );
}
AboutHeader.propTypes = propTypes;
AboutHeader.defaultProps = defaultProps;

export default AboutHeader;
