import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import './components/Icons'

// 'Router' used for accessing all links/buttons on the website
//  'App' interconnects all website's scripts together
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
