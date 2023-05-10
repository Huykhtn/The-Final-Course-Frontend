import axios from "axios";
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/quanLyNguoiDungtype";
import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungService";
import Swal from "sweetalert2";



export const dangNhapAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                }); 
                
               

            }

        } catch (error) {
            console.log('error', error.response.data);
            
        }

    }

}
export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
