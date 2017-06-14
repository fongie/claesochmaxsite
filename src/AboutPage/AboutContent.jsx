import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const aboutInfo = {
    aboutText: [
        "Claes&Max är två musikanter i tjugoårsåldern som har spelat musik tillsammans i olika konstallationer sedan tio år tillbaka. Som duo har de turnerat gatorna i södra Europa ett par somrar, men framförallt har man kunnat se dem på gatorna i Uppsala och Stockholm eller på något av de många event de blivit anlitade för.",
        "Claes Hedström står för skönsången och gitarrkompet medan Max Körlinge ventilerar sina melodier genom ett munspel. Tillsammans har de en bred repertoir med låtar, från klassisk bluesrock och svenska låtar till funk och jazz.",
        "Claes&Max är tillgängliga för spelningar på diverse event och tar gärna emot erbjudanden för såväl små som stora uppdrag!"
    ]
}

const AboutContent = () => {
        return (
            <div>
                <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <Jumbotron>
                    {aboutInfo.aboutText.map((item, i) => <p key={i}>{item}</p>)}
                </Jumbotron>
            </div>
            </div>
        );
    }

export default AboutContent;
