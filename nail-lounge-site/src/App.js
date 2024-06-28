import {Component, React} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage';
import NailMenu from "./Pages/Menu";


class App extends Component
{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/menu" element={<NailMenu />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;