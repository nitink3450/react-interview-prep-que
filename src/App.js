import './App.css';
import UseState from './useState/UseState';
import UseEffect1 from './useEffect/UseEffect';
import UseReducer1 from './useReducer/UseReducer';
import UseMemo from './useMemo/UseMemo';
import AxiosFetch from './Axios&Fetch/AxiosFetch';
function App() {
  return (
    <div className="App">
    <h1>Q.1.Axios Vs Fetch</h1>
      <AxiosFetch/>
      <hr />
    <h1>Q.2.useState Hook</h1>
      <UseState/>
      <hr />
    <h1>Q.3.useEffect Hook</h1>
      <UseEffect1/>
      <hr />
    <h1>Q.4.useReducer Hook</h1>
      <UseReducer1/>
      <hr />
    <h1>Q.5.UseMemo Hook</h1>
      <UseMemo/>
      <hr />

    </div>
  );
}

export default App;
