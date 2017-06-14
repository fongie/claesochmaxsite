import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveEmbed, Grid, Row, Col } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
class MediaPage extends Component {
    render() {
        return (
            <div>
                <Col xs={10} xsOffset={1}>
                    <ResponsiveEmbed a16by9>
                        <iframe title="vid" src="https://www.youtube.com/embed/bWZuaWfHRAc"></iframe>
                    </ResponsiveEmbed>
                </Col>
            </div>
        );
    }
}

MediaPage.propTypes = propTypes;
MediaPage.defaultProps = defaultProps;

export default MediaPage;
