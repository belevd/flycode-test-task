import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddPost from "./AddPost";

export default function ShowPost({ post, serverUrl }) {

  //   const [currPost, setCurrPost] = useState({});

  //   const url = serverUrl + "/api/posts/" + post.id;

  //   React.useEffect(() => {
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: localStorage.getItem("Bearer token"),
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setCurrPost(json);
  //       });
  //   });

  const currPost = {
    post: {
      id: 1,
      title: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat odio sapiente neque accusamus numquam veritatis ea, voluptas voluptatibus ipsum.",
      user_id: 1,
      created_at: "07-07-2020 11:01",
      updated_at: "07-07-2020 11:01",
    },
    images: [
      {
        id: 1,
        title:
          "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "1234567890_image.jpg",
      },
      {
        id: 2,
        title:
          "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "1234567891_image.jpg",
      },
    ],
    comments: [
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
    ],
  };

  return (
    <>
      <Container>
          <h1 className="text-center mt-3 mb-4">Просмотр и изменение поста</h1>
          <ul className="list-unstyled">
            <AddPost post={currPost}  own={true} />
          </ul>
      </Container>
    </>
  );
}
