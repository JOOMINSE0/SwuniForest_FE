import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './stamp_success.css';
import './stamp.css';

function StampSuccess5() {
    let navigate = useNavigate();
    const location = useLocation();
    const score = location.state.score;
    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate('/stamp')}
            />
            <div className='text'>

                <span style={{ color: "#B2E0D0" }}>자율전공학부</span>의 도장 1개 중<br />
                절반 이상인 1개를 획득하여 보상으로<br /><br />
                <span className='cat-name'>뒷발 팡팡냥</span>이 찾아왔어요!

            </div>
            <img src="../../../img/cat_5.png" alt="고양이 5" className="cat-image" />
            <button className="stamp-btn" onClick={() => navigate("/stamp_detail_5", { state: { score: score } })}>
                만나러 가기
            </button>
        </div>
    );
}

export default StampSuccess5;
