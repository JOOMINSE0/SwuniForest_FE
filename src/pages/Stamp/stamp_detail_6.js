import { useNavigate, useLocation } from "react-router-dom";
import './stamp_detail.css';
import './stamp.css';

function StampDetail6() {
    let navigate = useNavigate();
    const location = useLocation();
    const score = location.state.score;
    const total = 7;
    const passed = score >= total / 2;
    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate(-1)}
            />
            <p className="stamp-title">도장판</p>

            <div className="back-circle"></div>
            <img src={passed ? "../../../img/cat_6.png" : "../../../img/cat_6_line.png"}
                alt="고양이 6" className="cat-image" />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-110px" }}>그림자</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-160px" }}>과학기술융합대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">어둠</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">위협적</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">악력</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>수학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>바이오헬스융합학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>원예생명조경학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>화학과</p>
                </div>
            </div>
        </div>
    );
}

export default StampDetail6;
