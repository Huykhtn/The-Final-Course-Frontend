import React from 'react'
import Authimg from '../../assets/img/bgAuth.jpg';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CheckOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import { TOKEN, USER_LOGIN } from '../../ultis/config';
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction';
import Swal from 'sweetalert2';










export default function LoginEdit() {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log('userLogin', userLogin);

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
            if (localStorage.getItem(TOKEN)) {
                Swal.fire({
                    title:'Đăng nhập thành công',
                    text:'Bạn sẽ trở về trang trước trong chốc lát!',
                    icon:'success',
                    showConfirmButton: false,
                    timer:1500
                    
                  })
               

               navigate(-1)
            }
           
            
            

        }
    })





    return (
        <section className="bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: `url(${Authimg})`, minHeight: '100vh' }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                <div className="w-full bg-white rounded-lg relative shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <button class="bg-transparent absolute  text-red-700 font-semibold border border-red-500 rounded-full "
                        style={{ width: '30px', height: '30px', right: '-13px', top: '-13px' }} onClick={() => {
                            navigate('/')
                        }}>
                        <CloseOutlined />
                    </button>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng Nhập
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                            <div>
                                <label htmlFor="taiKhoan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập vào tài khoản</label>
                                <input onChange={formik.handleChange} type="taiKhoan" name="taiKhoan" id="taiKhoan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />

                            </div>

                            <div>
                                <label htmlFor="matKhau" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập vào mật khẩu</label>
                                <input onChange={formik.handleChange} type="password" name="matKhau" id="matKhau" placeholder=" " className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>


                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-200 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đăng Nhập</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Quên mật khẩu? <NavLink to="/registeredit" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Chưa có tài khoản</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
