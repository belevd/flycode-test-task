import React from "react";
import Loader from "../Loader";
import CreatePost from "../Posts/CreatePost";
import PostsList from "../Posts/PostsList";

export default function UserPosts({ serverUrl }) {
    const posts = [
      {
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
      },
    ];

//   const [posts, setPosts] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const url = serverUrl + "/api/all_posts";
//     fetch(url, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: localStorage.getItem('Bearer token'),
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.success === true) {
//           if (
//             json.message === "My posts retrieved successfully."
//           ) {
//             setPosts(json.data);
//             setLoading(false);
//           }
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         setPosts([
//           {
//             post: {
//               id: 1,
//               title: "Произошла ошибка",
//               content: "Во время загрузки произошла ошибка: " + error,
//               user_id: 1,
//               created_at: null,
//               updated_at: null,
//             },
//             images: [],
//             comments: [],
//           },
//         ]);
//       });
//   }, []);

  if (localStorage.getItem('Bearer token')) {
    return (
        <div>
          <h1 className="text-center mt-5">Список постов пользователя</h1>
          {/* {loading && <Loader />} */}
          <React.Suspense fallback={<Loader />}>
            <PostsList list={posts} own={true} serverUrl={serverUrl} />
          </React.Suspense>
          <CreatePost serverUrl={serverUrl}/>
        </div>
      );
  } else {
    return (
        <div>
          <h1 className="text-center mt-5">Пользователь не авторизован</h1>
        </div>
      ); 
  }

  
}
