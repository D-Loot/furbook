import React from 'react';
import ReactDOM from 'react-dom';

 import App from './App.jsx';
 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root'),
 );

 // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
//  Reloads only the relevant parts of the page instead of whole page.
// In this way, we don't lose state unless it's actually updated.
 // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
 if (undefined /* [snowpack] import.meta.hot */ ) {
   undefined /* [snowpack] import.meta.hot */ .accept();
 }