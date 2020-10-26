import React from "react";
import { Container } from "react-bootstrap";
import AddPost from "./AddPost";

export default function PostsList({ list, own, serverUrl }) {
  return (
    <Container>
      <ul className="list-unstyled">
        {list.map((post) => {
          return <AddPost post={post} key={post.post.id} own={own} serverUrl={serverUrl} />;
        })}
      </ul>
    </Container>
  );
}
