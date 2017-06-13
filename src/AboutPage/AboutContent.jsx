import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
class AboutContent extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm="8" smOffset="2">

            <Jumbotron>
                <h3>Vi är.. </h3>
            </Jumbotron>
        </Col>
    </Row>
            </Grid>
        </div>
        );
    }
}

AboutContent.propTypes = propTypes;
AboutContent.defaultProps = defaultProps;

export default AboutContent;
