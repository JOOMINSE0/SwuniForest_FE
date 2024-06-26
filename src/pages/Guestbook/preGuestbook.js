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
    const [hasVisited, setHasVisited] = useState(sessionStorage.getItem("hasVisited") === "true");

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setIsLoggedIn(!!token);
        if (token) {
            fetchVisitData();
        }
        fetchGuestbookEntries();
    }, []);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]); 

    const handleVisit = async () => {
        if (!isLoggedIn) {
            navigate('/login1');
            return;
        }
        try {
            const response = await axios.post('https://port-0-swuniforest-be-1mrfs72llwh5tfst.sel5.cloudtype.app/api/visit/change', {}, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            setVisitData(response.data);
            setHasVisited(true);
            sessionStorage.setItem("hasVisited", "true");
        } catch (error) {
            console.error("방문 업데이트 에러:", error);
            setError(`${error.response ? error.response.data : "네트워크 연결을 확인해주세요."}`);
        }
    };

    const fetchVisitData = async () => {
        try {
            const response = await axios.get('https://port-0-swuniforest-be-1mrfs72llwh5tfst.sel5.cloudtype.app/api/visit/info', {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            setVisitData(response.data);
            if (response.data && response.data.hasVisited) {
                setHasVisited(true);
                sessionStorage.setItem("hasVisited", "true");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load data.");
        }
    };

    const fetchGuestbookEntries = async () => {
        try {
            const response = await axios.get('https://port-0-swuniforest-be-1mrfs72llwh5tfst.sel5.cloudtype.app/api/guestbook/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setGuestbookEntries(response.data);
        } catch (error) {
            console.error("Error fetching guestbook data:", error);
            setError("Failed to load guestbook data.");
        }
    };

    return (
        <div className="iphone-frame">
            <p className="login-title">방명록</p>
            <img
                src="../../../img/close.png"
                alt="Close button"
                className="close-btn"
                onClick={() => navigate(-1)}
                style={{ marginTop: "7%" }}
            />
            <div>
                {!isLoggedIn ? (
                    <div className="divform1">
                        <img src="../../../img/Circle.png"
                            style={{ width: "106px", position: "relative", marginTop: "15px", marginLeft: "20px" }} />
                        <b style={{ marginTop: "40px", marginLeft: "28px", color: "#898A8D", position: "absolute" }}>우리 학과는 지금 방문율 몇 위?</b>
                        <p style={{ marginTop: "-63px", marginLeft: "43%", fontSize: "10px", color: "#898A8D", position: "absolute" }}>학과를 인증하면 방문율을 높일 수 있어요</p>
                        <button className="guestbookBtn" onClick={() => navigate('/login1')}>
                            로그인하기
                        </button>
                    </div>
                ) : !hasVisited ? (
                    <div className="divform1">
                        <img src="../../../img/Circle.png"
                            style={{ width: "106px", position: "relative", marginTop: "15px", marginLeft: "20px" }} />
                        <b style={{ marginTop: "40px", marginLeft: "40px", color: "#898A8D", position: "absolute" }}>우리 학과는 지금 방문율 몇 위?</b>
                        <p style={{ marginTop: "-63px", marginLeft: "43%", fontSize: "10px", color: "#898A8D", position: "absolute" }}>방문하기 버튼을 클릭하면 방문율을 높일 수 있어요</p>
                        <button className="guestbookBtn" onClick={handleVisit}>
                            방문하기
                        </button>
                    </div>
                ) : (
                    <div className="divform1-1">
                        {visitData && (
                            <div style={{ textAlign: 'center' }}>
                                <b style={{ color: "#9D9FA4", fontSize: "18px" }}>{visitData.username} 님의 학과</b> <br/>
                                <b style={{ color: "#898A8D", fontSize: "19px" }}>{visitData.major}<span style={{ color: "#9D9FA4" }}>의</span> 방문율</b><br/>
                                <b style={{ fontSize: "24px", marginRight: "10%", color:"#6EA693" }}>{visitData.visitCount}명 </b>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1" height="22" viewBox="0 0 1 21" fill="none">
                                    <path d="M0.5 1L0.5 20" stroke="#C1C2C5" strokeLinecap="round" />
                                </svg>
                                <b style={{ fontSize: "24px", marginLeft: "10%", color:"#6EA693" }}>{visitData.rank}위</b>
                            </div>
                        )}
                    </div>

                )}
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
                            src={entry.fileName} alt="Guestbook" className="guestbook-img" />
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