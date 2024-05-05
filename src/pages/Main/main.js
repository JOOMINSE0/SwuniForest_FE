import React, { useState } from 'react';
import { ReactComponent as Sidebar } from '../../assets/Sidebar.svg';
import { ReactComponent as Myinfo } from '../../assets/Myinfo.svg';
import "./main.css";


function Main() {
  const [activeBox, setActiveBox] = useState('');

  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
  };

  return (

  
    <div className="iphone-frame">
      <button className="sidebar-button"><Sidebar/></button>
      <button className="myinfo-button"><Myinfo/></button>

      <img className='background' src="../../../img/Background.png" alt="배경"
      style={{ width: "349px", height: "355px" }}/>

      <div className='btn-list'>
        <b onClick={() => handleBoxClick('학과부스')} type="button" className={activeBox === '학과부스' ? 'active' : ''}>학과부스</b> 
        <b onClick={() => handleBoxClick('푸드트럭')} type="button" className={activeBox === '푸드트럭' ? 'active' : ''}>푸드트럭</b> 
        <b onClick={() => handleBoxClick('포토부스')} type="button" className={activeBox === '포토부스' ? 'active' : ''}>포토부스</b> 
        <b onClick={() => handleBoxClick('플리마켓')} type="button" className={activeBox === '플리마켓' ? 'active' : ''}>플리마켓</b> 
      </div>

      <div className='box1'></div>
      <div className='box2'></div>
      <div className='box2'></div>
      <div className='box4'></div>


</div>
  );
}

export default Main;
