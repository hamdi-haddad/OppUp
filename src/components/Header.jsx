import React from 'react';
import {
    Col,
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Row
} from 'reactstrap';

const Header = ({ collapsed, toggleNavbar, socialLinks }) => {
    return (
        <header>
            <Navbar color="dark" dark>
                <Container>
                    <Collapse isOpen={!collapsed} navbar>
                        <Row>
                            <Col sm="8" md="7" className="py-4">
                                <h4 className="text-warning">About</h4>
                                <p className="text-muted">
                                    Add some information about the album below,
                                    the author, or any other background context.
                                    Make it a few sentences long so folks can
                                    pick up some informative tidbits. Then, link
                                    them off to some social networking sites or
                                    contact information.
                                </p>
                            </Col>
                            <Col sm="4" md={{ offset: 1 }} className="py-4">
                                <h4 className="text-primary">Contact</h4>
                                <ul className="list-unstyled">
                                    {socialLinks.map((link, key) => {
                                        return (
                                            <li key={key}>
                                                <a
                                                    href={link.url}
                                                    className="text-white"
                                                >
                                                    {link.text}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Collapse>
                    <NavbarBrand
                        href="/"
                        className="d-flex align-items-center mr-auto"
                    >
                      
                    <h2><strong className=" font-weight-bold text-center"><span class="text-primary">Opp</span><span class="text-warning">Up</span></strong></h2>
          
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
