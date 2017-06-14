import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveEmbed } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
class MediaPage extends Component {
    render() {
        return (
            <div>
                <div style={{width:'100%',height: 'auto'}}>
                    <ResponsiveEmbed a16by9>
                        <iframe title="vid" className="embed-responsive-item" src="https://www.youtube.com/embed/bWZuaWfHRAc"></iframe>
                    </ResponsiveEmbed>

                </div>
            </div>
        );
    }
}

MediaPage.propTypes = propTypes;
MediaPage.defaultProps = defaultProps;

export default MediaPage;
