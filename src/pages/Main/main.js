import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as SidebarIcon } from '../../assets/Sidebar.svg';
import { ReactComponent as Myinfo } from '../../assets/Myinfo.svg';
import Sidebar from '../../Components/Sidebar/sidebar.js'; 
import "./main.css";

function Main() {
  const [activeBox, setActiveBox] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  let navigate = useNavigate();

  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="iphone-frame1">
      <button className='StampBtn' onClick={() => navigate('/stamp')}>
        <img style={{ width: "55px", height: "55px", cursor: "pointer" }} src='../../../img/StampBtn.png' alt="Stamp Button"></img>
      </button>

      <button className="sidebar-button" onClick={toggleSidebar}><SidebarIcon/></button>
      {isSidebarVisible && <Sidebar style={{zIndex:"10"}} onToggle={toggleSidebar} />} {/* 조건부 렌더링 */}

      <button onClick={() => navigate('/login1')} className="myinfo-button"><Myinfo/></button>

      <img className='background' src="../../../img/Background.png" alt="배경"
      style={{ width: "349px", height: "355px", position:"absolute" }}/>

      <div className='btn-list'>
        <b onClick={()=>navigate('/mainBtn1')}>학과부스</b>
          <b onClick={()=>navigate('/mainBtn2')}>푸드트럭</b>
          <b onClick={()=>navigate('/mainBtn3')}>포토부스</b>
        <b onClick={()=>navigate('/mainBtn4')}>플리마켓</b>
      </div>
      
      <button className='box1'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>학과부스</b>
      </button>
      <button className='box2'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>푸드트럭</b>
        </button>
      <button className='box3'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>포토부스</b>
        </button>
      <button className='box4'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>플리마켓</b>
        </button>
      

      <div className='visitor-layout'>
        <div>접속자 수 • 128명</div>
      </div>
        <div className='madeby'>
        <p>서울여자대학교 멋쟁이사자처럼 12TH</p>
      </div>

</div>
  );
}

export default Main;