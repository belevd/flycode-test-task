import React from "react";
import { Container } from "react-bootstrap";
import Loader from "../Loader";
import AddComment from "./AddComment";
import CreateComment from "./CreateComment";

export default function ShowPostComments({ serverUrl, postId }) {
  const header = "Комментарии поста №" + postId;

  const comments = [
    {
      comment: {
        id: 20,
        text: "Комментарий",
        post_id: 1,
        user_id: 1,
        created_at: null,
        updated_at: null,
      },
      images: [
        {
          id: 15,
          link:
            "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
        {
          id: 16,
          link:
            "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
      ],
    },
    {
      comment: {
        id: 21,
        text: "Комментарий",
        post_id: 1,
        user_id: 2,
        created_at: null,
        updated_at: null,
      },
      images: [
        {
          id: 17,
          link:
            "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
        {
          id: 18,
          link:
            "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
      ],
    },
  ];

  //   const [comments, setComments] = React.useState([]);

  //   React.useEffects(() => {
  //       const url = serverUrl + '/posts/' + postId + '/comments'
  //       fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => setComments(json))
  //   })

  return (
    <Container>
      <h1 className="text-center my-3">{header}</h1>
      <React.Suspense fallback={<Loader />}>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return <AddComment comment={comment} key={comment.comment.id} serverUrl={serverUrl} />;
          })}
        </ul>
      </React.Suspense>
      <CreateComment />
    </Container>
  );
}
