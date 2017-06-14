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
const styles = {
    fontFamily: 'Alegreya Sans SC',
    textAlign: 'justify',
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
            <div style={{...styles}}>
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
                                <Collapse in = {!this.state.showingFooter}>
                                    <div>
                                        <Col xs={4} xsOffset={4}>
                                            <Button block onClick={this.toggleFooter}>Kontakt</Button>
                                        </Col>
                                    </div>
                                </Collapse>
                                <div>
                                    <ContactPanel expandsOn={this.state.showingFooter} onclick={this.toggleFooter} />
                                </div>
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
