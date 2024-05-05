import React, { useState } from 'react';
import { ReactComponent as Sidebar } from '../../assets/Sidebar.svg';
import { ReactComponent as Myinfo } from '../../assets/Myinfo.svg';


import Background from '../../assets/Background.png'
import '../../App.css';


function Main() {
  const [activeBox, setActiveBox] = useState('');

  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
  };

  return (

  
    <div className="iphone-frame">
      <button className="sidebar-button"><Sidebar/></button>
      <button className="myinfo-button"><Myinfo/></button>

      <img className='background' src={Background} alt='이미지'/>

      {/* <div className="main-text">
        <p>고양이 스탬프를 모아봐요</p>
      </div> */}

      <div className='btn-list'>
        <b onClick={() => handleBoxClick('학과부스')} type="button" className={activeBox === '학과부스' ? 'active' : ''}>학과부스</b> 
        <b onClick={() => handleBoxClick('푸드트럭')} type="button" className={activeBox === '푸드트럭' ? 'active' : ''}>푸드트럭</b> 
        <b onClick={() => handleBoxClick('포토부스')} type="button" className={activeBox === '포토부스' ? 'active' : ''}>포토부스</b> 
        <b onClick={() => handleBoxClick('플리마켓')} type="button" className={activeBox === '플리마켓' ? 'active' : ''}>플리마켓</b> 
      </div>

      {/* <div className={`div-box1 ${activeBox === '학과부스' ? 'active' : ''}`} id="학과부스"></div>
      <div className={`div-box2 ${activeBox === '푸드트럭' ? 'active' : ''}`} id="푸드트럭"></div>
      <div className={`div-box3 ${activeBox === '포토부스' ? 'active' : ''}`} id="포토부스"></div>
      <div className={`div-box4 ${activeBox === '플리마켓' ? 'active' : ''}`} id="플리마켓"></div> */}


</div>
  );
}

export default Main;
