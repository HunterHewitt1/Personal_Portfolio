import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import brewski from '../assets/img/brewksi.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

export const Projects = () => {
  const projects = [
    {
      title: 'Brewski',
      description: 'Breweries',
      imgUrl: brewski
    },
    {
      title: 'Blackjack',
      description: 'first to 21',
      imgUrl: projImg2
    },
    {
      title: 'Realtor Management system',
      description: 'closings and listings',
      imgUrl: projImg3
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2></h2>
            <p>
              Below is a list of recent projects and freelance work I have done.
              These projects demonstrate most of the skills I have but are not
              limited to. I own a Digital Marketing agency and I am often
              commissioned to do freelance web development.
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Freelance</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <Row>
                    <p>FreeLance</p>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
