import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Loader from "../Loader";

export default function Profile({ serverUrl }) {
  // const url = serverUrl + "/api/profile";
  // const [profile, setProfile] = React.useState({});

  // React.useEffect(() => {
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: localStorage.getItem("Bearer token"),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (json.success === true) {
  //         setProfile(json.data);
  //       }
  //     });
  // });

  const profile = {
    id: 1,
    name: "Иван",
    email: "email@email.com",
    email_verified_at: null,
    created_at: "03-07-2020 12:35",
    updated_at: "03-07-2020 12:35",
    address: "Тамбов",
  };

  return (
    <div>
      <Container>
        <h1 className="text-center mt-5">Профиль</h1>
        <hr />
        <React.Suspense fallback={<Loader />}>
          <ProfileLoader serverUrl={serverUrl} profile={profile} />
        </React.Suspense>
      </Container>
    </div>
  );
}

function ProfileLoader({ serverUrl, profile }) {
  const [validated, setValidated] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  function SendProfileUpdate(event) {
    const url = serverUrl + "/api/profile/update";

    if (event.target[3].value === event.target[4].value) {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("Bearer token"),
        },
        body: {
          name: event.target[0].value,
          email: event.target[1].value,
          password: event.target[3].value,
          c_password: event.target[4].value,
          address: event.target[5].value
        },
      })
      .then((response) => response.json())
      .then((json) => {
        if (json.success === true) {
          setValidated(true);
        } else {
          setFailed(true);
        }
      })
      .catch((error) => setFailed(true))
    } else {
      event.preventDefault();
      event.stopPropagation();
      event.target[4].value = "";
    }
    
  }

  return (
    <>
      <Form validated={validated} onSubmit={SendProfileUpdate}>
        <Form.Group controlId="profileName">
          <Form.Label>Имя профиля</Form.Label>
          <Form.Control
            type="text"
            placeholder="Имя пользователя"
            minLength="3"
            value={profile.name}
            required
          />
        </Form.Group>
        <Form.Group controlId="profileEmail">
          <Form.Label>Ваш email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите email"
            value={profile.email}
            required
          />
          <Form.Check
            disabled
            type="checkbox"
            label="Email подтвержден"
            id="emailVerified"
          />
        </Form.Group>
        <Form.Group controlId="validationPassword">
          <Form.Label>Введите пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            required
            minLength="6"
          />
          <Form.Control.Feedback type="invalid">
            Пароль должен содержать как минимум 6 символов.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationPasswordConfirm">
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
        <Form.Group controlId="profileAddress">
          <Form.Label>Ваш адрес</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите адрес"
            value={profile.address}
            required
          />
        </Form.Group>
        <Form.Group controlId="profileCreated">
          <Form.Label>Профиль создан</Form.Label>
          <Form.Control plaintext readOnly defaultValue={profile.created_at} />
        </Form.Group>
        <Form.Group controlId="profileUpdated">
          <Form.Label>Профиль последний раз именен изменен</Form.Label>
          <Form.Control plaintext readOnly defaultValue={profile.updated_at} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-5">
          Изменить данные профиля
        </Button>
      </Form>
      {validated &&  <ChangesSaved />}
      {failed && <ChangesFailed />}
    </>
  );
}

function ChangesSaved() {
  return (
    <h2 className="text-center">Данные вашего профиля успешно изменены</h2>
  )
}

function ChangesFailed() {
  return (
    <h2 className="text-center">Данные вашего профиля изменить не удалось</h2>
  )
}