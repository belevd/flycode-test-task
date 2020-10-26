import React from "react";
import { Card } from "react-bootstrap";

export default function AddImage({ img, remover }) {
  return (
    <>
      <li className="img-li">
        <Card.Img
          variant="top"
          className="post-img my-1"
          src={img.title}
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
