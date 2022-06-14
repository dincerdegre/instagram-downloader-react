import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Features from './components/features/Features';
import FAQ from './components/FAQ';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Features />
      <FAQ />
    </Fragment>
  );
}

export default App;
