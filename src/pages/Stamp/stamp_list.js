import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './stamp_list.css';

function StampList() {
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState('');
  const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/";

  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0]);
  const catStamps = [
    { total: 8, college: "사회과학대학", img1: "../../../img/cat_1.png", img2: "../../../img/cat_1_line.png" },
    { total: 4, college: "아트앤디자인스쿨", img1: "../../../img/cat_2.png", img2: "../../../img/cat_2_line.png" },
    { total: 7, college: "미래산업융합대학", img1: "../../../img/cat_3.png", img2: "../../../img/cat_3_line.png" },
    { total: 7, college: "인문대학", img1: "../../../img/cat_4.png", img2: "../../../img/cat_4_line.png" },
    { total: 1, college: "자율전공학부", img1: "../../../img/cat_5.png", img2: "../../../img/cat_5_line.png" },
    { total: 7, college: "과학기술융합대학", img1: "../../../img/cat_6.png", img2: "../../../img/cat_6_line.png" },
  ];

  const loadStamps = async () => {
    try {
      const response = await axios.get(`${fetchURL}api/stamp/all`, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      const stampData = response.data;
      const newScores = [
        Object.entries(stampData).slice(0, 9).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(9, 13).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(13, 20).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(20, 27).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(27, 28).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(28, 35).filter(([key, value]) => value === true).length
      ];
      setScores(newScores);
    } catch (error) {
      console.error("Failed to load stamps:", error);
    }
  };

  useEffect(() => {
    loadStamps();
    console.log(scores)
  }, []);


  const handleCodeSubmit = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login1');
      return;
    }

    try {
      const response = await axios.post(`${fetchURL}api/stamp/check?depCode=${inputCode}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      console.log('Response:', response.data);
      loadStamps();
      console.log(scores)

    } catch (error) {
      alert('올바른 인증번호를 입력하세요.');
    }
  };

  return (
    <div className="iphone-frame">
      <p className="stamp-title">도장판</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        onClick={() => navigate('/')}
      />
      <p className="description">부스 체험 후 <span style={{ color: "#B2E0D0" }}>학과별 인증번호</span>를 입력하면 학과별 스탬프를 드려요.</p>
      <div className="certification">
        <input
          placeholder="인증번호를 입력하세요"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        <button onClick={handleCodeSubmit}>확인</button>
      </div>
      <p className="description" style={{ marginTop: "-20px", marginBottom: "15px" }}>인증번호는 부스 관리자에게 문의해주세요.</p>
      <div className="cat-items">
        {
          catStamps.map((stamp, index) => {
            const isMajority = scores[index] >= stamp.total / 2;
            const route = isMajority ? `/stamp_success_${index + 1}` : `/stamp_detail_${index + 1}`;
            return (
              <div
                className="cat-item"
                key={index}
                onClick={() => navigate(route, { state: { score: stamp.score } })}
              >
                <div className="back-circle"></div>
                <img
                  src={isMajority ? stamp.img1 : stamp.img2}
                  alt={`고양이 ${index + 1}`}
                />
                <div className="score"><span>{scores[index]}</span> / {stamp.total}</div>
                <p>{stamp.college}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default StampList;
