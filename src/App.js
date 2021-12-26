import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enable or not 
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
      const toggleMode = ()=>{
        if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor ='#1a0994';
        showAlert("Dark mode has been enabled","success");
        document.title="TextUtile - Dark Mode";
        // setInterval(() => {
        //   document.title="TextUtile- is amazing download Know";
        // }, 1500);
        // setInterval(() => {
        //   document.title=" download Know";
        // }, 3000);
      }
        else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        showAlert("light mode has been enabled","success");
        document.title="TextUtile - Light Mode";
        }
      }
  return (
    <>
    <Router>
      <Navbar title="Utile Title" abouttext="About Us" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3 ">
              <Switch>
                <Route exact path="/about">
                  <About/>
                </Route>
                <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text"  mode={mode}/>
                </Route>
              </Switch>
      </div>
      </Router>
    </>
);
}

export default App;
