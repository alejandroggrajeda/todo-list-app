import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormTasksAndGoal.scss";
import { addTodo } from "../../reducers/todoSlice"
import { useDispatch } from "react-redux";
import { useRef } from "react";

export const FormTasksAndGoal = () => {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const formRef = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    const name = inputRefName.current.value.trim();
    const description = inputRefDescription.current.value.trim();
    const dueDate = inputRefDueDate.current.value;

    if (!name || !description || !dueDate) {
      alert("Por favor completa todos los campos antes de agregar la tarea.");
      return;
    }

    dispatch(addTodo({"name":inputRefName.current.value, "description":inputRefDescription.current.value, "dueDate":inputRefDueDate.current.value}));
    formRef.current.reset();
  }

  return (
    <Form ref={formRef}>
      <Form.Group className="form-group mb-3" controlId="formBasicText">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your task" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicText">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your task description"
          ref={inputRefDescription}
        />
      </Form.Group>
      <Form.Group className="form-group date mb-3" controlId="formBasicDate">
        <Form.Label>Due date</Form.Label>
        <Form.Control type="date" min="2025-01-01" max="2030-12-31" ref={inputRefDueDate} />
      </Form.Group>
      <Button className="add-task-button" variant="primary" type="submit" onClick={addItem}>
        Add Task
      </Button>
    </Form>
  );
}
