import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "./Loader";
import SignSuccess from "./SignSuccess";
import SignUnsuccess from "./SignUnsuccess";

function LogIn(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" className="mr-3" onClick={handleShow}>
        Войти
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LogInForm serverUrl={props.serverUrl} setLoggedIn={props.setLoggedIn} />
        </Modal.Body>
      </Modal>
    </>
  );
}

let data;

function LogInForm(props) {
  const [validated, setValidated] = useState(false);

  function SendUserData(event) {
    event.preventDefault();
    event.stopPropagation();
    const serverUrl = props.serverUrl;
    const email = event.target[0].value;
    const password = event.target[1].value;
    const userData = {
      email: email,
      password: password,
    };

    makeData(serverUrl, userData);
    setValidated(true);
  }

  function makeData(serverUrl, userData) {
    data = {
      serverUrl: serverUrl,
      userData: userData,
    };
  }

  if (!validated) {
    return (
      <Form validated={validated} onSubmit={SendUserData}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Введите email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    );
  } else {
    return (
      <div>
        <React.Suspense fallback={<Loader />}>
          <LogInResult setLoggedIn={props.setLoggedIn}/>
        </React.Suspense>
      </div>
    );
  }
}

function LogInResult(props) {
  const [result, setResult] = React.useState(false);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=1")
      .then((response) => response.json())
      .then((data) => {
        if (data[0].id === 1) {
          localStorage.setItem('Bearer token', true);
          setResult(true);
          props.setLoggedIn(true);
        } else {
          setResult(false);
        }
      })
      .catch((error) => {
        return error;
      });
  });

  return (
    <div>
      {result && <SignSuccess title={"Авторизация"} />}
      {!result && <SignUnsuccess title={"Авторизация"} />}
    </div>
  );
}

// function LogInResult() {
//   const [result, setResult] = React.useState(false);
//   const serverUrl = data.serverUrl + "/api/login";
//   const userData = data.userData;

//   React.useEffect(() => {
//     fetch(serverUrl, {
//       method: "POST",
//       headers: { Accept: "application/json" },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.success === true) {
//           localStorage.setItem('Bearer token', json.data.token);
//           setResult(true);
//           props.setLoggedIn(true);
//         } else {
//           setResult(false)
//         }
//       })
//       .catch((error) => setResult(false));
//   });

//   return (
//     <div>
//       {result && <SignSuccess title={"Авторизация"} />}
//       {!result && <SignUnsuccess title={"Авторизация"} />}
//     </div>
//   );
// }

export default LogIn;
