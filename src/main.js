import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './components/Frame';
import 'font-awesome/css/font-awesome.min.css';
import './sass/index.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Frame),
    document.getElementById('mount')
  );
});
