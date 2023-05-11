import React, { Fragment, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import moment from 'moment';
import { layThongTinNguoiDungAction } from '../redux/actions/quanLyNguoiDungAction';
import _ from 'lodash';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { EditOutlined } from '@ant-design/icons';


function LichSuDatVe(props) {

  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);



  console.log("Thông tin người dùng", thongTinNguoiDung);
  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action)
  }, [])

  const renderTicket = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-pink-500 title-font font-medium text-2xl">{ticket.tenPhim}</h2>
            <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
            <p><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>
            <p>
              <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
            </p>
          </div>
        </div>
      </div>
    })
  }


  return (
    <div className="p-5">

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">Lịch sử đặt vé khách hàng</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !</p>

          </div>
          <div className="flex flex-wrap -m-2">
            {renderTicket()}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                            <p className="text-gray-500">10:20 Rạp 5, Hệ thống rạp cinestar bhd </p>
                        </div>
                    </div>
                </div> */}


          </div>
        </div>
      </section>

    </div>

  )
}
function ThongTinUser(props) {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  return (
    <div className="p-5">

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">Thông tin khách hàng</h1>

          </div>
          <div className="flex flex-wrap -m-2">

            <div className="p-2 w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
               
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Xin Chào {userLogin.taiKhoan}</h2>
                  <h2 className="text-gray-900 title-font font-medium">Email: {userLogin.email}</h2>
                  <h2 className="text-gray-900 title-font font-medium">SĐT: 090912135</h2>
                  
                </div>
              </div>

            </div>
            <div className="p-2 w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg" style={{position:'relative'}}>
               
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Tài khoản: {userLogin.taiKhoan}</h2>
                  <h2 className="text-gray-900 title-font font-medium">Mật khẩu: ******</h2> 
                  <button style={{position:'absolute',right:'8px',bottom:'8px'}} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><EditOutlined /></button> 
                  
                </div>

              </div>

            </div>


          </div>
        </div>
      </section>

    </div>

  )


}




function Profile() {


  const onChange = (key) => {
    console.log(key);
  };


  const items = [
    {
      key: '1',
      label: `THÔNG TIN CÁ NHÂN`,
      children: <ThongTinUser />,
    },
    {
      key: '2',
      label: `LỊCH SỬ ĐẶT VÉ`,
      children: <LichSuDatVe />,
    },
  ];


  return (
    <>

     
    <Header/>


    <div className=" min-h-screen my-2 mx-2" style={{paddingTop:'100px'}}>


      <Tabs type="card" tabBarStyle={{ marginLeft: '20px' }} defaultActiveKey="1" items={items} onChange={onChange} size="large" />;






    </div>
    <Footer/>
    </> 

  )
}

export default Profile