

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './Layout/Home/HomeLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Blog from './pages/Blog/Blog';
import NoPage from './pages/NoPage';
import 'antd/dist/reset.css';
import HomePage from './pages/HomePage/HomePage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail/Detail';

import CheckOutTemplate from './Layout/CheckOut/CheckOut';
import CheckOutTicket from './Layout/CheckOut/CheckOutTicket';
import RegisterEdit from './pages/Register/RegisterEdit';
import LoginEdit from './pages/Login/LoginEdit';
import Profile from './Profile_Page/Profile';
import MyLoader from './Loader/Loader';
import HeadBodyGrid from './Loader/Loader';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

          
          <Route path='/blog' element={<Blog />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Route>
      
        <Route path='/loginedit' element={<LoginEdit />} />
        <Route path='/registeredit' element={<RegisterEdit />} />
     
        <Route element={<CheckOutTemplate />}>
          <Route path='/checkout/:id' element={<CheckOutTicket />} />
        </Route>

        <Route path="*" element={<NoPage />} />
        <Route path='/profile' element={<Profile />} />
        
      </Routes>

    </BrowserRouter>








  );
}

export default App;
