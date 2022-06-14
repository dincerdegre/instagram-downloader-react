import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
