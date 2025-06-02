import "./App.scss";
import { Menu, FormTasksAndGoal, Item } from "./Components";
import { FormGoals } from "./Components/Form/FormGoals";
import { GoalItem } from "./Components/Item/GoalItem";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTodos } from "./reducers/todoSlice";
import { fetchGoals } from "./reducers/goalsSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const goals = useSelector((state) => state.goals.value);
  const [activeView, setActiveView] = useState("tasks");

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="App">
      <Menu activeView={activeView} setActiveView={setActiveView} />
      <h1 className="main-title">Task & Goal Manager</h1>
      <Container>
        {activeView === "tasks" ? (
          <Row>
            <Col xs={12} md={6} className="todo-entry">
              <FormTasksAndGoal />
            </Col>
            <Col xs={12} md={6} className="item-col">
              {todos.map((todo) => (
                <Item
                  key={todo._id}
                  id={todo._id}
                  name={todo.name}
                  description={todo.description}
                  dueDate={
                    todo.dueDate
                      ? new Date(todo.dueDate).toLocaleDateString("es-AR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                      : ""
                  }
                />
              ))}
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={6} className="todo-entry">
              <FormGoals />
            </Col>
            <Col xs={12} md={6} className="item-col">
              {goals.map((goal, idx) => (
                <GoalItem
                  key={goal._id || idx}
                  id={goal._id}
                  name={goal.name}
                  description={goal.description}
                  dueDate={
                    goal.dueDate
                      ? new Date(goal.dueDate).toLocaleDateString("es-AR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                      : ""
                  }
                />
              ))}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
