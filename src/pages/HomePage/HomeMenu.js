import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';

const { TabPane } = Tabs;

export default class Demo extends React.PureComponent {
    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };

    componentDidMount() {

    }
    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={<div style={{ width: '300px', display: 'flex' }}>
                            <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" />
                            <br />
                            <div className='text-left ml-2'>{cumRap.tenCumRap}

                                <p className='text-red-200'>Chi tiết</p>
                            </div>

                        </div>
                        } key={index}>
                            {cumRap.danhSachPhim.slice(0,4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='my-5' >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{width:100,height:100}}  src={phim.hinhAnh} alt={phim.tenPhim} />
                                            <div className='ml-2'>
                                                <h3 className=' text-xl text-green-800'>{phim.tenPhim}</h3>
                                                <p>{cumRap.diaChi}</p>
                                                <div className='grid grid-cols-2 gap 10'>
                                                    {phim.lstLichChieuTheoPhim?.slice(0,4).map((lichChieu,index)=>{
                                                        return <NavLink to="/" key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}

                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>



                                        </div>
                                        
                                    </div>

                                </Fragment>
                            })}

                        </TabPane>

                    })}
                </Tabs>
            </TabPane>
        })

    }
    render() {
        console.log(this.props, 'props123');
        const { tabPosition } = this.state;
        return (
            <>

                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        );
    }
}