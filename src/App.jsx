import { useState } from 'react';
import Email from './Components/Email/Email';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IdAndPassword from './Components/IdAndPassword/IdAndPassword';
import TreasureHome from './Components/TreasureHome/TreasureHome';
import Login from './Components/Login/Login';
import Posts from './Components/Posts/Posts';
// import Admin from './Components/Admin/Admin';
import './App.css'
import Findme from './Components/Findme/Findme';
import IamHidden from './Components/IamHidden/IamHidden';
import Wiki from './Components/Wiki/Wiki';
import './App.css';
import Check from './Components/Check/Check';
import Admin from './Components/Admin/Admin';
import { Navbar, Footer, Sidebar, ThemeSettings } from './Components';
import {
  Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line,
  Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor
} from './Pages';
import { useStateContext } from './contexts/ContextProvider';
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
        <Route path='/admin' element={<Admin />} />

        {/* Admin Routes  */}
        {/* dashboard  */}
        {/* <Route path="/admin" element={(<Ecommerce />)} /> */}
        <Route path="/ecommerce" element={(<Ecommerce />)} />

        {/* pages  */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />

        {/* apps  */}
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/color-picker" element={<ColorPicker />} />

        {/* charts  */}
        <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/color-mapping" element={<ColorMapping />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
