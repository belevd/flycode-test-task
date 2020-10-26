import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import AddComImg from "./AddComImg";

let url;

export default function EditComment({ comment, serverUrl }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  url =
    serverUrl +
    "/api/posts/" +
    comment.post_id +
    "/comment/" +
    comment.id +
    "/update";

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
      <button className="edit-comment" onClick={handleShow}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-pencil-square"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Изменение комментария</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="mb-3">
            <Card.Body>
              <Form onSubmit={SendChanges}>
                <Form.Group controlId="commText">
                  <Form.Label>Текст комментария</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите текст комментария"
                    as="textarea"
                    rows={5}
                    value={comment.comment.text}
                    required
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
                  Изменить комментарий
                </Button>
              </Form>
              <ul className=" list-unstyled d-flex justify-content-around flex-wrap">
                {comment.images.length
                  ? comment.images.map((img) => {
                      return (
                        <AddComImg
                          key={img.id}
                          img={img}
                          remover={removeImg}
                        />
                      );
                    })
                  : null}
              </ul>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}


function SendChanges(event) {
    const userData = {
      text: event.target[0].value,
      images: event.target[1].files,
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