import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { ReactComponent as Gallery } from '../../assets/Gallery.svg';
import "./signup2.css";

function Signup2() {
  let navigate = useNavigate();
  const [department, setDepartment] = useState('');

  const handleSelectChange = (event) => {
    setDepartment(event.target.value);
    console.log("선택된 학과:", event.target.value); 
    };

  const [isChecked, setIsChecked] = useState(false);
  
    // 체크박스 상태 변경 함수
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    // 확인 버튼 클릭 이벤트 핸들러
    const handleConfirmClick = () => {
      if (isChecked) {
        navigate('/login1'); 
      } else {
        alert('개인정보 수집 이용에 동의해주세요.');
      }
    };

  return (
    <div className="iphone-frame">
      <p className="login-title">회원가입</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{marginTop:"9%"}}
        onClick={() => navigate(-1)}
      />

      <div className="intro-box">
        <pr>회원가입을 위해 서울여자대학교 도서관 앱 내<br/>‘모바일 열람증’ 캡쳐본을 첨부해주세요.</pr>
      </div>

      <label style={{marginTop:"60%"}} className="label-mobile">모바일 열람증 첨부</label>
      <Gallery style={{marginTop:"-5%",marginLeft:"80%", width:"25px", height:"25px"}}/>
      <div style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginTop:"10%", marginBottom:"15%"}}></div>

      <p>이름, 학과, 학번이 올바르게 기입되었는지<br/> 다시 한번 확인해주세요</p>
      
      <label className="label-name">이름</label>
      <input style={{height:"50px"}} className="input2"></input>
      <div style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom:"10px"}}></div>
      

      <label className="label-major">학과</label>
      <select
                value={department}
                onChange={handleSelectChange}
                style={{ height: "50px" }}
                className="input2" 
            >
                <option value="">학과를 선택하세요</option>
                <option value="Economics">경제학과</option>
                <option value="Business">경영학과</option>
                <option value="Software">소프트웨어융합학과</option>
                <option value="Cybersecurity">정보보호학과</option>
                <option value="DigitalMedia">디지털미디어학과</option>
                <option value="DataSience">데이터사이언스학과</option>

            </select>
      <div style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom:"10px"}}></div>

      <label className="label-stid">학번</label>
      <input style={{height:"50px"}} className="input2"></input>
      <div style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom:"10px"}}></div>

      <label className="label-pw">비밀번호</label>
      <input style={{height:"50px"}} className="input2"></input>
      <div style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom:"10px"}}></div>

      <label className="label-pwcheck">비밀번호 확인</label>
      <input style={{height:"50px"}} className="input2"></input>
      <div style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom:"70px"}}></div>

      <div style={{ marginLeft:"-15%"}}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <b style={{ color:"#575757" }}>(필수) 개인정보 수집 이용에 동의합니다.</b>
      </div>

      <button
        onClick={handleConfirmClick}
        className="confirmButton2"
        style={{ fontSize:"20px", color:"#ffffff", cursor:"pointer" }}
      >
        <b>확인</b>
      </button>
    </div>
  );
}

export default Signup2;
