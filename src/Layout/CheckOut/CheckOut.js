import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../ultis/config'


function CheckOutTemplate(props) {
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Navigate replace to="/loginedit" />;
    }
   
       
     else {
        return (
            <div>
                <Outlet/>
            </div>
        );
    }
}

export default CheckOutTemplate