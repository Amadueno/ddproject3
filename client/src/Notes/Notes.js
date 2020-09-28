import React from 'react'
import { Button, Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, Container, Row } from 'reactstrap'
import Moment from 'react-moment'
// import Component from '../../components'
// class Notes extends Component {
const Notes = () => {
  {
    return (
      <div>
        <Container>
          <h3>Campaign Notes</h3>
          <Button color='danger'>✏️</Button>
        </Container>
        <Container>
          <Row>
            <Col md='auto'>
              <Card>
                {/* <CardImg width="100%" src="/assets/318x270.svg" alt="parchment" /> */}
                <CardImgOverlay>
                  <CardTitle>Note Title</CardTitle>
                  <CardText> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aliquam excepturi sapiente vero optio doloribus commodi ab quaerat, eum, ratione cumque. Optio exercitationem nihil reprehenderit suscipit voluptatibus maxime officia ex!</CardText>
                  <CardText>
                    <small className='text-muted'>
                      <Moment />
                    </small>
                  </CardText>
                  <Button color='danger'>❌</Button>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Notes
