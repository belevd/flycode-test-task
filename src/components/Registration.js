import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import SendRegData from "./SendRegData";

let userData;

function RegForm(props) {
  const [validated, setValidated] = useState(false);

  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const adress = useRef(null);

  //   Функция на валидацию формы
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const passConfirm = validatePasswords();

    if (passConfirm === false) {
      event.preventDefault();
      event.stopPropagation();
      passwordConfirm.current.value = "";
    }

    if (form.checkValidity() === false && passConfirm === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    makeUserData(userData);
    setValidated(true);
  };

  // Фунцкция на валидацию паролей
  function validatePasswords() {
    if (
      password.current.value === passwordConfirm.current.value &&
      passwordConfirm.current.value
    ) {
      return true;
    } else {
      return false;
    }
  }

  function makeUserData() {
    userData = {
      name: +name.current.value,
      email: +email.current.value,
      password: +password.current.value,
      c_password: +passwordConfirm.current.value,
      adress: +adress.current.value,
    };
  }

  if (!validated) {
    return (
      <>
        <Form noValidate validated={validated}>
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
                  ref={name}
                />
                <Form.Control.Feedback type="invalid">
                  Пожалуйста, введите имя пользователя.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  ref={email}
                />
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
                ref={password}
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
                ref={passwordConfirm}
              />
              <Form.Control.Feedback type="invalid">
                Введенные пароли не совпадают.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationAdress">
              <Form.Label>Адрес</Form.Label>
              <Form.Control
                type="text"
                placeholder="Адрес"
                required
                ref={adress}
              />
              <Form.Control.Feedback type="invalid">
                Введите адрес.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" className="d-flex align-content-center">
              <Button
                onClick={handleSubmit}
                variant="outline-info"
                className="d-block ml-auto mt-auto"
              >
                Зарегистрироваться
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  } else {
    return <SendRegData userData={userData} serverUrl={props.serverUrl} />;
  }
}

function Registration(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Регистрация
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Форма регистрации</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegForm serverUrl={props.serverUrl} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Registration;
