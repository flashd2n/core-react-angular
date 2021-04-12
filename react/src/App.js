import logo from './logo.svg';
import './App.css';
import { useContext } from "react";
import { GlueContext } from '@glue42/react-hooks';
// import { useGlue } from '@glue42/react-hooks';

// import GlueWebPlatform from "@glue42/web-platform";

function App() {

  const glue = useContext(GlueContext);
  window.glue = glue;

  // const what = useGlue((glue) => {
  //   return glue.version;
  // });

  // console.log("what");
  // console.log(what);

  // const glue = useGlueInit({ webPlatform: { factory: GlueWebPlatform } });
  // return glue ? <Main glue={glue} /> : <Loader />;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
