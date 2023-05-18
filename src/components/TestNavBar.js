import {Link} from 'react-router-dom';
import './TestNavBar.css';

// src/components/TestNavBar.js
const TestNavBar = () => {
    return (
        <div className="header">
            <h1 className="logo">Innovative Banking</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
            </div>
        </div>
    );
}

export default TestNavBar;