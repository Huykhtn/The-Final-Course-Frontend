import React from 'react'
import HomeMenu from './HomeMenu'
import MultipleRowSlick from '../../Layout/Banner/SlickFeature/MultipleRowSlick';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhimAction } from '../../redux/actions/quanLyPhimAction';
import { useEffect } from 'react';
import Film from '../../Layout/Banner/FilmFeature/Film';

import Demo from './HomeMenu';
import { layDanhSachHeThongRap } from '../../redux/actions/QuanLyRapAction';
import HomeBanner from '../../Layout/Banner/HomeBanner';
function HomePage(props) {
  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
 
  console.log('propsHome', props);
  const {heThongRapChieu} = useSelector(state=>state.QuanLyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
    dispatch(layDanhSachHeThongRap());
     //dispatch function từ thunk
  }, [])
  // const renderFilms = () => {
  //       return arrFilm.map((phim, index) => {
  //            return <Film key={index} />


  //        })
  //  }

  return (
    <div>
      <HomeBanner/>
      <div>
        <section className="text-gray-600 body-font" >
          <div className="container px-5 py-24 mx-auto " >

            <MultipleRowSlick arrFilm={arrFilm} />
            {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
          </div>
        </section>

        <div className="mx-36">
        <HomeMenu heThongRapChieu = {heThongRapChieu}/>

        </div>
      </div>

    </div>
  )
}

export default HomePage