import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// eslint-disable-next-line import/no-unresolved
import UsersList from './UsersList';

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
