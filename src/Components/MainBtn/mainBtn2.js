import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { ReactComponent as Sidebar } from '../../assets/Sidebar.svg';
import { ReactComponent as Myinfo } from '../../assets/Myinfo.svg';
import "./mainBtn2.css";

function MainBtn2(){
    const [activeBox, setActiveBox] = useState('');
    let navigate = useNavigate();
  
    const handleBoxClick = (boxName) => {
      setActiveBox(boxName);
    };

return(
<div className="iphone-frame1">
      <button className='StampBtn' onClick={()=>navigate('/stamp')} style={{cursor: "pointer"}}>
        <img style={{ width: "55px", height: "55px" }} 
      src='../../../img/StampBtn.png'></img></button>

      <button className="sidebar-button"><Sidebar/></button>
      <button onClick={() => navigate('/login1')}
       className="myinfo-button"><Myinfo/></button>

      <img className='background' src="../../../img/Background.png" alt="배경"
      style={{ width: "349px", height: "355px" }}/>

    <div className='btn-list'>
        <b onClick={()=>navigate('/mainBtn1')}>학과부스</b>
          <b onClick={()=>navigate('/mainBtn2')}>푸드트럭</b>
          <b onClick={()=>navigate('/mainBtn3')}>포토부스</b>
        <b onClick={()=>navigate('/mainBtn4')}>플리마켓</b>
      </div>
      
      <button className='Btn2box1'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>학과부스</b>
      </button>
      <button className='Btn2box2'>
        <b style={{fontSize:"24px", color:"#5A776D", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>푸드트럭</b>
        </button>
      <button className='Btn2box3'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>포토부스</b>
        </button>
      <button className='Btn2box4'>
        <b style={{color:"#ffffff", marginTop:"20%",marginLeft:"-30%", position:"absolute"}}>플리마켓</b>
        </button>
      
      <div className='madeby'>

        <p style={{color:"#ffffff",position:"absolute", marginTop:"89%", zIndex:"1",
      fontSize:"15px", marginLeft:"-35px"}}>서울여자대학교 멋쟁이사자처럼 12TH</p>
      </div>

</div>

)
}

export default MainBtn2;