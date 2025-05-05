import "./App.scss";
import { Menu, FormTasksAndGoal, Item } from "./Components";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.value);

  return (
    <div className="App">
      <Menu></Menu>
      <h1 className="main-title">ToDo List</h1>
      <Container>
        <Row> 

          <Col xs={12} md={6} className="todo-entry">
            <FormTasksAndGoal></FormTasksAndGoal>
          </Col>
          
          <Col xs={12} md={6} className="item-col">
           {todos.map((todos, index) => {
            return <Item key={index} {...todos}></Item>
           })}
          </Col>~

        </Row>
      </Container>
    </div>
  );
}

export default App;
