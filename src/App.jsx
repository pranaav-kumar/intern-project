import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './Front.jsx'
import Activities from './Activities.jsx'
import Displaysteps from './Displaysteps.jsx';

function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Front/>} />
        <Route path="/steps" element={<Displaysteps/>} />
        <Route path="/steps/activities" element={<Activities/>} />
      </Routes>
    </Router>
  );
}

export default App
