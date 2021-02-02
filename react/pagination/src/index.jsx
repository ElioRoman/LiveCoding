import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: '1',
    name: 'Test',
    age: 100,
  },
  {
    id: '2',
    name: 'Ann',
    age: 50,
  },
  {
    id: '3',
    name: 'Jack',
    age: 200,
  },
  {
    id: '4',
    name: 'Jack',
    age: 300,
  },
  {
    id: '5',
    name: 'Jack',
    age: 400,
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
