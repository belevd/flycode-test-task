import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import AddImage from "./AddImage";
import Form from "react-bootstrap/Form";

let url;

export default function ChangePost({ post, serverUrl }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  url = serverUrl + "/api/posts/" + post.id + "/update";

  function removeImg(id) {
    const url = serverUrl + "/api/images/" + id;
    fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });
  }

  return (
    <>
      <Button
        variant="outline-success"
        className="ml-3 mt-3"
        onClick={handleShow}
      >
        Изменить пост
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Изменение поста</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="mb-3">
            <ul className=" list-unstyled d-flex justify-content-around flex-wrap">
              {post.images.length
                ? post.images.map((img) => {
                    return (
                      <AddImage key={img.id} img={img} remover={removeImg} />
                    );
                  })
                : null}
            </ul>
            <Card.Body>
              <Form onSubmit={SendChanges}>
                <Form.Group controlId="postTitle">
                  <Form.Label>Заголовок поста</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название поста"
                    minLength="3"
                    value={post.post.title}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="postText">
                  <Form.Label>Текст поста</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите текст поста"
                    value={post.post.content}
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.File
                    id="postImages"
                    label="Добавьте изображения"
                    name="photo"
                    multiple={true}
                    accept="image/*,image/jpeg"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Изменить пост
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

function SendChanges(event) {
  const userData = {
    title: event.target[0].value,
    content: event.target[1].value,
    images: event.target[3].files,
  };

  React.useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("Bearer token"),
      },
      body: JSON.stringify(userData),
    }).then((response) => response.json());
  });
}
