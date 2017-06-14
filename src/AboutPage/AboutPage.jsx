import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import ContactPanel from './ContactPanel';
import CopyrightLink from './CopyrightLink';
import {Collapse, Grid, Row, Col, Button } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingFooter: false,
        }
    }
    toggleFooter = () => {
        const currentState = this.state.showingFooter;
        this.setState(
            {showingFooter: !currentState}
        )
    }

    render() {
        return (
            <div>
                <Grid>
                    <div style={{height: '95vh'}}>
                        <Row>
                            <AboutHeader />
                        </Row>
                        <Row>
                            <Col sm={8} smOffset={2}>
                                <AboutContent />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} xsOffset={3}>
                                <Button block onClick={this.toggleFooter}>Kontakt</Button>
                                <Collapse in={this.state.showingFooter}>
                                    <div>
                                        <ContactPanel onclick={this.toggleFooter} />
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <CopyrightLink />
                    </Row>
                </Grid>
            </div>
        );

    }
}

AboutPage.propTypes = propTypes;
AboutPage.defaultProps = defaultProps;

export default AboutPage;
