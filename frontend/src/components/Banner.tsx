import '../css/Banner.css'
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "/assets/img/melvin.png";

export default function Banner() {
  return (
    <section id="home">
      <div className="banner-section">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
                <div className='banner-text'>
                  <h1>{`Hi! I'm Melvin`}</h1>
                  <p>
                    Hello, my name is Melvin Moes. I'm currently in my third year at the
                    <a className="fw-bold custom-a" href="https://www.hva.nl/">&nbsp;Amsterdam University Of Applied Sciences.&nbsp;</a>
                    In addition to my studies, I work part-time as a software developer at Chipsoft.
                  </p>
                  <p>
                    I enjoy learning new skills in fields such as Software Development, Embedded Systems and Game Development.
                  </p>
                </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className='banner-image-wrapper'>
                  <div className='banner-background'></div> 
                  <img className='banner-image' src={headerImg} alt="Header Img"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
