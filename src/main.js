import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './Frame';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Frame),
    document.getElementById('mount')
  );
});
