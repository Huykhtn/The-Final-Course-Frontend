import { useFormik } from 'formik'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGIN } from '../../ultis/config';
import logo from '../../assets/img/Green_Logo.png';

export default function Login(props) {
  

  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);
  console.log('userLogin',userLogin);
  const navigate = useNavigate();



  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },

    onSubmit: values => {
      const action = dangNhapAction(values);
      dispatch(action);
      if(localStorage.getItem(USER_LOGIN)){
        navigate(-1);
      }
     
      console.log('values', values);
     
    }





  })



  return (
    <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm" style={{ minHeight: '100vh' }}>
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
         
          <img src={logo} width={200} height={100} alt="GreenAcademy" />
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold">Đăng nhập</h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
              <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
                <div>
                  <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                          cursor-pointer">
                    Quên mật khẩu ?
                  </a>
                </div>
              </div>
              <input type="password" name="matKhau" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào mật khẩu" />
            </div>
            <div className="mt-10">
              <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg">
                Đăng nhập
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn chưa có tài khoản ? <NavLink to="/" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
          </div>
        </div>
      </div>
    </form>
  )
}
