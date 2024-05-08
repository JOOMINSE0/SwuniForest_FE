import { useNavigate, useLocation } from "react-router-dom";
import './stamp_detail.css';
import './stamp.css';

function StampDetail5() {
    let navigate = useNavigate();
    const location = useLocation();
    const score = location.state.score;
    const total = 1;
    const passed = score >= total / 2;
    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate('/stamp')}
            />
            <p className="stamp-title">도장판</p>

            <div className="back-circle"></div>
            <img src={passed ? "../../../img/cat_5.png" : "../../../img/cat_5_line.png"}
                alt="고양이 5" className="cat-image" />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-50px" }}>뒷발 팡팡냥</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-210px" }}>자율전공학부</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">악력</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">뒹구르르</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">소유욕</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>경제학과</p>
                </div>
            </div>
        </div>
    );
}

export default StampDetail5;
