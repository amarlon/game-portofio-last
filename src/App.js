// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import RandomPage from './components/RandomPage';
import GamePage from './components/GamePage';
import { TEST_GAMES } from './TEST_GAMES';
import { Route, Routes, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES);

  return (
    <div >
      <Navbar className="mb-3" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My Board Game</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage gamesList={gamesList} />} />
          <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
          <Route path="/games/:gameId" element={<GamePage gamesList={gamesList} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
