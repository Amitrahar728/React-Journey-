import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const anotheruser ="Apurva"

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
);

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Visit Google'
);
const vitereact = React.createElement(
  'a',
  {href :'https://www.amazon.com/', target: '_blank'},
  'Visit Amazon',
  anotheruser 
)
const root = createRoot(document.getElementById('root'));
root.render(vitereact);

