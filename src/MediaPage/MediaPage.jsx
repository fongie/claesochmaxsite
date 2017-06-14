import React from 'react';
import { ResponsiveEmbed, Col } from 'react-bootstrap';

const MediaPage = () => {
        return (
            <div>
                <Col sm={10} smOffset={1}>
                    <ResponsiveEmbed a16by9>
                        <iframe title="vid" src="https://www.youtube.com/embed/bWZuaWfHRAc"></iframe>
                    </ResponsiveEmbed>
                </Col>
            </div>
        );
    }

export default MediaPage;
