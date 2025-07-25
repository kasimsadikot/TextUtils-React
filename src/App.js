import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React,{ useState } from 'react';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
// }from "react-router-dom"

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Is Enable","success :")
      document.title = "TextUtils - DarkMode" 
    }else{
      setMode('light');
      showAlert("Light Mode Is Enable","success :")
      document.title = "TextUtils - LightMode" 
    }
  }
  return (
  <>
    {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" */}
            <TextFrom showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
  </>
  );
}

export default App;
