
import Single from '../src/Single/Single'
import TopHead from './topbar/top'
import Write from './pages/Write/Write';
import Setting from './pages/Setting/Setting';
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <Router>
    <TopHead/>
     <Register/>
 
    </Router>
  );
}

export default App;
