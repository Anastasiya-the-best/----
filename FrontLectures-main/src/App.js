import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contacts from './Pages/Contacts';
import Lessons from './Pages/Lessons';
import Courses from './Pages/Courses';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/lessons' element={<Lessons />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
