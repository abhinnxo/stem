import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function VerticalCard({ imageURL, title, decription, callToAction }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="pt-2" variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{decription}</Card.Text>
        <Button
          //   variant="success"
          className="text-white bg-success"
        >
          {callToAction}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default VerticalCard;
