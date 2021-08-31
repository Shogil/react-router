import React from 'react'
import About from "./Container/About"
import Profile from "./Container/Profile"
import {useState} from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

function App() {
  const [state, setState] = useState('')
  
  
  return (
    
   <div className="App">
       <button onClick={() => setState('about')}>About</button>
       <button onClick={() => setState('profile')}>Profile</button>
       <Router>
        <Route component={About} path='/about'/>
        <Route component={Profile} path='/profile'/>

       </Router>
   </div>
  );
}

export default App;
