import React, { useEffect } from 'react';
import './Detail.css'
import './circleRating.css';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment/moment';
import { Rate } from 'antd';

const { TabPane } = Tabs;

export default function Detail(props) {

  const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
  console.log({ filmDetail });

  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {


    let { id } = params;

    console.log("ID : ", id);
    dispatch(layThongTinChiTietPhim(id));







  }, [])






  return (
    <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', minHeight: '100vh', paddingTop: 100 }}>
      <div className='upper-layer' style={{ minHeight: '100vh' }} >
        <div className='grid grid-cols-12'>
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img className="col-span-1" src={filmDetail.hinhAnh} style={{ width: '100%', height: 300, marginTop: 50 }} alt="123" />
              <div className="col-span-2 ml-5" style={{ marginTop: '25%' }}>
                <p className="text-sm">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')} </p>
                <p className="text-3xl ">{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
              </div>
            </div>

          </div>
          <div className="col-span-4">
            <h1 style={{ marginLeft: '15%', marginTop: 50, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
            <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
              <span className="text-white">
                {filmDetail.danhGia * 10}%
              </span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>

              </div>

            </div>
            <br />

          </div>

        </div>
        <div className="mt-10 ml-72 w-3/4 container bg-white px-5 py-5">
          <Tabs size='large' defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div >
                <Tabs tabPosition={'left'} >
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return <TabPane
                      tab={<div className="flex flex-row items-center justify-center">
                        <img src={htr.logo} className="rounded-full w-full" style={{ width: 50 }} />
                        <div className="text-center ml-2">
                          {htr.tenHeThongRap}
                        </div>
                      </div>}
                      key={index}>
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return <div className="mt-5" key={index}>
                          <div className="flex flex-row">
                            <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} />
                            <div className="ml-2">
                              <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                              <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                            </div>
                          </div>
                          <div className="thong-tin-lich-chieu grid grid-cols-4">
                            {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                              return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                          </div>
                        </div>
                      })}



                    </TabPane>
                  })}


                </Tabs>
              </div>
            </TabPane>

            <TabPane tab="Thông tin" style={{ minHeight: 300 }} key="2">
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" style={{ minHeight: 300 }} key="3">
              Đánh giá
            </TabPane>

          </Tabs>

        </div>
      </div>



    </div>
  )
}
