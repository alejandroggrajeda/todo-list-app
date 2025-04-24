import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./form.scss"

function TodoEntry() {
    return (
        <Form>
            <Form.Group className="form-group mb-3" controlId="formBasicText">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter your task"/>
            </Form.Group>

            <Form.Group className="form-group mb-3" controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your task description"/>
            </Form.Group>
            <Form.Group className="form-group date mb-3" controlId="formBasicDate">
                <Form.Label>Due date</Form.Label>
                <Form.Control type="date" placeholder="hola" min="2025-01-01"  max="2030-12-31"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Task
            </Button>
        </Form>
    );
}

export default TodoEntry;