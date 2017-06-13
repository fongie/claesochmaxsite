import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

const styles = {
    textAlign: 'center',
};
const propTypes = {
};
const defaultProps = {
};
class AboutHeader extends Component {
    render() {
        return (
            <div style={{...styles}}>
                <PageHeader>
                    <p>Claes&Max</p>
                    {smallText()}
            </PageHeader>
        </div>
        );
    }
}

const smallText = (props) => {
    return (
        <small>street musicians for hire</small>
    );
}

AboutHeader.propTypes = propTypes;
AboutHeader.defaultProps = defaultProps;

export default AboutHeader;
