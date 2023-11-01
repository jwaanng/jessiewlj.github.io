import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import LifePage from './pages/LifePage';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/life' element={<LifePage />} />
      </Routes>
    </Router>
  );
}

export default App;
