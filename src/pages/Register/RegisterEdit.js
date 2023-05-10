import React from 'react'
import Authimg from '../../assets/img/bgAuth.jpg';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CloseOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';


export default function RegisterEdit() {


    const navigate = useNavigate();



    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            email: '',
            matKhau: '',
            nhapLaiMatKhau: '',



        },
        validationSchema: Yup.object({
            taiKhoan: Yup
                .string()
                .required('Vui lòng nhập tài khoản để khởi tạo'),
            email: Yup.string()
                .email('Email không phù hợp')
                .required('Email không được để trống'),
            matKhau: Yup.string()
                .required('Mật khẩu không được để trống')
                .min(6, 'Mật khẩu ít nhất phải từ 6 trở lên'),
            nhapLaiMatKhau: Yup
                .string()
                .required('Vui lòng xác nhận lại mật khẩu của bạn.')
                .oneOf([Yup.ref('matKhau')], 'Nhập mật khẩu không khớp'),




        }),


        onSubmit: values => {
            // gọi hàm call API ở đây

            Swal.fire({
              title:'Tạo tài khoản thành công',
              text:'Bạn sẽ trở về trang chủ trong chốc lát!',
              icon:'success',
              showConfirmButton: false,
              timer:1500
              
            })
            setTimeout(()=>{navigate("/")},3000)
            

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
                            Đăng Ký
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                            <div>
                                <label htmlFor="taiKhoan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập vào tài khoản</label>
                                <input type="taiKhoan"
                                    name="taiKhoan" value={formik.values.taiKhoan}
                                    onChange={formik.handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 " placeholder="name@company.com" />
                                {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                    <p style={{color:'red', paddingTop:'10px', paddingLeft:'10px'}} >{formik.errors.taiKhoan}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập vào email của bạn</label>
                                <input type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" />
                                {formik.errors.email && formik.touched.email && (
                                    <p style={{color:'red', paddingTop:'10px', paddingLeft:'10px'}}>{formik.errors.email}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="matKhau" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập vào mật khẩu</label>
                                <input type="password"
                                    name="matKhau"
                                    value={formik.values.matKhau}
                                    onChange={formik.handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " />
                                {formik.errors.matKhau && formik.touched.matKhau && (
                                    <p style={{color:'red', paddingTop:'10px', paddingLeft:'10px'}} >{formik.errors.matKhau}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="nhapLaiMatKhau" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Xác nhận lại mật khẩu</label>
                                <input type="password"
                                    name="nhapLaiMatKhau"
                                    value={formik.values.nhapLaiMatKhau}
                                    onChange={formik.handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                {formik.errors.nhapLaiMatKhau && formik.nhapLaiMatKhau && (
                                    <p style={{color:'red', paddingTop:'10px', paddingLeft:'10px'}}>{formik.errors.confirm_password}</p>
                                )}
                            </div>


                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-200 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tạo tài khoản mới</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Bạn đã có tài khoản? <a href="#" className="font-medium text-primary-600 hover:underline ">Nhấn vào đây để trở lại đăng nhập</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
