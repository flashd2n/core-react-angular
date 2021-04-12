import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GlueProvider } from '@glue42/react-hooks';
// import GlueWebPlatform from "@glue42/web-platform";

// import Glue from "@glue42/desktop";
import GlueWeb from "@glue42/web";

ReactDOM.render(
  <React.StrictMode>
    <GlueProvider fallback={<h2>Loading...</h2>} settings={{ 
      web: {
        factory: GlueWeb
      }
     }}>
      <App />
    </GlueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
