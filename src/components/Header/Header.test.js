import React from 'react';
import ReactDOM from 'react-dom';
import Header from './';

it('crashes when there is no title', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header title="title" subtitle="dummy subtitle" profilePicture="./assets/Images/Circular.png"></Header>, div);
  ReactDOM.unmountComponentAtNode(div);
});
