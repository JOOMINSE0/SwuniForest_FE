import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from 'react';
import { ReactComponent as Gallery } from '../../assets/Gallery.svg';
import "./signup2.css";
import axios from "axios";

function Signup2() {
  let navigate = useNavigate();
  const [major, setMajor] = useState('');
  const [username, setUsername] = useState('');
  const [studentNum, setStudentNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSelectChange = (event) => {
    setMajor(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);
  const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwh5tfst.sel5.cloudtype.app/"

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
      studentNum,
      username,
      major,
      password
    };

    try {
      const response = await axios.post(fetchURL + 'api/signup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.visited === false) {
        navigate('/login2');
      } else {
        navigate('/login1');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('회원가입된 사용자입니다.');
      navigate('/login2');

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
      handleOCRSubmit(file);
    }
  };

  const handleOCRSubmit = async (file) => {
    const formData = new FormData();
    formData.append('imageFile', file);

    try {
      const ocrResponse = await axios.post(fetchURL + 'api/naverOcrPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (ocrResponse.status === 200) {
        // OCR결과
        const { studentNum, username, major } = ocrResponse.data;
        setStudentNum(studentNum);
        setUsername(username);
        setMajor(major);
      } else {
        throw new Error('OCR 처리 실패');
      }
    } catch (error) {
      console.error('OCR 요청 실패:', error);
      alert('OCR 처리 중 오류가 발생했습니다. 다시 시도해 주세요.');
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
      <label style={{ position: "relative", marginTop: "10%" }} className="label-mobile">모바일 열람증 첨부</label>
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
        <img src={imagePreview} alt="Preview" style={{ width: '30%', marginTop: '10%', marginLeft: "-0%", position: "relative" }} />
      )}
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginTop: "5%", marginBottom: "15%" }}></div>
      <p style={{ color: '#898A8D', position: "relative" }}>이름, 학과, 학번이 올바르게 기입되었는지<br /> 다시 한번 확인해주세요</p>
      <label className="label-name">이름</label>
      <input
        style={{ height: "50px" }}
        className="input2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginBottom: "10px" }}></div>
      <label className="label-major">학과</label>
      <input
        value={major}
        onChange={handleSelectChange}
        style={{ height: "50px" }}
        className="input2"
      >
      </input>
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
