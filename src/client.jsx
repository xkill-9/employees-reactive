import ReactDOM from 'react-dom';
import App from './app/client/app';

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );
});
