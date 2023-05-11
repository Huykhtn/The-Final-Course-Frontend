import React, { Fragment } from 'react'
import "./CheckOut.css"
import style from '../CheckOut/CheckOut.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import { CheckOutlined, CloseOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { CHUYEN_TAB, DAT_VE } from '../../redux/actions/types/QuanLyDatGhe'
import _ from 'lodash';
import moment from 'moment';
import { ThongTinDatVe } from '../../_core/ThongTinDatVe';
import { layThongTinNguoiDungAction } from '../../redux/actions/quanLyNguoiDungAction';
import Swal from 'sweetalert2';
import { Skeleton } from 'antd';
import { TOKEN, USER_LOGIN } from '../../ultis/config';


function CheckOutTicket(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  const param = useParams();





  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {

    const { id } = param;
    const action = layChiTietPhongVeAction(id);

    dispatch(action);



  }, [])

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

      let classGheDaDuocDat = '';
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat';
      }


      if (indexGheDD != -1) {
        classGheDaDat = 'gheDangDat';
      }


      return <Fragment key={index}>
        <button onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} text-center`} key={index}>

          {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : ghe.stt}

        </button>

        {(index + 1) % 16 === 0 ? <br /> : ''}

      </Fragment>
    })
  }


  return (
    <div className=' mt-5 ' >

      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          <div className='flex flex-col items-center mt-5'>



            <div className="bg-black " style={{ width: '80%', height: 15 }}>
            </div>


            <div className={`${style['trapezoid']} text-center`}>
              <h3 className="mt-3 text-black">Màn hình</h3>
            </div>
            <div>
              {renderSeats()}
            </div>

          </div>
          <div className="mt-5 flex justify-center">
            <table className=" divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                  <td><button className="ghe gheDangDat text-center"> <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                  <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                  <td><button className="ghe gheDaDat text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                  <td><button className="ghe gheDaDuocDat text-center"> <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                </tr>
              </tbody>
            </table>
          </div>





        </div>
        <div className='col-span-3'>
          <h3 className="text-green-400 text-center text-4xl"> {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
          }, 0).toLocaleString()} đ</h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
          <p className='text-slate-700'>Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p className='text-slate-700'>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} </p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>

              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return <span key={index} className="text-green-500 text-xl"> {gheDD.stt}</span>
              })}
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">
                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                  return tongTien += ghe.giaVe;
                }, 0).toLocaleString()}
              </span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}>
            <div onClick={() => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                iconColor: 'white',
                title: "<h5 style='color:white'>" + "Đặt vé thành công" + "</h5>",
                background: 'green',
                showConfirmButton: false,
                timer: 1500

              })


              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = param.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              console.log("Thông tin đặt vé ", thongTinDatVe);

              dispatch(datVeAction(thongTinDatVe));


              dispatch({ type: CHUYEN_TAB });








            }} className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
              ĐẶT VÉ
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}
function KetQuaDatVe(props) {

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
            {thongTinNguoiDung.thongTinDatVe && renderTicket()}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                            <p className="text-gray-500">10:20 Rạp 5, Hệ thống rạp cinestar bhd </p>
                        </div>
                    </div>
                </div> */}
            {!thongTinNguoiDung.thongTinDatVe && <Skeleton
              avatar
              paragraph={{
                rows: 4,
              }}
            />}

          </div>
        </div>
      </section>

    </div>

  )
}



const items = [
  {
    key: '1',
    label: `01 CHỌN GHẾ & THANH TOÁN`,
    children: <CheckOutTicket />,
  },
  {
    key: '2',
    label: `02 KẾT QUẢ ĐẶT VÉ`,
    children: <KetQuaDatVe />,
  },

];
function Demo(props) {
  const { tabActive } = useSelector(state => state.QuanLyDatVeReducer);
  console.log("TabActive là ", tabActive);
  const dispatch = useDispatch();
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  const navigate = useNavigate();


  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action)
  }, [])
 



  return (
    <div style={{paddingTop:'100px'}}>


      <Tabs   defaultActiveKey="1" activeKey={tabActive} items={items} onChange={(key) => {
        dispatch({
          type: 'CHANGE_TAB_ACTIVE',
          number: key
        })

      }} tabBarStyle={{ width: '70vw', marginLeft: '20px', marginTop: '20px' }} />;

    </div>

  )
}
export default Demo;