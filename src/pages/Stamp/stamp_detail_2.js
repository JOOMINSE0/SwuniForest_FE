import { useNavigate, useLocation } from "react-router-dom";
import './stamp_detail.css';
import './stamp.css';

function StampDetail2() {
    let navigate = useNavigate();
    const location = useLocation();
    const score = location.state.score;
    const total = 4;
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
                src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"}
                alt="고양이 2"
                className="cat-image"
            />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-57px" }}>네모네모냥</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-170px" }}>아트앤디자인스쿨</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">각진 정도</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">친화력</span>
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
                        <img src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"}
                            alt="고양이 2" className="cat-stamp" />
                    </div>
                    <p>현대미술전공</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"} alt="고양이 2" className="cat-stamp" />
                    </div>
                    <p>공예전공</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"} alt="고양이 2" className="cat-stamp" />
                    </div>
                    <p>시각디자인전공</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"} alt="고양이 2" className="cat-stamp" />
                    </div>
                    <p>첨단미디어전공</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"} alt="고양이 2" className="cat-stamp" />
                    </div>
                    <p>첨단미디어전공</p>
                </div>
                <div className="department">
                    <div className="circle">
                        <img src={passed ? "../../../img/cat_2.png" : "../../../img/cat_2_line.png"} alt="고양이 2" className="cat-stamp" />
                    </div>
                    <p>첨단미디어전공</p>
                </div>
            </div>
        </div>
    );
}

export default StampDetail2;
