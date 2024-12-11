import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App n1={"mahima sharma"} n2={"mahima2003@gmail.com"} n3={5676655444}/>
    <App/>
    <Marks m1={87} m2={86} m3={86}/>
    <Marks/>
  </StrictMode>,
);
