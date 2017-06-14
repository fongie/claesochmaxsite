import React, { Component } from 'react';
import './App.css';
import {SectionsContainer, Section} from 'react-fullpage';
import AboutPage from './AboutPage/AboutPage';
import MediaPage from './MediaPage/MediaPage';
import HeaderPage from './HeaderPage/HeaderPage';


const styles = {
    textAlign: 'center',
    width: '100%',
    padding: '0',
};
class App extends Component {
    render() {
        let fullpageOptions = {
            sectionClassName: 'section',
            anchors: ['header', 'about', 'media'],
            scrollBar: false,
            navigation: true,
            sectionPaddingTop: '0',
            sectionPaddingBottom: '0',
            verticalAlign: true,
        };
        return (
            <div className="container" style={{...styles}}>
                <SectionsContainer {...fullpageOptions}>
                    <Section>
                        <HeaderPage />
                    </Section>
                    <Section className="about-section">
                        <AboutPage />
                    </Section> 
                    <Section className="media-section">
                        <MediaPage />
                    </Section> 
                </SectionsContainer>
            </div>
        );
    }
}

export default App;
