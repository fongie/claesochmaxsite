import React, { Component } from 'react';
import './App.css';
import AboutPage from './AboutPage/AboutPage';
import MediaPage from './MediaPage/MediaPage';
import HeaderPage from './HeaderPage/HeaderPage';

/* Note that there is additional styling concerning the background images for about-section and media-section in App.css while HeaderPage has the style inline
*/
const styles = {
    textAlign: 'center',
    width: '100%',
    padding: '0',
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            promptForDesktopVersion: false,
        }
    }
    componentWillMount() {
        if (window.innerWidth <= 500) {
            this.setState(
                {isMobile: true}
            );
            window.addEventListener('resize', this.handleWindowSizeChange);
        }
    }
    handleWindowSizeChange = () => {
        if (window.innerWidth > 500) {
            console.log('omg prompt for dekstop')
            this.setState(
                {promptForDesktopVersion: true}
            );
        }
    };

    render() {
        if (this.state.isMobile) {
            return (
                <div className="container" style={{...styles}}>
                    <HeaderPage />
                    <AboutPage isMobile={true} />
                    <MediaPage />
                </div>
            );
        } else {
            const { SectionsContainer, Section } = require('react-fullpage');
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
                            <AboutPage isMobile={false} />
                        </Section> 
                        <Section className="media-section">
                            <MediaPage />
                        </Section> 
                    </SectionsContainer>
                </div>
            );
        }
    }
}

export default App;
