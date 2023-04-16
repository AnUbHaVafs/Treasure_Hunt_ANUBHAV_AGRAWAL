import { useState } from 'react';
import Email from './Components/Email/Email';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IdAndPassword from './Components/IdAndPassword/IdAndPassword';
import TreasureHome from './Components/TreasureHome/TreasureHome';
import Login from './Components/Login/Login';
import Posts from './Components/Posts/Posts';
import './App.css'
import Findme from './Components/Findme/Findme';
import IamHidden from './Components/IamHidden/IamHidden';
import Wiki from './Components/Wiki/Wiki';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Email />} />
        <Route path='/idpassword' element={<IdAndPassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<TreasureHome />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/wikiClue' element={<Findme />} />
        <Route path='/iamhidden' element={<IamHidden />} />
        <Route path='/wiki' element={<Wiki />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
