import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CreateTable from './data-table.js';

class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>React Straker Coding Exercise</h1>
      </div>
    )
  }
}

ReactDOM.render(
<CreateTable />,
  document.getElementById('root')
);

reportWebVitals();
