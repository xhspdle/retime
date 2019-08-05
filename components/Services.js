import { Container, Row, Col } from 'react-bootstrap';

export default function Services() {
    return(
        <Container>
            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>
            <Row>
                <Col sm={2}>
                    <h1>Application</h1>
                    
                </Col>
                <Col sm={1}/>
                <Col sm={9}>
                    <Row>
                        <Col sm={4}>
                            <h3>Retime Month</h3>
                        </Col>
                        <Col sm={8}>
                            <div className="background-img">
                                <Row>
                                    <Col sm={3}>
                                        <p>Timelapse</p>
                                        <p>4K Movie</p>
                                        <p>Drone</p>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </Col>
                                    <Col sm={8}>
                                        <p>한달동안 진행된 일련의 시공과정을 짧은 시간동안 보여드립니다.</p>
                                    </Col>
                                </Row>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <h3>Retime Tech</h3>
                        </Col>
                        <Col sm={8}>
                            <div className="background-img">
                                <Row>
                                    <Col sm={3}>
                                        <p>Timelapse</p>
                                        <p>4K Movie</p>
                                        <p>Drone</p>
                                        <p>illustrator</p>
                                        <p>HR Photo</p>
                                        <p>Animation</p>
                                    </Col>
                                    <Col sm={8}>
                                        <p>공사 기간의 일련의 과정을 시공기록 전문가가 직접 참여하여 일련의 시공과정을 이해하기 쉽게 핵심 요소만 보여드립니다.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <h3>Retime Story</h3>
                        </Col>
                        <Col sm={8}>
                            <div className="background-img">
                                <Row>
                                    <Col sm={3}>
                                        <p>Timelapse</p>
                                        <p>4K Movie</p>
                                        <p>Drone</p>
                                        <p>illustrator</p>
                                        <p>HR Photo</p>
                                        <p>Animation</p>
                                    </Col>
                                    <Col sm={8}>
                                        <p>설계 과정, 컨셉, Mockup 등 Fast tarck 중 일어나는 현장의 이슈를 정리하여 보여드립니다.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    <h1>Book</h1>
                </Col>
                <Col sm={1}/>
                <Col sm={9}>
                    <Row>
                        <Col sm={4}>
                            <h3>Retime Book</h3>
                        </Col>
                        <Col sm={8}>
                            <div className="background-img">
                                <Row>
                                    <Col sm={3}>
                                        <p>4K Movie</p>
                                        <p>illustrator</p>
                                        <p>HR Photo</p>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </Col>
                                    <Col sm={8}>
                                        <p>종이에 표현할 수 있는 모든것을 정리 요약하여 누구나 알기 쉽게 보여 드립니다.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            <style jsx>{`
                p {
                    margin-bottom: 0;
                    color: rgb(255, 255, 255); /*rgba 지원 안하는 브라우저용*/
                    color: rgba(255, 255, 255, 1.0);
                }
                .background-img {
                    position: relative;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    opacity: 0.6;
                    padding: 10px;
                    background-color: black;
                    margin-bottom: 1rem;
                }
                @media (max-width: 600px) {
                    .background-img {
                        background-image: url("/static/img/book.jpg");
                    }
                }
                @media (min-width: 601px) {
                    .background-img {
                        background-image: url("/static/img/book.jpg");
                        height: 196.8px;
                    }
                }
            `}</style>
        </Container>
    )
}