import React from 'react';
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeGoalAsync } from "../../reducers/goalsSlice"; // Cambia esto
import "./Item.scss";

export const GoalItem = (props) => { 
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(removeGoalAsync(props.id)).unwrap();
    } catch (error) {
      alert("Error deleting goal: " + error);
    }
  };

  return (
    <Card className="task-card">
      <Card.Body className="item-body">
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="subtitle">Description</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Subtitle className="subtitle">Due Date</Card.Subtitle>
        <Card.Text>{props.dueDate}</Card.Text>
        
        <div className="buttons-container">
          <Button className="item-button" variant="primary">
            Edit
          </Button>
          <Button 
            className="item-button" 
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

