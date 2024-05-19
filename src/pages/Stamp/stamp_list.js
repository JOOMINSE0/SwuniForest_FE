import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './stamp_list.css';

function StampList() {
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState('');
  const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/";

  const [stamp, setStamp] = useState(() => {
    const savedStamp = sessionStorage.getItem('stamp');
    return savedStamp ? JSON.parse(savedStamp) : [0, 0, 0, 0, 0, 0];
  });

  const [catStamps, setCatStamps] = useState(() => [
    { score: 0, total: 8, college: "사회과학대학", img1: "../../../img/cat_1.png", img2: "../../../img/cat_1_line.png" },
    { score: 0, total: 4, college: "아트앤디자인스쿨", img1: "../../../img/cat_2.png", img2: "../../../img/cat_2_line.png" },
    { score: 0, total: 7, college: "미래산업융합대학", img1: "../../../img/cat_3.png", img2: "../../../img/cat_3_line.png" },
    { score: 0, total: 7, college: "인문대학", img1: "../../../img/cat_4.png", img2: "../../../img/cat_4_line.png" },
    { score: 0, total: 1, college: "자율전공학부", img1: "../../../img/cat_5.png", img2: "../../../img/cat_5_line.png" },
    { score: 0, total: 7, college: "과학기술융합대학", img1: "../../../img/cat_6.png", img2: "../../../img/cat_6_line.png" },
  ]);

  useEffect(() => {
    setCatStamps(prevCatStamps => prevCatStamps.map((catStamp, index) => ({
      ...catStamp,
      score: stamp[index]
    })));
  }, [stamp]);

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

      const response2 = await axios.get(`${fetchURL}api/stamp/all`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        }
      });
      const stampData = response2.data;

      const trueCounts = [
        Object.entries(stampData).slice(0, 9).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(9, 13).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(13, 20).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(20, 27).filter(([key, value]) => value === true).length,
        Object.entries(stampData).slice(27, 28).filter(([key, value]) => value === true).length, // 26번째 요소의 true 개수 계산
        Object.entries(stampData).slice(28, 35).filter(([key, value]) => value === true).length
      ];

      setStamp(trueCounts);
      console.log(stampData)
      sessionStorage.setItem('stamp', JSON.stringify(trueCounts));

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
      <p className="description">부스 체험 후 학과별 인증번호를 입력하면 고양이 스탬프를 드려요.</p>
      <div className="certification">
        <input
          placeholder="인증번호를 입력하세요"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        <button onClick={handleCodeSubmit}>확인</button>
      </div>
      <div className="cat-items">
        {
          catStamps.map((stamp, index) => {
            const isMajority = stamp.score >= stamp.total / 2;
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
                <div className="score">
                  <span>{stamp.score}</span> / {stamp.total}
                </div>
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
