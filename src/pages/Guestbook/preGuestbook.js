import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./preGuestbook.css";

function PreGuestbook() {
    let navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [visitData, setVisitData] = useState(null);
    const [guestbookEntries, setGuestbookEntries] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setIsLoggedIn(!!token);
        fetchGuestbookEntries(); // 로그인 여부와 상관없이 실행
        if (token) {
            fetchVisitData();
        }
    }, []);

    const fetchVisitData = async () => {
        try {
            const response = await axios.get('https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/api/visit/info', {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            setVisitData(response.data);
        } catch (error) {
            console.error("에러:", error);
            setError("데이터를 불러오는 데 실패했습니다.");
        }
    };

    const fetchGuestbookEntries = async () => {
        try {
            const response = await axios.get('https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/api/guestbook/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setGuestbookEntries(response.data);
        } catch (error) {
            console.error("에러:", error);
            setError("방명록 데이터를 불러오는 데 실패했습니다.");
        }
    };

    const handleVisit = async () => {
        if (!isLoggedIn) {
            navigate('/login1');
            return;
        }

        try {
            const response = await axios.post('https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/api/visit/change', {}, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            setVisitData(response.data);
        } catch (error) {
            console.error("방문 업데이트 에러:", error);
            setError("방문율 업데이트에 실패했습니다.");
        }
    };

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

            <div>
                {isLoggedIn ? (
                    visitData ? (
                        <div className="divform1-1">
                            <div style={{ textAlign: 'center' }}>
                                <b style={{ color: "#9D9FA4", fontSize: "18px" }}>{visitData.username} 님의 학과</b> <br/>
                                <b style={{ color: "#898A8D", fontSize: "19px" }}>{visitData.major}<span style={{ color: "#9D9FA4" }}>의</span> 방문율</b><br/>
                                <b style={{ fontSize: "24px", color: "#898A8D", marginRight: "10%" }}>{visitData.visitRate}% </b>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1" height="22" viewBox="0 0 1 21" fill="none">
                                    <path d="M0.5 1L0.5 20" stroke="#C1C2C5" strokeLinecap="round"/>
                                </svg>
                                <b style={{ fontSize: "24px", color: "#898A8D", marginLeft: "10%" }}>{visitData.rank}위</b>
                            </div>
                        </div>
                    ) : (
                        <div className="divform1">
                            <img src="../../../img/Circle.png"
                            style={{ width: "106px", position: "relative", marginTop: "15px", marginLeft: "20px" }} />
                            <b style={{ marginTop: "40px", marginLeft: "40px", color: "#898A8D", position: "absolute" }}>우리 학과는 지금 방문율 몇 위?</b>
                            <p style={{ marginTop: "-63px", marginLeft: "43%", fontSize: "10px", color: "#898A8D", position: "absolute" }}>방문하기 버튼을 클릭하면 방문율을 높일 수 있어요</p>
                            <button className="guestbookBtn" onClick={handleVisit}>
                                방문하기
                            </button>
                        </div>
                    )
                ) : (
                    <div className="divform1">
                        <img src="../../../img/Circle.png"
                            style={{ width: "106px", position: "relative", marginTop: "15px", marginLeft: "20px" }} />
                        <b style={{ marginTop: "40px", marginLeft: "28px", color: "#898A8D", position: "absolute" }}>우리 학과는 지금 방문율 몇 위?</b>
                        <p style={{ marginTop: "-63px", marginLeft: "43%", fontSize: "10px", color: "#898A8D", position: "absolute" }}>학과를 인증하면 방문율을 높일 수 있어요</p>
                        <button className="guestbookBtn" onClick={() => navigate('/login1')}>
                            로그인하기
                        </button>
                    </div>
                )}
                {error && <p style={{ color: 'red', position: "absolute", marginLeft: "10px" }}>{error}</p>}
            </div>

            <a onClick={() => navigate('/visitorRanking')}
                style={{marginTop:"10px", marginBottom:"10px", marginRight:"-50%", cursor:"pointer"}}>
                방문율랭킹 확인하기
                <img style={{ width: "14px", height: "15px" }} src="../../../img/arrow.png"></img>
            </a>

            <div className="divform2">
                {guestbookEntries.map((entry, index) => (
                    <div key={index} className="guestbook-entry">
                        <p style={{backgroundColor:"#89CBB5", width:"55px", height:"20px", borderRadius:"30px", textAlign:"center", color:"#fff"}} className="username">
                            {entry.guestName}</p>
                        <img 
                         style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        src={entry.fileName} alt="방명록" className="guestbook-img" />
                        <p className="guestbook-content">{entry.guestContent}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => { navigate('/uploadboard') }}
                style={{
                    width: "60px", height: "60px", zIndex: "1", position: "relative", marginTop: "-20%", marginLeft: "55%"
                    , borderStyle: "none", backgroundColor: "transparent", cursor: "pointer"
                }}>
                <img style={{ width: "60px", height: "60px" }} src="../../../img/writeBtn.png"></img>
            </button>
        </div>
    );
}

export default PreGuestbook;
