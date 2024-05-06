import { useNavigate, useLocation } from "react-router-dom";
import './stamp_detail.css';
import './stamp.css';

function StampDetail3() {
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
            <img
                src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                alt="고양이 3"
                className="cat-image"
            />            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-15px" }}>그루밍마스터</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-165px" }}>미래산업융합대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">그루밍력</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">애교</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">잠꼬대</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                            alt="고양이 3" className="cat-stamp" />
                    </div>
                    <p>경영학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                            alt="고양이 3" className="cat-stamp" />                    </div>
                    <p>데이터사이언스학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                            alt="고양이 3" className="cat-stamp" />                    </div>
                    <p>디지털미디어학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                            alt="고양이 3" className="cat-stamp" />                    </div>
                    <p>산업디자인학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                            alt="고양이 3" className="cat-stamp" />                    </div>
                    <p>산업디자인학과</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                            alt="고양이 3" className="cat-stamp" />                    </div>
                    <p>산업디자인학과</p>
                </div>
            </div>
        </div>
    );
}

export default StampDetail3;
