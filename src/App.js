import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import { NavBar } from './components/nav/NavBar';

function App() {
  const props = {}

  return (
    <BrowserRouter>
      <NavBar />
      {props && <Routes>{renderRoutes({ ...props })}</Routes>}
    </BrowserRouter>
  );
}

export default App;
