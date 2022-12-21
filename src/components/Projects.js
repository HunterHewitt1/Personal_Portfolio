import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import reminder from '../assets/img/reminder.png'
import brewski from '../assets/img/brewksi.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import DoMore from '../assets/img/DoMore.png'
export const Projects = () => {
  const projects = [
    {
      title: 'Brewski',
      description:
        'Brewski is an application that gathers breweries from around the world, displays them for you and allows you to leave your own review!',
      imgUrl: brewski
    },
    {
      title: '"Do More" Prodcutivty App',
      description:
        'DoMore is a productivity app that can be used to track daily task and post them to your feed to share with friends or to your personal log to hold yourself accountable.',
      imgUrl: DoMore
    },
    {
      title: 'Realtor Management system',
      description:
        'A interface that allows a realtors to input important dates with information that pertains to closings.',
      imgUrl: reminder
    }
  ]
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
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
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <div class="flex-container">
                  <div class="flex-child">
                    <button
                      class="flex-child"
                      id="showmenu"
                      onClick={() =>
                        openInNewTab(
                          'https://github.com/HunterHewitt1/brewski-frontend'
                        )
                      }
                    >
                      GitHub
                    </button>
                    <button
                      class="flex-child"
                      id="showmenu"
                      onClick={() =>
                        openInNewTab('https://brewski.herokuapp.com/?')
                      }
                    >
                      Live
                    </button>
                  </div>
                  <div class="flex-child">
                    <button
                      class="flex-child"
                      id="showmenu"
                      onClick={() =>
                        openInNewTab('https://github.com/HunterHewitt1/DoMore')
                      }
                    >
                      GitHub
                    </button>
                    <button
                      class="flex-child"
                      id="showmenu"
                      onClick={() => openInNewTab('https://google.com')}
                    >
                      Live
                    </button>
                  </div>
                  <div class="flex-child">
                    <button
                      class="flex-child"
                      id="showmenu"
                      onClick={() =>
                        openInNewTab(
                          'https://github.com/HunterHewitt1/Reminder-Phase-1'
                        )
                      }
                    >
                      GitHub
                    </button>
                    <button
                      class="flex-child"
                      id="showmenu"
                      onClick={() => openInNewTab('https://google.com')}
                    >
                      Live
                    </button>
                  </div>
                </div>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
