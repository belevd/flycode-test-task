import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function DeleteComment({ comment, serverUrl }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function SendDeleteReq() {
    const url =
      serverUrl + "/api/posts/" + comment.post_id + "/comment/" + comment.id;
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
      <button
        variant="outline-danger"
        className="delete-comment"
        onClick={handleShow}
      >
        X
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Удаление комментария</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={SendDeleteReq}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Вы действительно хотите удалить комментарий?</Card.Title>
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
