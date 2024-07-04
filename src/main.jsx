import React from 'react';
import ReactDOM from 'react-dom/client';
import SlimeScreen from './components/slimeScreen/SlimeScreen';
import './_reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <SlimeScreen/>
  </React.StrictMode>,
)