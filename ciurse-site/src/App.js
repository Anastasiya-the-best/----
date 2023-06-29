import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Contact from './Pages/Contact';
import Cours from './Pages/Cours';
import Lesson from './Pages/Lesson';
import Hom from './Pages/Hom';



function App() {
  return (
   <>
    <NavBar/>
    <Router>
            <div>
              <Routes>
                <Route path="/home" element={<Hom />} />
                <Route path="/courses" element={<Cours />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/lessons" element={<Lesson />} />
               </Routes>
            </div>
        </Router>
   </>
  );
}
// import Contact from './Pages/Contacts';

export default App;
