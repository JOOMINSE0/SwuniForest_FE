import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './stamp_success.css';
import './stamp.css';

function StampSuccess3() {
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

                <span style={{ color: "#B2E0D0" }}>미래산업융합대학</span>의 스탬프 4개 중<br />
                절반 이상인 2개를 획득하여 보상으로<br /><br />
                <span className='cat-name'>그루밍 마스터</span>가 찾아왔어요!

            </div>
            <img src="../../../img/cat_3.png" alt="고양이 3" className="cat-image" />
            <button className="stamp-btn" onClick={() => navigate("/stamp_detail_3", { state: { score: score } })}>
                만나러 가기
            </button>
        </div>
    );
}

export default StampSuccess3;
