import TodoPage from './components/TodoPage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


// src/App.js
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/todo" element={<TodoPage/>}/> 
         </Routes>
      </Router>
    </div>
  );
}

export default App;