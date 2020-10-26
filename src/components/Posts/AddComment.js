import React from "react";
import Card from "react-bootstrap/Card";
import AddComImg from "./AddComImg";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

export default function AddComment({ comment, serverUrl }) {
  return (
    <li>
      <Card className="my-1 comment-wrapper">
        <Card.Body>
          <Card.Title>Пользователь с id {comment.comment.user_id}</Card.Title>
          <Card.Text>{comment.comment.text}</Card.Text>
        </Card.Body>
        <div className="d-flex flex-wrap">
          {comment.images.map((img) => {
            return <AddComImg key={img.id} img={img} />;
          })}
        </div>
        <div className="comment-btn-wrapper">
          <EditComment serverUrl={serverUrl} comment={comment} />
          <DeleteComment serverUrl={serverUrl} comment={comment} />
        </div>
      </Card>
      <hr />
    </li>
  );
}
