import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Contact() {
    return (
        <Container>
            <Row>
                <Col sm={{ offset: 2, span: 3}}>
                    <h1>Contact</h1>
                </Col>
                <Col sm={{ offset: 1, span: 3}}>
                    <p>서울시 서대문구 창천동 503-11 5층</p>
                    <p>TEL 02-797-2821</p>
                    <p>E-Mail master@retime.co</p>
                </Col>
            </Row>
            <Row>
                <Col sm="auto">
                    <img src="/static/img/map.JPG" alt="map"/>
                </Col>
            </Row>
            <style jsx>{`
                img {
                    width: 80%;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                }
            `}</style>
        </Container>

    )
}