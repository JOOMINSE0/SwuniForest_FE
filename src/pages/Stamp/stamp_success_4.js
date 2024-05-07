import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './stamp_success.css';
import './stamp.css';

function StampSuccess4() {
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

                <span style={{ color: "#B2E0D0" }}>인문대학</span>의 도장 7개 중<br />
                절반 이상인 4개를 획득하여 보상으로<br /><br />
                <span className='cat-name'>10시 10분</span>이 찾아왔어요!

            </div>
            <img src="../../../img/cat_4.png" alt="고양이 4" className="cat-image" />
            <button className="stamp-btn" onClick={() => navigate("/stamp_detail_4", { state: { score: score } })}>
                만나러 가기
            </button>
        </div>
    );
}

export default StampSuccess4;
