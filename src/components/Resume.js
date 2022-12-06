import { Col, Row, Alert } from 'react-bootstrap'

export const Resume = ({ status, message, onValidated }) => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Download my most recent resume<br></br> & check out my experience!
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className="new-email-bx">
                <form
                  method="get"
                  action="https://drive.google.com/file/d/1sIauB7S8YTwk8xUTA3_aO25uK-AbDBr_/view?usp=sharing"
                >
                  <button type="submit">Download!</button>
                </form>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
