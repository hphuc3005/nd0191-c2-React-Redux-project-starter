import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import { NavBar } from './components/nav/NavBar';
import { LogInPage } from './pages/LogInPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const unauthedRoutes = (
    <>
      <Route path='/login' element={<LogInPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </>
  )

  return (
    <BrowserRouter>
      <NavBar />
      {<Routes>
        {renderRoutes()}
        {unauthedRoutes}
      </Routes>}
    </BrowserRouter>
  );
}

export default App;
