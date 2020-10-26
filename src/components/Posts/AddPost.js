import React from "react";
import Card from "react-bootstrap/Card";
import AddComment from "./AddComment";
import AddImage from "./AddImage";
import ChangePost from "./ChangePost";
import CreateComment from "./CreateComment";
import DeletePost from "./DeletePost";

export default function AddPost({ post, own, serverUrl }) {
  return (
    <li>
      <Card className="mb-3">
        <ul className=" list-unstyled d-flex justify-content-around flex-wrap">
          {post.images.map((img) => {
            return <AddImage key={img.id} img={img} />;
          })}
        </ul>
        <Card.Body>
          <Card.Title>{post.post.title}</Card.Title>
          <Card.Text>{post.post.content}</Card.Text>
          <Card.Footer className="text-muted">
            Создан: {post.post.created_at}
          </Card.Footer>
          <Card.Footer className="text-muted">
            Последнее обновление: {post.post.updated_at}
          </Card.Footer>
          {own && <ChangePost post={post} serverUrl={serverUrl} />}
          {own && <DeletePost post={post} serverUrl={serverUrl} />}
          <hr />
          <Card.Title>Комментарии к посту</Card.Title>
          <ul className="list-unstyled">
            {post.comments.map((comment) => {
              return <AddComment key={comment.id} comment={comment} serverUrl={serverUrl}/>;
            })}
          </ul>
          <CreateComment />
        </Card.Body>
      </Card>
    </li>
  );
}
