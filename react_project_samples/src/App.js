//import react from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';

import Bbslist from './bbs/Bbslist';
import Bbswrite from './bbs/Bbswrite';
import Bbsdetail from './bbs/Bbsdetail';
import Bbsupdate from './bbs/Bbsupdate';
import Bbsanswer from './bbs/Bbsanswer';

import Login from './member/Login';
import Regi from './member/Regi';

import "./App.css";
import Pdslist from './pds/Pdslist';
import Pdsupload from './pds/Pdsupload';
import Pdsdetail from './pds/Pdsdetail';
import Imageview from './component/Imageview';
import Calendar from './component/Calendar';
import Summernote from './component/Summernote';
import Infinityscoll from './component/Infinityscroll';

const App = () => {

  return (
    <div>
      <header className='py-4'>
        <Header />
      </header>

      <BrowserRouter>
        <nav className='navbar navbar-expand-md navbar-dark bg-info sticky-top'>
          <div className='container'>
            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav mr-auto">
                <li className='nav-item'>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/bbslist">게시판</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/pdslist">자료실</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/Imageview">미리보기</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/calendar">풀캘린더</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/summernote">썸머노트</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/infinityscroll">무한스크롤</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <div className='py-4'>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/login' element={<Login />} />
                <Route path='/regi' element={<Regi />} />

                <Route path='/bbslist' element={<Bbslist />} />
                <Route path='/bbswrite' element={<Bbswrite />} />
                <Route path='/bbsdetail/:seq' element={<Bbsdetail />} />
                <Route path='/bbsupdate/:seq' element={<Bbsupdate />} />
                <Route path='/bbsanswer/:seq' element={<Bbsanswer />} />

                <Route path='/pdslist' element={ <Pdslist /> } />
                <Route path='/pdsupload' element={ <Pdsupload /> } />
                <Route path='/pdsdetail/:seq' element={ <Pdsdetail /> } />

                <Route path='/imageview' element={ <Imageview/>} />
                <Route path='/calendar' element={ <Calendar/>} />
                <Route path='/summernote' element={ <Summernote/>} />
                <Route path='/infinityscroll' element={ <Infinityscoll/>} />

              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>

      <footer className="py-4 bg-info text-light">
        <Footer />
      </footer>
    </div>
  );
}

export default App;