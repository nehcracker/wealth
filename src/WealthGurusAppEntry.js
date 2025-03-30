import React from 'react';
import ReactDOM from 'react-dom';
import WealthGurusApp from './components/WealthGurusApp/WealthGurusApp';

const WealthGurusAppEntry = () => {
  return <WealthGurusApp />;
};

ReactDOM.render(<WealthGurusAppEntry />, document.getElementById('root'));
