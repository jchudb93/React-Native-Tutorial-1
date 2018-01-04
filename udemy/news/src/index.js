import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//let == var
// const para = {
//   text: "Listen with your ears"
// };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
