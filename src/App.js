import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Login from './login/Login';
import Main from './homepage/Main';
import Finding_ip from './login/Finding_ip';

import 'antd/dist/antd.css';


const App = () => {
  return(
    <>
    <Router>
      <Route path ='/' exact component = {Main}/>
      <Route path ='/login/Login' exact component = {Login}/>
      <Route path ='/login/Finding_ip' exact component = {Finding_ip}/>

    </Router>
    </>
  )
}

export default App;
