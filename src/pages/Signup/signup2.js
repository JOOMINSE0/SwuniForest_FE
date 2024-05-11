import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from 'react';
import { ReactComponent as Gallery } from '../../assets/Gallery.svg';
import "./signup2.css";
import axios from "axios";

function Signup2() {
  let navigate = useNavigate();
  const [major, setDepartment] = useState('');
  const [username, setName] = useState('');
  const [studentNum, setStudentNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSelectChange = (event) => {
    setDepartment(event.target.value);
    console.log("선택된 학과:", event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);
  const fetchURL = "https://eeb7-221-140-29-184.ngrok-free.app/"
  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // 확인 버튼 클릭 이벤트 핸들러
  const handleConfirmClick = async () => {
    if (!isChecked) {
      alert('개인정보 수집 이용에 동의해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const data = {
      studentNum: studentNum,
      username: username,
      major: major,
      password: password
    };

    try {
      const response = await axios.post(fetchURL + 'api/signup', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.visited === true) {
        alert("이미 존재하는 회원입니다.");
      } else {
        navigate('/login1');
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("이미 존재하는 회원입니다.");
      } else {
        console.error('Error:', error);
        alert('서버와의 통신 중 오류가 발생했습니다.');
      }
    }
  };

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="iphone-frame">
      <p className="login-title">회원가입</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{ marginTop: "9%" }}
        onClick={() => navigate(-1)}
      />

      <div className="intro-box">
        <p>회원가입을 위해 서울여자대학교 도서관 앱 내<br />‘모바일 열람증’ 캡쳐본을 첨부해주세요.</p>
      </div>

      <label style={{ marginTop: "30%" }} className="label-mobile">모바일 열람증 첨부</label>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button style={{ marginTop: "-5%", marginLeft: "80%", width: "25px", height: "25px", borderStyle: "none", backgroundColor: "#ffffff", cursor: "pointer" }} onClick={handleAttachClick}>
        <Gallery style={{ marginTop: "-5%", marginLeft: "-50%", width: "25px", height: "25px" }} />
      </button>
      {imagePreview && (
        <img src={imagePreview} alt="Preview" style={{ width: '30%', marginTop: '10%', marginLeft: "-0%" }} />
      )}
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginTop: "5%", marginBottom: "15%" }}></div>

      <p style={{ color: '#898A8D' }}>이름, 학과, 학번이 올바르게 기입되었는지<br /> 다시 한번 확인해주세요</p>

      <label className="label-name">이름</label>
      <input
        style={{ height: "50px" }}
        className="input2"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom: "10px" }}></div>

      <label className="label-major">학과</label>
      <select
        value={major}
        onChange={handleSelectChange}
        style={{ height: "50px" }}
        className="input2"
      >
    <option value="">학과를 선택하세요</option>
    <option value="자율전공학부">자율전공학부</option>
    <option value="글로벌ICT인문융합부">글로벌ICT인문융합부</option>
    <option value="국어국문학과">국어국문학과</option>
    <option value="영어영문학과">영어영문학과</option>
    <option value="중어중문학과">중어중문학과</option>
    <option value="일어일문학과">일어일문학과</option>
    <option value="사학과">사학과</option>
    <option value="기독교학과">기독교학과</option>
    <option value="경제학과">경제학과</option>
    <option value="문헌정보학과">문헌정보학과</option>
    <option value="사회복지학과">사회복지학과</option>
    <option value="아동학과">아동학과</option>
    <option value="행정학과">행정학과</option>
    <option value="언론영상학부">언론영상학부</option>
    <option value="교육심리학과">교육심리학과</option>
    <option value="스포츠운동과학과">스포츠운동과학과</option>
    <option value="수학과">수학과</option>
    <option value="화학과">화학과</option>
    <option value="생명환경공학과">생명환경공학과</option>
    <option value="바이오헬스융합학과">바이오헬스융합학과</option>
    <option value="원예생명조경학과">원예생명조경학과</option>
    <option value="식품공학과">식품공학과</option>
    <option value="식품영양학과">식품영양학과</option>
    <option value="경영학과">경영학과</option>
    <option value="패션산업학과">패션산업학과</option>
    <option value="디지털미디어학과">디지털미디어학과</option>
    <option value="정보보호학부">정보보호학부</option>
    <option value="소프트웨어융합학과">소프트웨어융합학과</option>
    <option value="데이터사이언스학과">데이터사이언스학과</option>
    <option value="산업디자인학과">산업디자인학과</option>
    <option value="현대미술전공">현대미술전공</option>
    <option value="공예전공">공예전공</option>
    <option value="시각디자인전공">시각디자인전공</option>
    <option value="첨단미디어디자인전공">첨단미디어디자인전공</option>

      </select>
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom: "10px" }}></div>

      <label className="label-stid">학번</label>
      <input
        style={{ height: "50px" }}
        className="input2"
        value={studentNum}
        onChange={(e) => setStudentNum(e.target.value)}
      />
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom: "10px" }}></div>

      <label className="label-pw">비밀번호</label>
      <input
        style={{ height: "50px" }}
        className="input2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom: "10px" }}></div>

      <label className="label-pwcheck">비밀번호 확인</label>
      <input
        style={{ height: "50px" }}
        className="input2"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom: "70px" }}></div>

      <div style={{ marginLeft: "-15%" }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <b style={{ color: "#575757" }}>(필수) 개인정보 수집 이용에 동의합니다.</b>
      </div>

      <button
        onClick={handleConfirmClick}
        className="confirmButton2"
        style={{ fontSize: "20px", color: "#ffffff", cursor: "pointer" }}
      >
        <b>확인</b>
      </button>
    </div>
  );
}

export default Signup2;