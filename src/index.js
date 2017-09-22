import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";

// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
=======
import { HashRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root'));
>>>>>>> b4268066b3e70f03dcc5e2d507f8fe8d640970c6
// registerServiceWorker();
