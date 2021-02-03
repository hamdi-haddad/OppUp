import React from 'react';
import { Container } from 'reactstrap';

const Footer = props => {
    return (
        <footer className="text-muted">
            <Container>
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    All rights are reserved &copy; OppUp - 2020 
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
