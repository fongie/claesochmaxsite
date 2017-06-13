import React, { Component } from 'react';
import './App.css';
import {SectionsContainer, Section} from 'react-fullpage';
import AboutPage from './AboutPage';
import MediaPage from './MediaPage';
import HeaderPage from './HeaderPage';

const styles = {
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
        };
        return (
            <div className="container-fluid" style={{...styles}}>
                <SectionsContainer {...fullpageOptions}>
                    <Section color="#A7D8D8">
                        <HeaderPage />
                    </Section>
                    <Section color="#E0E4CC">
                        <AboutPage />
                    </Section> 
                    <Section color="#E0E4CC">
                        <MediaPage />
                    </Section> 
                </SectionsContainer>
            </div>
        );
    }
}

export default App;
