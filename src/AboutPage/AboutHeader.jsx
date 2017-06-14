import React from 'react';
import { PageHeader } from 'react-bootstrap';

const styles = {
    fontFamily: 'Rock Salt',
    textAlign: 'center',
};
const AboutHeader = () => {
    return (
        <div style={{...styles}}>
            <PageHeader style={{borderBottom: 'none'}}>
                <p style={{fontSize: '90px'}}>Claes&Max</p>
                <small>street musicians for hire</small>
            </PageHeader>
        </div>
    );
}

export default AboutHeader;
