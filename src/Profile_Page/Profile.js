import React from 'react'

import { useSelector } from 'react-redux';
import { Tabs } from 'antd';

function Profile() {
    const {userLogin} = useSelector(state=> state.QuanLyNguoiDungReducer);
    console.log(userLogin);

    const onChange = (key) => {
        console.log(key);
      };


    const items = [
        {
          key: '1',
          label: `Tab 1`,
          children: `Content of Tab Pane 1`,
        },
        {
          key: '2',
          label: `Tab 2`,
          children: `Content of Tab Pane 2`,
        },
        {
          key: '3',
          label: `Tab 3`,
          children: `Content of Tab Pane 3`,
        },
      ];


    return (


        <div className= " min-h-screen my-2 mx-2">
           
            
            <Tabs type="card" tabBarStyle={{marginLeft:'20px'}}  defaultActiveKey="1" items={items} onChange={onChange} size="large" />;



            
         
          
        </div>

    )
}

export default Profile