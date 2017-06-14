import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const propTypes = {
    onclick: PropTypes.func,
};
const defaultProps = {
    onclick: null
};
class ContactPanel extends Component {
    render() {
        return (
            <Panel onClick={this.props.onclick}>
                <p>Kontakta oss via mail: info@claesochmax.se</p>
            </Panel>
        );

    }
}

ContactPanel.propTypes = propTypes;
ContactPanel.defaultProps = defaultProps;

export default ContactPanel;
