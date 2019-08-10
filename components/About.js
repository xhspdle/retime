import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
    return (
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={6}>
                <h1>Make Solutions</h1>
                <p className="spirit">01. Spirits</p>
                <p>논리적이고 일의 과정을 즐길 줄 아는 사람들이 제작합니다.</p>
                <p className="spirit">02. Spirits</p>
                <p>건축시공 전문가가 아이디어를 제안합니다.</p>
                <p className="spirit">03. Spirits</p>
                <p>새롭게 시작하는 과정에 두려워하지 않고 도전합니다.</p>
                <p className="spirit">04. Spirits</p>
                <p>이해하기 쉽고 전문적 기술표현을 지향합니다.</p>
                </Col>
                <Col sm={5}>
                    <div>
                        <Image fluid="true" src="/static/img/1.jpg" rounded/>
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                h1 {
                    margin-top: 3rem;
                }
                h1, p {
                    font-family: 'Sunflower', sans-serif;
                }
                p {
                    font-size: 1.25rem;
                }
                .spirit {
                    margin-bottom: -0.25rem;
                }
                div {
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                }
            `}</style>
        </Container>
        
    )
}