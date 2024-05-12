import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./preGuestbook.css";

function PreGuestbook() {
    let navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태로 설정
    }, []);

    return (
        <div className="iphone-frame">
            <p className="login-title">방명록</p>
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                style={{ marginTop: "9%" }}
                onClick={() => navigate(-1)}
            />

            <div className="divform1">
                <img src="../../../img/Circle.png"
                    style={{ width: "106px", position: "relative", marginTop: "15px", marginLeft: "10px" }} />
                <b style={{ marginTop: "40px", marginLeft: "40px", color: "#898A8D", position: "absolute" }}>우리 학과는 지금 방문율 몇 위?</b>
                <p style={{ marginTop: "-63px", marginLeft: "43%", fontSize: "10px", color: "#898A8D", position: "absolute" }}>학과를 인증하면 방문율을 높일 수 있어요</p>
                {isLoggedIn ? (
                    <button className="guestbookBtn" onClick={() => navigate('/visit')}>
                        방문하기
                    </button>
                ) : (
                    <button className="guestbookBtn" onClick={() => navigate('/login1')}>
                        로그인하기
                    </button>
                )}
            </div>

            <a onClick={() => { navigate('/visitorRanking') }}
                className="rankingcheck">
                방문율랭킹 확인하기
                <img style={{ width: "14px", height: "15px"}} src="../../../img/arrow.png"></img>
            </a>

            <div className="divform2"> </div>

            <button
                onClick={() => { navigate('/uploadboard') }}
                style={{ width: "60px", height: "60px", zIndex: "1", position: "relative", marginTop: "-20%", marginLeft: "55%"
                    , borderStyle: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                <img style={{ width: "60px", height: "60px" }} src="../../../img/writeBtn.png"></img>
            </button>
        </div>
    );
}

export default PreGuestbook;
