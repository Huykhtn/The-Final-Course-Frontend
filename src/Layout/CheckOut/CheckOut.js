import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../ultis/config'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function CheckOutTemplate(props) {
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Navigate replace to="/loginedit" />;
    }
   
       
     else {
        return (
            <div>
                <Header/>
              
               <Outlet/>
               
                

                <Footer/>
            </div>
        );
    }
}

export default CheckOutTemplate