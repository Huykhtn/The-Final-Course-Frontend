import { Carousel } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './HomeBanner.css'
import { getCarouselAction } from '../../redux/actions/getCarouselAction';
import { useNavigate } from 'react-router-dom';




function HomeBanner() {
    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    };
    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getCarouselAction());

    }, [])
    const navigate = useNavigate();

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` ,cursor:'pointer'}} onClick={()=>{
                    navigate(`/detail/${item.maPhim}`)
                }}>
                    <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <Carousel effect="fade"  >
            {renderImg()}

        </Carousel>
    )
}

export default HomeBanner