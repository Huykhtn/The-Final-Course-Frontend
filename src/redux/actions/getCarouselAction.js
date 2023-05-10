import axios from "axios"

export const getCarouselAction = ()=>{
 return   async (dispatch)=>{
        try {
            
            const result = await axios({
            url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
            method: 'GET'
            });
            //đưa dữ liệu lên reducer
            console.log('result',result);
            dispatch({
                type:'SET_CAROUSEL',
                arrImg: result.data.content
            })

        } catch (error) {
            console.log('error',error);
        }
   };
}
