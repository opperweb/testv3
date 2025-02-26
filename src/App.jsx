import "./styles.css";
import { Routes, Route } from "react-router-dom"

import Home from './pages/home/home'
import Login from './pages/login/login'

export default function App() {
  
  return (
    <div className="App">
      a
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="home" element={<Home/>}></Route>
      </Routes>
    
    </div>
  );
}
