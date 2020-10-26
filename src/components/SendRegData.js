import React from "react";
import Loader from "./Loader";
import "./SendRegDataStyle.css";
import SignSuccess from "./SignSuccess";
import SignUnsuccess from "./SignUnsuccess";

//  Функция на отправку данных на сервер
function SendRegData(props) {
  const [result, setResult] = React.useState(false);

  const serverUrl = props.serverUrl + "/api/register";
  const userData = props.userData;

  React.useEffect(() => {
    fetch(serverUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.success === true) {
          localStorage.setItem("token", json.data.token);
          setResult(true);
        } else {
          setResult(false);
        }
      })
      .catch((error) => {
        setResult(false);
      });
  });

  return (
    <>
      <React.Suspense fallback={<Loader />}>
        {result && <SignSuccess title={"Регистрация"} />}
        {!result && <SignUnsuccess title={"Регистрация"} />}
      </React.Suspense>
    </>
  );
}

export default SendRegData;