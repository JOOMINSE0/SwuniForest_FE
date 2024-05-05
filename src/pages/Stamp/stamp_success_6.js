import React from 'react';
import { useNavigate } from "react-router-dom";
import './stamp_success.css';
import './stamp.css';

function StampSuccess6() {
    let navigate = useNavigate();

    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate(-1)}
            />
            <div className='text'>

                <span style={{ color: "#B2E0D0" }}>과학기술융합대학</span>의 도장 7개 중<br />
                절반 이상인 4개를 획득하여 보상으로<br /><br />
                <span className='cat-name'>그림자</span>가 찾아왔어요!

            </div>
            <img src="../../../img/cat_6.png" alt="고양이 6" className="cat-image" />
            <button className="stamp-btn" onClick={() => navigate("/stamp_detail_6")}>
                만나러 가기
            </button>
        </div>
    );
}

export default StampSuccess6;
