import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container, Row, Col} from 'react-bootstrap'
import expressjs from '..assets/img/expressjs.svg'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <section>
      <Container>
        <Row>
          <Col>
            <div>
              <h2>
                Skills
                </h2>
                <p></p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className='item'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"} alt="Image"/>
                    <h5>Javascript</h5>
                  </div>
                  <div className='item'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"} alt="Image"/>
                    <h5>Python</h5>
                  </div>
                  <div className='item'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} alt="Image"/>
                    <h5>React</h5>
                  </div>
                  <div className='item'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"} alt="Image"/>
                    <h5>Vue</h5>
                  </div>
                  <div className='item'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"} alt="Image"/>
                    <h5>Github</h5>
                  </div>
                  <div className='item'>
                    <img src={expressjs} alt="Image"/>
                    <h5>Express</h5>
                  </div>
                  <div className='item'>
                    <img src={""} alt="Image"/>
                    <h5>MongoDB</h5>
                  </div>
                  <div className='item'>
                    <img src={""} alt="Image"/>
                    <h5>PostgreSQL</h5>
                  </div>
                </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )

}