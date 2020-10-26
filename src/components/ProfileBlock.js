import React from "react";
import Registration from "./Registration";
import LogIn from "./LogIn";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";

export default function ProfileBlock(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (localStorage["Bearer token"]) {
      setLoggedIn(true);
    }
  }, []);

  const logOut = () => {
    const url = props.serverUrl + "/api/logout";
    fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: localStorage["Bearer token"],
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // if (json.message === "Unauthenticated.") {
        //   localStorage.clear();
        //   setLoggedIn(false);
        // }
        localStorage.clear();
        setLoggedIn(false);
      })
      .catch((error) => {
        localStorage.clear();
        setLoggedIn(false);
      });
  };

  if (loggedIn) {
    return (
      <div className="d-flex">
        <Nav.Link href="/profile">
          <Button variant="success">
            Мой профиль
          </Button>
        </Nav.Link>
        <Nav.Link>
          <Button variant="outline-danger" onClick={logOut} type="submit">
            Выйти
          </Button>
        </Nav.Link>
      </div>
    );
  } else {
    return (
      <div>
        <LogIn serverUrl={props.serverUrl} setLoggedIn={setLoggedIn} />
        <Registration serverUrl={props.serverUrl} />
      </div>
    );
  }
}
