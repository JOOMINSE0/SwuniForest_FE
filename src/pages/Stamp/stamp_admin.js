import { useNavigate } from "react-router-dom";
import './stamp_admin.css';

function StampAdmin() {
    let navigate = useNavigate();

    return (
        <div className="iphone-frame">
            <div className="stamp-header">
                <img
                    src="../../../img/back.png"
                    alt="이전버튼"
                    className="back-btn"
                    onClick={() => navigate('/login1')}
                />
                <p className="stamp-title">인증번호</p>
            </div>

            <div className="stamp-content">
                <p className="stamp-department">소프트웨어융합학과</p>
                <div className="code-box">
                    <p className="code">ER01 JVW8</p>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <p className="valid-time">유효시간 04:22</p>
                </div>
                <p className="instruction">
                    사용자의 도장판 목록 상단에 인증번호를 입력하면 <br /> 학과 도장을 부여할 수 있어요.
                </p>
            </div>
        </div>
    );
}

export default StampAdmin;
