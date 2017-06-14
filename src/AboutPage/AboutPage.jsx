import React, { Component } from 'react';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import ContactPanel from './ContactPanel';
import CopyrightLink from './CopyrightLink';
import {Collapse, Grid, Row, Col, Button } from 'react-bootstrap';

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
                            <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                                <AboutContent />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} smOffset={3} md={4} mdOffset={4}>
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

export default AboutPage;
