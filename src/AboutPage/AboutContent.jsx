import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};
const aboutInfo = {
    aboutText: [
        "Claes och Max är två musikanter i övre tjugoårsåldern som har spelat musik tillsammans i olika konstallationer sedan tio år tillbaka. Som duo har de turnerat gatorna i södra Europa ett par somrar, men framförallt har man kunnat se dem på gatorna i Uppsala och Stockholm eller på något av de många event de blivit anlitade för.",
        "Claes Hedström står för skönsången och gitarrkompet medan Max Körlinge ventilerar sina melodier genom ett munspel. Tillsammans har de en bred repertoir med låtar, från klassisk bluesrock och svenska låtar till funk och jazz.",
        "Claes&Max är tillgängliga för spelningar på diverse event och tar gärna emot erbjudanden för såväl små som stora uppdrag!"
    ]
}

const AboutContent = () => {
        return (
            <div>
                <Jumbotron>
                    {aboutInfo.aboutText.map((item, i) => <p key={i}>{item}</p>)}
                </Jumbotron>
            </div>
        );
    }

AboutContent.propTypes = propTypes;
AboutContent.defaultProps = defaultProps;

export default AboutContent;
