import React, { useEffect, useState } from 'react';
// import PrivateRoute from "./components/PrivateRoute.js";
import RegisterLogin from "./components/RegisterLoginSection/RegisterLoginContainer/RegisterLogin";
import './App.css';
import axios from 'axios'

function App() {
  // const [pong, setPong] = useState("")

  // useEffect(() => {
  //   const pingPong = async () => {
  //     try {
  //       const { data } = await axios('/ping')
  //       setPong(data.pong)
  //       console.log('state.pong', pong)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   pingPong()
  // }, [])
  return (
    <div className="App">
          <RegisterLogin/>
          
    </div>
  );
}

export default App;
