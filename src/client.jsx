import ReactDOM from 'react-dom';
import App from 'EmployeesApp/client/EmployeesApp';

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );
});
