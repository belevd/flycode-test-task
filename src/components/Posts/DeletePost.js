import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'

export default function DeletePost({ post, serverUrl }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function SendDeleteReq() {
    const url = serverUrl + "/api/posts/" + post.id;
    fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("Bearer token"),
      },
    });
  }

  return (
    <>
      <Button
        variant="outline-danger"
        className="ml-3 mt-3"
        onClick={handleShow}
      >
        Удалить пост
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Удаление поста</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={SendDeleteReq}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Вы действительно хотите удалить пост?</Card.Title>
                <Button variant="danger mr-3" type="submit">
                  Да
                </Button>
                <Button variant="info" onClick={handleClose}>
                  Нет
                </Button>
              </Card.Body>
            </Card>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
