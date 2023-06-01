import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function VerticalCard({ imageURL, title, decription, callToAction, URL }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img className="pt-2" variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{decription}</Card.Text>
        <Button
          className="text-white bg-success mt-2"
          onClick={() => window.open(URL, "_blank")}
        >
          {callToAction}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default VerticalCard;
