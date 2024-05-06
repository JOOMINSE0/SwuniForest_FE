import { useNavigate, useLocation } from "react-router-dom";
import './stamp_detail.css';
import './stamp.css';

function StampDetail1() {
    let navigate = useNavigate();
    const location = useLocation();
    const score = location.state.score;
    const total = 8;
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
            <img src={passed ? "../../../img/cat_1.png" : "../../../img/cat_1_line.png"} alt="고양이 1" className="cat-image" />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-15px" }}>핫도그 꼬리냥</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-210px" }}>사회과학대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">식탐</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">핑크 젤리</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">예민함</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                <div className="department">
                    <div className="circle">
                        <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />
                    </div>
                    <p>경제학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />
                    </div>
                    <p>문헌정보학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />
                    </div>
                    <p>사회복지학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />
                    </div>
                    <p>아동학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />
                    </div>
                    <p>문헌정보학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />
                    </div>
                    <p>문헌정보학과</p>
                </div>
            </div>
        </div>
    );
}

export default StampDetail1;
