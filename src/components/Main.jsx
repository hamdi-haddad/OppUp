import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';

const Main = ({ album }) => {
    return (
        <main role="main" >
           
            <Jumbotron className="text-center back2" >
            
                <Container >
        
                    <h1 className="jumbotron-heading">Opportunity Up</h1>
                    <p className="lead text-muted">
                    <strong> Leading the professional world into a better connection.</strong>
                    </p> 
                    <p>
                        <Button color="primary" className="mx-1 my-2">
                            Main call to action
                        </Button>
                        <Button color="secondary" className="my-2">
                            Secondary action
                        </Button>
                    </p>
                 
                </Container>
               
            </Jumbotron>
            
            <Album album={album} />
        </main>
    );
};

export default Main;
