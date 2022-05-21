import React, { Component } from 'react';
import HomePage from "./component/Home/homepage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./component/Home/signup";
import Login from "./component/Home/login";
import Dashboard from './component/dashboard';

class App extends Component {
    render() {
        return (
            <div id="main" className="maincontent">
                <Router>
                    <Routes>
                        <Route path='/' element={<HomePage/>} />
                        <Route path='/signup' element={<Signup/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path="/:username/dashboard" element={<Dashboard/>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;