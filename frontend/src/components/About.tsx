import '../css/About.css'
import { Col, Container, Row } from 'react-bootstrap'
import workExperienceData from '../data/workExperience.json'


export default function About() {
  const workExperience: WorkExperience[] = workExperienceData

  return (
    <section className="box about-section" id="about">
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={10} xl={8}>
            <div className='experience-content'>
              <h1>Work Experience</h1>
              <p>My previous relevant work experience</p>
              <div className="experiences-container">
                {workExperience.slice().sort((x, y) => x.order - y.order).map(x => (
                  <Container className='experience d-flex' key={x.order}>
                    <div className='experience-header'>
                      <div className='d-flex flex-column fw-bold'>
                        <div className='text-start'>{x.jobTitle}</div>
                        <div>{x.companyURL ? (<a className="custom-a" href={x.companyURL}>{x.company}</a>): <>{x.company}</>}</div>
                        {Array.isArray(x.date) ? (
                            <div className='d-flex flex-column' >
                              {x.date.map((date, index) => (
                                <div className='me-4 experience-date' key={index}>{date}</div>
                              ))}
                            </div>
                          ) : ( <div className='me-4 experience-date'>{x.date}</div>)}
                      </div>
                      <div className='text-start mb-2'>{x.description}</div>
                      <div className='experience-skills'>
                        {x.skills.map((skill, index) => (<div key={index} className='me-2'>{skill}</div>))}
                      </div>
                    </div>
                  </Container>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
