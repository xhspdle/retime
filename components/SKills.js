import { Container, Row, Col } from 'react-bootstrap';

export default function Skills() {
    return (
        <Container>
            <div className="container-skill">
                <Row>
                    <Col sm={2}>
                        <h1>HOW?</h1>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={8}>
                        <p>
                        건축은 오랜 시간 동안 수많은 공정이 모여 체계적인 순서로 만듭니다.
                        수많은 건축물이 만들어져 왔지만, 종이 및 영상으로 기록된 건설지 및 건설다큐멘터리가 전부였고, 4차산업의 시대가 도래한 만큼 건설기록 방식도 재래식에서 디지털화로 변화되어야 합니다.
                        </p>
                        <p>
                        복잡한 시공과정의 스토리를 건축 시공전문가가 타임랩스, 4K 영상, 드론 촬영, 고화질 사진, 일러스터, 애니메이션을 활용하여 애플리케이션, 영상, 책으로 제작해 드립니다.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-center">Work Skills</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h3 className="text-center">Timelapse</h3>
                        <div className="background-img img-time">
                            <p className="skills">전경 미속촬영</p>
                            <p className="skills">공정 미속촬영</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h3>4K Movie</h3>
                        <div className="background-img img-4k">
                            <p className="skills">Full HD의 4배</p>
                            <p className="skills">해상도 3840X2160의</p>
                            <p className="skills">선명한 HDR영상</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h3>Drone</h3>
                        <div className="background-img img-drone">
                            <p className="skills">최대 5.2K/30fps</p>
                            <p className="skills">(5280x2972)의</p>
                            <p className="skills">선명한 영상</p>
                            <p className="skills">20.8MP 화소의 사진</p>
                            <p>&nbsp;</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h3>illustrator</h3>
                        <div className="background-img img-ill">
                            <p className="skills">다양한 질감</p>
                            <p className="skills">다양한 오브젝트</p>
                            <p className="skills">다양한 문자</p>
                            <p className="skills">의 벡터 그래픽스 표현</p>
                            <p>&nbsp;</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h3>HR Photo</h3>
                        <div className="background-img img-ph">
                            <p className="skills">2,420만 화소</p>
                            <p className="skills">풀프레임</p>
                            <p className="skills">최대 15스탑 다이내믹레인지</p>
                            <p className="skills">16-200mm</p>
                            <p className="skills">화각보유</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h3>Animation</h3>
                        <div className="background-img img-ani">
                            <p className="skills">2D 건축도면을</p>
                            <p className="skills">벡터화 하여</p>
                            <p className="skills">애니메이션으로</p>
                            <p className="skills">제작</p>
                            <p>&nbsp;</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
                h1, p {
                    font-family: 'Sunflower', sans-serif;
                }
                .container-skill {
                    padding-top: 3rem;
                }
                h1 {
                    margin-top: 3rem;
                }
                h3 {
                    margin-top: 1.5rem;
                    margin-bottom: 2.5rem;
                    text-align: center;
                }
                .skills {
                    margin-bottom: 0.25rem;
                    /*
                        부모엘리먼트에서 opacity로 불투명도 줄 경우
                        자식에서 따로 불투명도 주고 싶을때 rgba로 지정
                    */
                    color: rgb(255, 255, 255); /*rgba 지원 안하는 브라우저용*/
                    color: rgba(255, 255, 255, 1.0);
                }
                .background-img {
                    position: relative;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    opacity: 0.7;
                    padding: 10px;
                    background-color: black;
                }
                @media (max-width: 600px) {
                    .img-time {
                        background-image: url("/static/img/skills/time_w.jpg");
                    }
                    .img-4k {
                        background-image: url("/static/img/skills/4k_w.jpg");
                    }
                    .img-drone {
                        background-image: url("/static/img/skills/drone_w.jpg");
                    }
                    .img-ill {
                        background-image: url("/static/img/skills/drone_w.jpg");
                    }
                    .img-ph {
                        background-image: url("/static/img/skills/ph_w.jpg");
                    }
                    .img-ani {
                        background-image: url("/static/img/skills/ani_w.jpg");
                    }
                }
                @media (min-width: 601px) {
                    .img-time {
                        background-image: url("/static/img/skills/time_h.jpg");
                        height: 196.8px;
                    }
                    .img-4k {
                        background-image: url("/static/img/skills/4k_h.jpg");
                        height: 196.8px;
                    }
                    .img-drone {
                        background-image: url("/static/img/skills/drone_h.jpg");
                        height: 196.8px;
                    }
                    .img-ill {
                        background-image: url("/static/img/skills/drone_h.jpg");
                        height: 196.8px;
                    }
                    .img-ph {
                        background-image: url("/static/img/skills/ph_h.jpg");
                        height: 196.8px;
                    }
                    .img-ani {
                        background-image: url("/static/img/skills/ani_h.jpg");
                        height: 196.8px;
                    }
                }
            `}</style>
        </Container>
    )
}