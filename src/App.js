import './App.css';
import { Fragment,useState } from 'react';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Result from './components/Result';
import Features from './components/features/Features';
import FAQ from './components/FAQ';
import Loader from './components/layouts/Loader';

function App() {
  const [result, setResult] = useState();
  const [loading,setLoading] = useState(false);
  return (
    <Fragment>
      <Header />
      <Main onResult={setResult} onLoading={setLoading} />
      {loading && <Loader />}
      {result && <Result result={result} />}
      <Features />
      <FAQ />
    </Fragment>
  );
}

export default App;
