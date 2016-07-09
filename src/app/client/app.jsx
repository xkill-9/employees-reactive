import React, { Component } from 'react';
import EmployeeList from './components/employee-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <EmployeeList />
      </div>
    )
  }
}