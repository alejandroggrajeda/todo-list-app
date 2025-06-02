import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Menu.scss";

export const Menu = ({ activeView, setActiveView }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => setActiveView('tasks')}
              className={activeView === 'tasks' ? 'active' : ''}
            >
              Tasks
            </Nav.Link>
            <Nav.Link 
              onClick={() => setActiveView('goals')}
              className={activeView === 'goals' ? 'active' : ''}
            >
              Goals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
