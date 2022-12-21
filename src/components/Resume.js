import { Col, Row, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

export const Resume = ({ status, message, onValidated }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(
      'https://drive.google.com/file/d/1sIauB7S8YTwk8xUTA3_aO25uK-AbDBr_/view?usp=sharing'
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download =
          'https://drive.google.com/file/d/1sIauB7S8YTwk8xUTA3_aO25uK-AbDBr_/view?usp=sharing'
        alink.click()
      })
    })
  }

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
            <div className="new-email-bx">
              <a href="https://drive.google.com/file/d/1sIauB7S8YTwk8xUTA3_aO25uK-AbDBr_/view">
                <button>Download!</button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
