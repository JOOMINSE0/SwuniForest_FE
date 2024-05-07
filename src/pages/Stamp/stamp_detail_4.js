import { useNavigate, useLocation } from "react-router-dom";
import './stamp_detail.css';
import './stamp.css';

function StampDetail4() {
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
                onClick={() => navigate('/stamp')}
            />
            <p className="stamp-title">도장판</p>

            <div className="back-circle"></div>
            <img src={passed ? "../../../img/cat_4.png" : "../../../img/cat_4_line.png"}
                alt="고양이 4" className="cat-image" />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-65px" }}>10시 10분</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-245px" }}>인문대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">인자함</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">눈 감기</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">분노</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>글로벌ICT인문융합학부</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>국어국문학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>영어영문학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>중어중문학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>일어일문학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>사학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                    </div>
                    <p>기독교학과</p>
                </div>
            </div>
        </div>
    );
}

export default StampDetail4;
