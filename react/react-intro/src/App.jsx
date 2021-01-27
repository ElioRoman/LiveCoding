import React from "react";
import Auth from './Auth'
import Login from './Login'
import Logout from './Logout'
import Spinner from './Spinner'

const App = () => {
  const someFunc = () =>{console.log('CLICKED!');}
  return (<div>
  <Auth />
  <Login onlogin={someFunc}/>
  <Logout></Logout>
  <Spinner size={50}></Spinner>
  </div>
  
  );
};

export default App;