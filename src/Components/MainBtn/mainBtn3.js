import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ReactComponent as SidebarIcon } from '../../assets/Sidebar.svg';
import { ReactComponent as Myinfo } from '../../assets/Myinfo.svg';
import "./mainBtn3.css";
import axios from 'axios';
import Sidebar from '../Sidebar/sidebar.js';

function MainBtn3() {
  const [activeBox, setActiveBox] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [totalVisitCount, setTotalVisitCount] = useState(0);  // 접속자 수 카운트
  let navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
      axios.get('https://db30-221-140-29-184.ngrok-free.app/', {
          headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
          }
      })
      .then(response => {
          setTotalVisitCount(response.data.totalVisitCount);
          console.log(response.data.totalVisitCount);
      })
      .catch(error => {
          console.error('접속자 수 에러:', error);
          setError('접속자 수를 불러오는데 실패했습니다.');
      });
  }, []);


  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleNavigate = (category) => {
    setActiveBox(category);
    navigate('/booth', { state: { selectedCategory: category } });
  };
  return (
    <div className="iphone-frame1">
      <button className='StampBtn' onClick={() => navigate('/stamp')} style={{ cursor: "pointer" }}>
        <img style={{ width: "55px", height: "55px" }}
          src='../../../img/StampBtn.png'></img></button>

    <button className="sidebar-button" onClick={toggleSidebar}><SidebarIcon /></button>
            {isSidebarVisible && <Sidebar style={{ zIndex: "10" }} onToggle={toggleSidebar} />} {/* 조건부 렌더링 */}
      <button onClick={() => navigate('/login1')}
        className="myinfo-button"><Myinfo /></button>

      <img className='background' src="../../../img/Background.png" alt="배경"
                style={{ width: "349px", height: "355px", position: "absolute" }} />

      <div className='btn-list'>
        <b onClick={() => navigate('/mainBtn1')}>학과부스</b>
        <b onClick={() => navigate('/mainBtn2')}>푸드트럭</b>
        <b onClick={() => navigate('/mainBtn3')}>포토부스</b>
        <b onClick={() => navigate('/mainBtn4')}>플리마켓</b>
      </div>

      <button className='Btn3box1'>
        <b style={{ color: "#ffffff", marginTop: "20%", marginLeft: "-30%", position: "absolute" }}>학과부스</b>
      </button>
      <button className='Btn3box2'>
        <b style={{ color: "#ffffff", marginTop: "20%", marginLeft: "-30%", position: "absolute" }}>푸드트럭</b>
      </button>
      <button className='Btn3box3' onClick={() => handleNavigate('포토부스')}>
        <b style={{ fontSize: "24px", color: "#5A776D", marginTop: "20%", marginLeft: "-30%", position: "absolute" }}>포토부스</b>
      </button>
      <button className='Btn3box4'>
        <b style={{ color: "#ffffff", marginTop: "20%", marginLeft: "-30%", position: "absolute" }}>플리마켓</b>
      </button>

      {error && <div className="error-message">{error}</div>}
            <div className='visitor-layout'>
                <div>접속자 수 • {totalVisitCount}명</div>
            </div>
      <div className='madeby'>
        <p>서울여자대학교 멋쟁이사자처럼 12TH</p>
      </div>

    </div>

  )
}

export default MainBtn3;