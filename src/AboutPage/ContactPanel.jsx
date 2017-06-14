import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const propTypes = {
    onclick: PropTypes.func,
    expandsOn: PropTypes.bool.isRequired
};
const defaultProps = {
    onclick: null
};
class ContactPanel extends Component {
    render() {
        return (
            <Panel collapsible expanded={this.props.expandsOn} onClick={this.props.onclick} style={{margin: '-20px'}}>
                <p style={{textAlign: 'center', fontSize: '18px'}}>Kontakta oss via mail: info@claesochmax.se</p>
            </Panel>
        );

    }
}

ContactPanel.propTypes = propTypes;
ContactPanel.defaultProps = defaultProps;

export default ContactPanel;
