import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./login2.css";

function Login2() {
  const navigate = useNavigate();
  const [studentNum, setStudentNum] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    const data = {
      studentNum,
      password
    };

    try {
      const response = await axios.post('https://8731-114-70-38-149.ngrok-free.app/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('로그인 성공')

      //token, role 저장
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('role', response.data.role);
      //role에 따라서 메인 페이지로 갈지(user), 인증번호 부스관리자 페이지로 갈지 결정(admin)
      navigate('/');

    } catch (error) {
      if (error.response && error.response.status === 500) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes('존재하지 않는 회원')) {
          alert("존재하지 않는 회원입니다.");
        } else if (errorMessage.includes('비밀번호가 일치하지 않습니다')) {
          alert("비밀번호가 일치하지 않습니다.");
        }
      } else {
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
