import TestTodoPage from './components/TestTodoPage';
import TestNavBar from './components/TestNavBar';
import TestHomePage from './components/TestHomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


// src/App.js
function App() {
  return (
    <div className="App">
      <Router>
        <TestNavBar/>
          <Routes>
            <Route path="/" element={<TestHomePage/>}/>
            <Route path="/todo" element={<TestTodoPage/>}/> 
         </Routes>
      </Router>
    </div>
  );
}

export default App;