import './App.css';
import { Fragment,useState } from 'react';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Result from './components/Result';
import Features from './components/features/Features';
import FAQ from './components/FAQ';

function App() {
  const [result, setResult] = useState();
  return (
    <Fragment>
      <Header />
      <Main onResult={setResult} />
      {result && <Result result={result} />}
      <Features />
      <FAQ />
    </Fragment>
  );
}

export default App;
