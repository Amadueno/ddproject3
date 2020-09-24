import React from 'react'
import API from '../../utils/API'

import {
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Container
} from 'reactstrap'

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username"/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password"/>
            </FormGroup>
            <ButtonToggle color ="danger">Log In</ButtonToggle>
          </Form>
        </Col>
        <Col xs="6">
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <ButtonToggle color ="danger">Register</ButtonToggle>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

// export default Home
