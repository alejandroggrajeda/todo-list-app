import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormTasksAndGoal.scss";
import { addGoalAsync } from "../../reducers/goalsSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

export const FormGoals = () => {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const formRef = useRef();

  const dispatch = useDispatch();

  const addGoal = async (e) => {
    e.preventDefault();

    const name = inputRefName.current.value.trim();
    const description = inputRefDescription.current.value.trim();
    const dueDate = inputRefDueDate.current.value;

    if (!name || !description || !dueDate) {
      alert("Please complete all fields before adding the goal.");
      return;
    }

    const newGoal = {
      name: name,
      description: description,
      dueDate: dueDate,
    };

    try {
      await dispatch(addGoalAsync(newGoal)).unwrap();
      formRef.current.reset();
    } catch (error) {
      alert("Error adding goal: " + error.message);
    }
  };

  return (
    <Form ref={formRef}>
      <Form.Group className="form-group mb-3" controlId="formBasicText">
        <Form.Label>Goal Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your goal"
          ref={inputRefName}
        />
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicText">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your goal description"
          ref={inputRefDescription}
        />
      </Form.Group>
      <Form.Group className="form-group date mb-3" controlId="formBasicDate">
        <Form.Label>Due date</Form.Label>
        <Form.Control
          type="date"
          min="2025-01-01"
          max="2030-12-31"
          ref={inputRefDueDate}
        />
      </Form.Group>
      <Button
        className="add-task-button"
        variant="primary"
        type="submit"
        onClick={addGoal}
      >
        Add Goal
      </Button>
    </Form>
  );
};