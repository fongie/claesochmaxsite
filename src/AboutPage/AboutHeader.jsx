import React from 'react';
import { PageHeader } from 'react-bootstrap';

const styles = {
    fontFamily: 'Rock Salt',
    textAlign: 'center',
};
const AboutHeader = (props) => {
    return (
        <div style={{...styles}}>
            <PageHeader style={{borderBottom: 'none'}}>
                <p style={props.isMobile ? {fontSize: '40px'} : {fontSize: '90px'}}>Claes&Max</p>
                <small>street musicians for hire</small>
            </PageHeader>
        </div>
    );
}

export default AboutHeader;
