import React from 'react';
import ReactDOM from 'react-dom/client';
import './_reset.css';
import './index.css';
import TrueScreen from './components/trueScreen/TrueScreen';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TrueScreen />
  </React.StrictMode>,
)