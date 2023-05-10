import axios from "axios";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";

export const layDanhSachHeThongRap = () => {


    return async dispatch => {
        try {

            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
                method: 'GET'
            });
            //đưa dữ liệu lên reducer
            console.log('result', result);
            console.log('result', result.data.content);
            if(result.status ===200){
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content
                })
            }
           

        } catch (error) {
            console.log('error', error);
        }
    };
}
export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try{
            const result = await axios({
                url:`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
                method:'GET'
            });

            console.log('result',result);
            //Lấy được dữ liệu từ api về  => reducer

            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })


        }
        catch(errors) {
            console.log('errors',errors.response?.data)

        }
    }
}
