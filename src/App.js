import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Login from './login/Login';
import Main from './homepage/Main';
import Finding_id from './login/Finding_id';
import Finding_id2 from './login/Finding_id2';

import 'antd/dist/antd.css';


const App = () => {
  return(
    <>
    <Router>
      <Route path ='/' exact component = {Main}/>
      <Route path ='/login/Login' exact component = {Login}/>
      <Route path ='/login/Finding_id' exact component = {Finding_id}/>
      <Route path ='/login/Finding_id2' exact component = {Finding_id2}/>

    </Router>
    </>
  )
}

export default App;
