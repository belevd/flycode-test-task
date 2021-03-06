import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import UserPosts from "./pages/UserPosts";
import ShowPost from "./Posts/ShowPost";
import Comments from "./pages/Comments";
import ShowPostComments from "./Posts/ShowPostComments";
import ProfileBlock from "./ProfileBlock";
import Profile from "./pages/Profile";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: {
        active: true,
      },
      allPosts: {
        active: false,
      },
      userPosts: {
        active: false,
      },
    };
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
          <Container>
            <Navbar.Brand href="#home">FlyCode blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link active={this.state.home.active} href="/">
                  Главная
                </Nav.Link>
                <Nav.Link active={this.state.allPosts.active} href="/all_posts">
                  Все посты
                </Nav.Link>
                <Nav.Link active={this.state.userPosts.active} href="/posts">
                  Мои посты
                </Nav.Link>
                <Nav.Link active={this.state.userPosts.active} href="/comments">
                  Все комментарии
                </Nav.Link>
              </Nav>
              <ProfileBlock serverUrl={this.props.serverUrl} />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/all_posts"
              render={() => <AllPosts serverUrl={this.props.serverUrl} />}
            />
            <Route
              exact
              path="/posts"
              render={() => <UserPosts serverUrl={this.props.serverUrl} />}
            />
            {posts.map((post) => {
              const url = "/posts/" + post.post.id;
              return (
                <Route
                  exact
                  path={url}
                  render={() => (
                    <ShowPost post={post} serverUrl={this.props.serverUrl} />
                  )}
                />
              );
            })}
            <Route
              exact
              path="/comments"
              render={() => <Comments serverUrl={this.props.serverUrl} />}
            />
            {posts.map((post) => {
              const url = "/posts/" + post.post.id + "/comments";
              return (
                <Route
                  exact
                  path={url}
                  render={() => (
                    <ShowPostComments
                      serverUrl={this.props.serverUrl}
                      postId={post.post.id}
                    />
                  )}
                />
              );
            })}
            <Route
              exact
              path="/profile"
              render={() => <Profile serverUrl={this.props.serverUrl} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

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
  {
    post: {
      id: 2,
      title: "Lorem ipsum dolor 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat odio sapiente neque accusamus numquam veritatis ea, voluptas voluptatibus ipsum.",
      user_id: 2,
      created_at: "07-07-2020 11:01",
      updated_at: "07-07-2020 11:01",
    },
    images: [
      {
        id: 3,
        title:
          "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "1234567890_image.jpg",
      },
      {
        id: 4,
        title:
          "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "1234567890_image.jpg",
      },
      {
        id: 5,
        title:
          "https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "1234567890_image.jpg",
      },
      {
        id: 6,
        title:
          "https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "1234567890_image.jpg",
      },
    ],
    comments: [
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
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.success === true) {
//           if (
//             json.message === "All posts with images retrieved successfully."
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
