import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./login2.css";

function Login2() {
  const navigate = useNavigate();
  const [studentNum, setStudentNum] = useState('');
  const [password, setPassword] = useState('');

  const fetchURL = "https://e4ee-118-218-144-103.ngrok-free.app/";

  const handleLoginClick = async () => {
    const data = {
      studentNum,
      password
    };

    try {
      const response = await axios.post(fetchURL + 'api/login', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // token, role 저장
      const token = response.data.token;
      const role = response.data.role;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);
      console.log('로그인 성공')

      // role에 따라서 페이지 이동 결정
      if (role === 'ROLE_MANAGER') {
        navigate('/stamp_admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      if (error.response && error.response.status === 500) {

        console.error('Error:', error);
        alert('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="iphone-frame">
      <p className="login-title">로그인</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{ marginTop: "9%" }}
        onClick={() => navigate('/')}
      />
      <div style={{ marginTop: "260px" }}>
        <p className="stId">학번</p>
        <input
          className="input"
          value={studentNum}
          onChange={(e) => setStudentNum(e.target.value)}
        />
        <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginTop: "0px" }}></div>

        <p className="stPw">비밀번호</p>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ width: "360px", height: "0.6px", background: "#E3E3E3", marginTop: "0px" }}></div>
      </div>

      <p style={{ marginTop: "110px" }}>아직도 모바일 열람증 인증을 하지 않으셨나요?</p>
      <button onClick={() => { navigate('/signup1') }} className="L2signupBtn">
        <div style={{ color: "#898A8D" }}>회원가입하기</div>
      </button>

      <button onClick={handleLoginClick} className="confirmButton1">
        <b style={{ fontSize: "20px", color: "#ffffff" }}>확인</b>
      </button>
    </div>
  );
}

export default Login2;