import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'

export default function Footer(props) {

  const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);

  console.log("he thong rap chieu", heThongRapChieu);
  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, ['maHeThongRap', 'tenHeThongRap', 'logo']));
  console.log("propsFooter", arrHeThongRap);


  return (
    <footer className="py-4 bg-coolGray-100 text-coolGray-900 bg-gray-800" style={{height:'25vh'}}>
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a href="#" className="flex justify-center space-x-3 md:justify-start text-black">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 rounded-full text-coolGray-50">
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold text-white">Rap.VN</span>
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-white">PARTNER</p>
            <div className="grid grid-cols-3" style={{ color: '#fff' }}>
              {arrHeThongRap.map((htr, index) => {
                return <div key={index}>
                  <img src={htr.logo} style={{ width: 50 }} />
                </div>
              })}
            </div>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
                        <p className="pb-1 text-lg font-medium">Mobile app</p>
                        <div className="flex text-white">
                            <div className="mr-5">
                            <AppleOutlined className="text-2xl" /> 
                            </div>
                            <div>
                            <FacebookOutlined className="text-2xl"/>
                            </div>
                          
                        </div>
                    </div>

        </div>
      
      </div>
    </footer>

  )
}