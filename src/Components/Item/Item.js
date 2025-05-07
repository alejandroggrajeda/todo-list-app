import Card from "react-bootstrap/Card";
import "./Item.scss";
import { Button } from "react-bootstrap";

export const Item = (props) => {
  return (
    <Card>
      <Card.Body className="item-body">
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="subtitle">Description</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Subtitle className="subtitle">Due Date</Card.Subtitle>
        <Card.Text>{props.dueDate}</Card.Text>
      </Card.Body>
      <div className="buttons-container">
        <Button className="item-button" variant="primary">
          Edit
        </Button>
        <Button className="item-button" variant="primary">
          Delete
        </Button>
      </div>
    </Card>
  );
};
