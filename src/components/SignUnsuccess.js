import React from "react";


export default function SignUnsuccess({title}) {

  return (
    <div>
      <h3 className="text-center">{title + ' не выполнена'}</h3>
      <p className="text-center">Что-то пошло не так</p>
    </div>
  );
}