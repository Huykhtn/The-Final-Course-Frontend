
import { quanLyDatVeService } from "../../service/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/ThongTinDatVe";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatGhe";





export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {

            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            console.log('result',result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }


        } catch (error) {

            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {


    return async dispatch => {
        try {
            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log('thông tin đặt vé: ',result);
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})


        } catch (error) {
            console.log(error.response.data);
        }
    }

}
