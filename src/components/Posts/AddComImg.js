import React from "react";
import { Card } from "react-bootstrap";

export default function AddComImg({ img, remover }) {
  return (
    <>
      <li className="comment-img-li">
        <Card.Img
          variant="bottom"
          className="comment-img mx-1 my-1"
          src={img.link}
          alt={img.alt}
        />
        {remover && (
          <button class="remove-img-btn" onClick={remover.bind(null, img.id)}>
            X
          </button>
        )}
      </li>
    </>
  );
}
