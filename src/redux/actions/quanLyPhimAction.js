import axios from "axios";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhim";

export const layDanhSachPhimAction = () => {


    return async (dispatch) => {
        try {

            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            //đưa dữ liệu lên reducer
            console.log('result', result);
            console.log('result', result.data.content);
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })

        } catch (error) {
            console.log('error', error);
        }
    };
}