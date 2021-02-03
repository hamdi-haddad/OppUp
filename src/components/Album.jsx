import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Container,
    Row
} from 'reactstrap';

const Album = ({ album }) => {
    return (
        <div className="album py-5 bg-light" >
            <Container>
                <Row>
                    {album.map((item, key) => {
                        return (
                            <Col md="4" key={key}>
                                <Card className="mb-4 box-shadow">
                                    <CardImg
                                        top
                                        width="100%"
                                       // src={item.image}
        
                                        src = "https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Exploding-Job-Offer-Dice-1024x576.png"
                                      //  alt={item.altText}
                                        //alt = "No available image for this post"
                                    />
                                    <CardBody>
                                        <CardTitle  tag="h5">{item.company}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.location}</CardSubtitle>
                                        <CardText>{item.description}</CardText>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ButtonGroup>
                                                <Button
                                                    outline
                                                    color="secondary"
                                                    size="sm"
                                                    href={item.link}
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    outline
                                                    color="secondary"
                                                    size="sm"
                                                >
                                                    Edit
                                                </Button>
                                            </ButtonGroup>
                                            <small className="text-muted">
                                                {item.date}
                                            </small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Album;
