import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './Frame';
import 'font-awesome/css/font-awesome.min.css';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Frame),
    document.getElementById('mount')
  );
});
