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
            if (error.response) {
                // 상태 코드에 따라 구체적인 에러 처리
                if (error.response.status === 500) {
                    if (error.response.data === "존재하지 않는 학과입니다.") {
                        setError("존재하지 않는 학과입니다.");
                    } else if (error.response.data === "이미 방문하기를 누르셨습니다.") {
                        setError("이미 방문하기를 누르셨습니다.");
                    } else {
                        setError(`서버 에러: ${error.response.data}`);
                    }
                } else {
                    setError(`방문율 업데이트에 실패했습니다: ${error.response.data.message}`);
                }
            } else if (error.request) {
                setError("서버 응답 없음, 네트워크 연결을 확인해주세요.");
            } else {
                setError("요청 생성 실패, 다시 시도해주세요.");
            }
        }
    };
    

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setIsLoggedIn(!!token);
        fetchGuestbookEntries(); 
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
            setError("데이터를 불러오는 데 실패했습니다."); // 구체적인 에러 메시지 추가
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

    return (
        <div className="iphone-frame">
            <p className="login-title">방명록</p>
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate(-1)}
                style={{ marginTop: "7%" }}
            />
            <div>
                {isLoggedIn ? (
                    visitData ? (
                        <div className="divform1-1">
                            <div style={{ textAlign: 'center' }}>
                                <b style={{ color: "#9D9FA4", fontSize: "18px" }}>{visitData.username} 님의 학과</b> <br/>
                                <b style={{ color: "#898A8D", fontSize: "19px" }}>{visitData.major}<span style={{ color: "#9D9FA4" }}>의</span> 방문율</b><br/>
                                <b style={{ fontSize: "24px", marginRight: "10%", color:"#6EA693" }}>{visitData.visitCount}명 </b>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1" height="22" viewBox="0 0 1 21" fill="none">
                                    <path d="M0.5 1L0.5 20" stroke="#C1C2C5" strokeLinecap="round" />
                                </svg>
                                <b style={{ fontSize: "24px", marginLeft: "10%", color:"#6EA693" }}>{visitData.rank}위</b>
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
                style={{marginTop:"10px", marginBottom:"10px", marginRight:"-50%", cursor:"pointer", color:"#7E7F82"}}>
                방문율랭킹 확인하기
                <img style={{ width: "14px", height: "15px", position:"absolute", marginTop:"3px" }} src="../../../img/arrow.png"></img>
            </a>

            <div className="divform2">
                {guestbookEntries.map((entry, index) => (
                    <div key={index} className="guestbook-entry">
                        <img
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            src={entry.fileName} alt="방명록" className="guestbook-img" />
                        <p className="guestbook-content">{entry.guestContent}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate('/uploadboard')}
                style={{
                    width: "60px", height: "60px", zIndex: "1", position: "relative", marginTop: "-20%", marginLeft: "55%",
                    borderStyle: "none", backgroundColor: "transparent", cursor: "pointer"
                }}>
                <img style={{ width: "60px", height: "60px" }} src="../../../img/writeBtn.png"></img>
            </button>
        </div>
    );
}

export default PreGuestbook;
