import './App.scss';
import Item from './Components/Item/Item.js';
import Menu from './Components/Menu/Menu.js';
import TodoEntry from "./Components/Form/form.js";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Menu></Menu>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="todo-entry"><TodoEntry></TodoEntry></Col>
                    <Col xs={12} md={6} className="item-col">
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
