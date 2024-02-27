/**
 *  router : component(장면) 변환
 */
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import User from './component/User';
import Bbs from './component/Bbs';
import Pds from './component/Pds';
import Home from './component/Home';
import About from './component/About';
import Topics from './component/Topics';
import News from './component/News';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <span>
            <Link to="/">Home</Link>
          </span>
          &nbsp;
          <span>
            <Link to="/about">About</Link>
          </span>
          &nbsp;
          <span>
            <Link to="/user">User</Link>
          </span>
          &nbsp;
          <span>
            <Link to="/topics">Topics</Link>
          </span>
          &nbsp;
          <span>
            <Link to="/bbs">자유게시판</Link>
          </span>
          &nbsp;
          <span>
            <Link to="/pds">자료실</Link>
          </span>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/topics/:top" element={<News />}></Route>
          <Route path="/bbs" element={<Bbs />}></Route>
          <Route path="/pds" element={<Pds />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
