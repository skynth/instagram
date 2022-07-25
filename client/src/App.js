import './App.css';
import React from 'react'
//import page route
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Post from "./pages/Post"
import Registration from "./pages/Registration"
import Login from "./pages/Login"

//allows up to set up multiple routes
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to = "/createpost">Create A Post</Link>
          <Link to = "/">Home Page</Link>
          <Link to = "/login">Login</Link>
          <Link to = "/registration">Registration</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}exact/>
          <Route path="/createpost" element={<CreatePost/>}exact/>
          <Route path="/post/:id" element={<Post/>}exact/>
          <Route path="/registration" element={<Registration/>}exact/>
          <Route path="/login" element={<Login/>}exact/>
        </Routes>
      </Router>
    </div>
  ) //return paths to routes, Routes tells code to render first component of route and keeps going even if fails
}

export default App;
