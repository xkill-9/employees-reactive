import React from 'react';
import './employee-detail.import.scss';

const EmployeeDetail = ({employee}) => {
  const { name, email, phone, avatar } = employee;

  return (
    <div className="thumbnail">
      <img src={avatar} alt="Employee Avatar"/>
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Email: {email}
          </li>
          <li className="list-group-item">
            Phone: {phone}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EmployeeDetail;