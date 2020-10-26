import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

export default class RegForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.password = React.createRef();
    this.passwordConfirm = React.createRef();
  }

  render() {
    return (
      <Form
        noValidate
        validated={this.props.validated}
        onSubmit={this.props.handleSubmit}
      >
        {/* Здесь начинается форма регистрации */}
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Имя пользователя</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Имя пользователя"
                aria-describedby="inputGroupPrepend"
                required
                ref={this.password}
              />
              <Form.Control.Feedback type="invalid">
                Пожалуйста, введите имя пользователя.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Пожалуйста, введите корректный email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Пароль"
              required
              minLength="6"
              ref={this.passwordConfirm}
            />
            <Form.Control.Feedback type="invalid">
              Пароль должен содержать как минимум 6 символов.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationPasswordConfirm">
            <Form.Label>Повторите пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Повторите пароль"
              required
              minLength="6"
            />
            <Form.Control.Feedback type="invalid">
              Введенные пароли не совпадают.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationAdress">
            <Form.Label>Адрес</Form.Label>
            <Form.Control type="text" placeholder="Адрес" required />
            <Form.Control.Feedback type="invalid">
              Введите адрес.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit" onClick={this.props.validatePasswords(this.password, this.passwordConfirm)}>Submit form</Button>
      </Form>
    );
  }
}
