import { useNavigate } from "react-router-dom";
import './stamp_list.css';

function StampList() {

  let navigate = useNavigate();
  const catStamps = [
    { score: 4, total: 8, college: "사회과학대학", img1: "../../../img/cat_1.png", img2: "../../../img/cat_1_line.png" },
    { score: 2, total: 4, college: "아트앤디자인스쿨", img1: "../../../img/cat_2.png", img2: "../../../img/cat_2_line.png" },
    { score: 1, total: 7, college: "미래산업융합대학", img1: "../../../img/cat_3.png", img2: "../../../img/cat_3_line.png" },
    { score: 4, total: 7, college: "인문대학", img1: "../../../img/cat_4.png", img2: "../../../img/cat_4_line.png" },
    { score: 1, total: 1, college: "자율전공학부", img1: "../../../img/cat_5.png", img2: "../../../img/cat_5_line.png" },
    { score: 2, total: 7, college: "과학기술융합대학", img1: "../../../img/cat_6.png", img2: "../../../img/cat_6_line.png" },
  ];

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
        <input placeholder="인증번호를 입력하세요" />
        <button>확인</button>
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
