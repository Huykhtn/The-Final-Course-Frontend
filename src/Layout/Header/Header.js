import React, { Fragment, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/Green_Logo.png';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../ultis/config';
export default function Header() {

    const navigate = useNavigate();
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
   
    
    
    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    navigate('/loginedit')
                }} className="self-center px-8 py-3 rounded">Sign In</button>
                <button onClick={() => {
                    navigate('/registeredit')
                }} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">Sign Up</button>

            </Fragment>
        }


        return <Fragment> <button onClick={() => {



        }}> <div style={{ width: 50, height: 50, display:'flex', justifyItems:'end',padding:'10px 10px 10px 18px',marginRight:'20px' }} className="text-2xl ml-5 rounded-full bg-red-200 text-center">{userLogin.taiKhoan.substr(0, 1)}</div></button> 
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                navigate('/');
                window.location.reload();
            }} className="text-yellow-500 mr-5">Đăng xuất</button>
        </Fragment>
    }


    
    return (

        <header className ={` p-4 bg-coolGray-100 text-coolGray-800 ${colorChange ? '': 'bg-opacity-40'} bg-black text-white fixed w-full z-10`} >
        <div className="container flex justify-between h-16 mx-auto">
            <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
                <img src={logo} width={200} height={100} alt="GreenAcademy" />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                    <NavLink to="/" className={({isActive})=>{
                        const activeClass = isActive ? 'text-violet-600 border-violet-600' : 'text-white'
                        return`flex items-center -mb-0.5 border-b-2 px-4 border-transparent ${activeClass} hover:text-violet-600 hover:border-violet-600`

                    }} >Home</NavLink>
                </li>
                <li className="flex">
                <NavLink to="/contact" className={({isActive})=>{
                        const activeClass = isActive ? 'text-violet-600 border-violet-600' : 'text-white'
                        return`flex items-center -mb-0.5 border-b-2 px-4 border-transparent ${activeClass} hover:text-violet-600 hover:border-violet-600`

                    }} >Contact</NavLink>
                </li>
                <li className="flex">
                <NavLink to="/blog" className={({isActive})=>{
                        const activeClass = isActive ? 'text-violet-600 border-violet-600' : 'text-white'
                        return`flex items-center -mb-0.5 border-b-2 px-4 border-transparent ${activeClass} hover:text-violet-600 hover:border-violet-600`

                    }} >Blogs</NavLink>
                </li>

            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">
                {renderLogin()}
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>
    )
}
