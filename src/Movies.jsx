import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row } from 'react-bootstrap';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=94Ib5kpQ6xKNnxurFbxhXJaXKf3hhLrK")
            .then(res => res.json())
            .then(movies => {
                console.log("reviews:", movies)
                this.setState({ reviews: movies.results })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <h1 style={{ textAlign: "center", marginTop: "15px", marginBottom: "30px" }}>NY Times Movie Reviews</h1>
                {this.state.reviews.map((new_movie) =>
                    <div>
                        <Card className="text-center mb-4">
                            <Card.Body>
                                <Row>
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <img src={new_movie.multimedia.src} className="img-thumbnail border-0" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <Card.Title className="mb-5"><h4>{new_movie.display_title}</h4>
                                            <Card.Title className="mb-0"><h5>By {new_movie.byline}</h5></Card.Title>
                                        </Card.Title>
                                        <Card.Text>{new_movie.summary_short}</Card.Text>
                                        <Button variant="primary">
                                            <a className="text-white" target="blank" href={new_movie.link.url}>Read More..</a>
                                        </Button>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </Container>
        );
    }
}

export default Movies;