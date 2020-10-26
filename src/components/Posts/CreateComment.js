import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Loader from "../Loader";

export default function CreateComment({serverUrl, postId}) {
  const [visible, setVisible] = React.useState(false);

  const handleVisible = () => setVisible(!visible);

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Button variant="outline-info" className="mb-5" onClick={handleVisible}>
          Добавить комментарий
        </Button>
      </Container>
      {visible && <NewComment serverUrl={serverUrl} setVisible={setVisible} postId={postId} />}
    </>
  );
}

function NewComment({ serverUrl, setVisible, postId }) {
    const [validated, setValidate] = React.useState(false);
  
    let userData;
  
    function handleSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
  
      console.log(event);
      const text = event.target[0].value;
      const images = event.target[1].files;
      userData = {
        text: text,
        images: images,
      };
  
      setValidate(true);
    }
  
    if (!validated) {
      return (
        <Container>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="commentText">
              <Form.Label>Текст комментария</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="commentImages"
                label="Добавьте изображения"
                name="photo"
                multiple={true}
                accept="image/*,image/jpeg"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="outline-success" className="mb-5" type="submit">
                Добавить комментарий
              </Button>
            </div>
          </Form>
        </Container>
      );
    } else {
      return (
        <>
          <React.Suspense fallback={<Loader />}>
            <SendCommentOnServer
              userData={userData}
              serverUrl={serverUrl}
              setVisible={setVisible}
              setValidate={setValidate}
              postId={postId}
            />
          </React.Suspense>
        </>
      );
    }
  }
  
  function SendCommentOnServer({ userData, serverUrl, setVisible, setValidate, postId }) {
    const url = serverUrl + "/api/posts/" + postId + '/comment';
    const [result, setResult] = React.useState(false);
  
    React.useEffect(() => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer token",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.success === true) {
            setVisible(false);
            setValidate(true);
            setResult(true);
          } else {
            setVisible(false);
            setValidate(true);
            setResult(false);
          }
        })
        .catch((error) => {
          setVisible(false);
          setValidate(true);
          setResult(false);
        });
    });
  
    return (
      <>
        {result && <AddCommentSuccess />}
        {!result && <AddCommentUnsuccess />}
      </>
    );
  }
  
  function AddCommentSuccess() {
    return (
      <div>
        <h3 className="text-center">Комментарий успешно добавлен</h3>
        <div className="svg-success">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-check-circle-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
        </div>
      </div>
    );
  }
  
  function AddCommentUnsuccess() {
    return (
      <div>
        <h3 className="text-center">Добавить комментарий не удалось</h3>
        <p className="text-center">Ошибка связи с сервером</p>
      </div>
    );
  }
  