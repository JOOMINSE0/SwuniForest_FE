import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './stamp_list.css';

function StampList() {
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState('');
  const [catStamps, setCatStamps] = useState([
    { score: 0, total: 8, college: "사회과학대학", img1: "../../../img/cat_1.png", img2: "../../../img/cat_1_line.png" },
    { score: 0, total: 4, college: "아트앤디자인스쿨", img1: "../../../img/cat_2.png", img2: "../../../img/cat_2_line.png" },
    { score: 0, total: 7, college: "미래산업융합대학", img1: "../../../img/cat_3.png", img2: "../../../img/cat_3_line.png" },
    { score: 0, total: 7, college: "인문대학", img1: "../../../img/cat_4.png", img2: "../../../img/cat_4_line.png" },
    { score: 0, total: 1, college: "자율전공학부", img1: "../../../img/cat_5.png", img2: "../../../img/cat_5_line.png" },
    { score: 0, total: 7, college: "과학기술융합대학", img1: "../../../img/cat_6.png", img2: "../../../img/cat_6_line.png" },
  ]);

  const departmentMapping = {
    "Department1": "사회과학대학",
    "Department2": "사회과학대학",
    "Department3": "사회과학대학",
    "Department4": "사회과학대학",
    "Department5": "사회과학대학",
    "Department6": "사회과학대학",
    "Department7": "사회과학대학",
    "Department8": "사회과학대학",
    "Department9": "아트앤디자인스쿨",
    "Department10": "아트앤디자인스쿨",
    "Department11": "아트앤디자인스쿨",
    "Department12": "아트앤디자인스쿨",
    "Department13": "미래산업융합대학",
    "Department14": "미래산업융합대학",
    "Department15": "미래산업융합대학",
    "Department16": "미래산업융합대학",
    "Department17": "미래산업융합대학",
    "Department18": "미래산업융합대학",
    "Department19": "미래산업융합대학",
    "Department20": "인문대학",
    "Department21": "인문대학",
    "Department22": "인문대학",
    "Department23": "인문대학",
    "Department24": "인문대학",
    "Department25": "인문대학",
    "Department26": "인문대학",
    "Department27": "자율전공학부",
    "Department28": "과학기술융합대학",
    "Department29": "과학기술융합대학",
    "Department30": "과학기술융합대학",
    "Department31": "과학기술융합대학",
    "Department32": "과학기술융합대학",
    "Department33": "과학기술융합대학",
    "Department34": "과학기술융합대학"
  };
  const fetchURL = "https://e4ee-118-218-144-103.ngrok-free.app/";

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
          'ngrok-skip-browser-warning': '69420',
        }
      });

      if (response.data.success) {
        const departmentName = departmentMapping[response.data.department];
        setCatStamps(prevStamps => {
          return prevStamps.map(stamp => {
            if (stamp.college === departmentName) {
              return { ...stamp, score: stamp.score + 1 };
            }
            return stamp;
          });
        });
        alert("스템프 처리 성공");
      } else {
        alert("스탬프 처리 실패");
      }
    } catch (error) {
      console.error('Error submitting code:', error);
      alert('코드를 제출하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="iphone-frame">
      <p className="stamp-title">도장판</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        onClick={() => navigate('/stamp')}
      />
      <p className="description">부스 체험 후 학과별 인증번호를 입력하면 고양이 스템프를 드려요.</p>
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
