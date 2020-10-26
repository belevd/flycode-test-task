import React from "react";
import { Container } from "react-bootstrap";
import Loader from "../Loader";
import AddComment from "../Posts/AddComment";
import CreateComment from "../Posts/CreateComment";

export default function Comments({ serverUrl }) {
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
    {
      comment: {
        id: 30,
        text: "Комментарий",
        post_id: 2,
        user_id: 1,
        created_at: null,
        updated_at: null,
      },
      images: [
        {
          id: 35,
          link:
            "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
        {
          id: 36,
          link:
            "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
      ],
    },
    {
      comment: {
        id: 31,
        text: "Комментарий",
        post_id: 2,
        user_id: 2,
        created_at: null,
        updated_at: null,
      },
      images: [
        {
          id: 37,
          link:
            "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
        {
          id: 38,
          link:
            "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          alt: "1234567890_image.jpg",
        },
      ],
    },
  ];

  //   const [comments, setComments] = React.useState([]);

  //   React.useEffect(() => {
  //     const url = serverUrl + "/api/comments";
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         if (json.success === true) {
  //           if (
  //             json.message === "All comments retrieved successfully."
  //           ) {
  //             setComments(json.data);
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setComments([
  //           {
  //             comment: {
  //               id: 1,
  //               text: "Во время загрузки произошла ошибка: " + error,
  //               post_id: 1,
  //               user_id: 1,
  //               created_at: null,
  //               updated_at: null,
  //             },
  //             images: [],
  //           },
  //         ]);
  //       });
  //   }, []);

  return (
    <div>
      <Container>
        <h1 className="text-center mt-5">Все комментарии</h1>
        <React.Suspense fallback={<Loader />}>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return <AddComment comment={comment} key={comment.comment.id} serverUrl={serverUrl} />;
            })}
          </ul>
        </React.Suspense>
      </Container>
    </div>
  );
}
