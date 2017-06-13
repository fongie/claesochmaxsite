import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import AboutFooter from './AboutFooter';

const propTypes = {
};
const defaultProps = {
};
class AboutPage extends Component {
    render() {
        return (
            <div>
            <AboutHeader />
            <AboutContent />
            <AboutFooter />
        </div>
        );

    }
}

AboutPage.propTypes = propTypes;
AboutPage.defaultProps = defaultProps;

export default AboutPage;
