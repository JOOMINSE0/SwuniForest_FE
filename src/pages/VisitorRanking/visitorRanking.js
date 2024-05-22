import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./visitorRanking.css";

function VisitorRanking() {
    let navigate = useNavigate();
    const [rankingData, setRankingData] = useState([]);
    const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchURL + 'api/visit', {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': '69420',
                    }
                });
                setRankingData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="iphone-frame">
            <p className="login-title">방문율 랭킹</p>
            <img
                src="../../../img/back.png"
                alt="Back button"
                className="close-btn"
                style={{ marginTop: "9%", marginRight: "80%", width: "14px" }}
                onClick={() => navigate(-1)}
            />

            <div
                style={{
                    width: '380px',
                    height: '169px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    position: "relative",
                    marginTop: "5%"
                }}
                className="divform1"
            >
        {(() => {
            const modifiedData = rankingData.slice(0, 3);
            if (modifiedData.length >= 2) {
                [modifiedData[0], modifiedData[1]] = [modifiedData[1], modifiedData[0]];
            }

            return modifiedData.map((item, index) => (
                <div key={index} className={`rank-${index + 1}`} style={{ display: 'flex', flexDirection: 'column'}}>
                    <div style={{fontSize: "13px", textAlign: "center", color: "#7E7F82"}} className={`rank-text-${index + 1}`}>
                        {item.major}
                    </div>

                    <div className={index === 0 ? "one" : index === 1 ? "two" : "three"}>
                        <div className={`rank-icon-${index + 1}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: "35px", height: "39px"}} 
                                src={`../../../img/${index === 0 ? 2 : index === 1 ? 1 : index + 1}.png`} 
                                alt={`${index + 1} rank icon`} />
                        </div>
                    </div>
                </div>
            ));
        })()}


            </div>

            <p style={{ color: "#7E7F82", marginTop: "20px" }}>학과별 방문율 등수</p>
            {rankingData.slice(0, 5).map((item, index) => (
    <div key={index} className={`rank-item rank-${index + 1}`}>
        {index < 3 ? (
            <div className="first">
                <div className="rank-position">{index + 1}등</div>
                <div className="vertical1"></div>
                <div className="rank-major" style={{ position: "absolute", marginLeft: "25%", marginTop: "-6%" }}>{item.major}</div>
                <div className="rank-ratio" style={{ position: "absolute", marginLeft: "65%", marginTop: "-6%" }}>{item.visitCount}명</div>
            </div>
        ) : (
            <div className="fourth">
                <div className="rank-position">{index + 1}등</div>
                <div className="vertical2"></div>
                <div className="rank-major" style={{ position: "absolute", marginLeft: "25%", marginTop: "-6%" }}>{item.major}</div>
                <div className="rank-ratio" style={{ position: "absolute", marginLeft: "65%", marginTop: "-6%" }}>{item.visitCount}명</div>
            </div>
        )}
    </div>
))}
        </div>
    );
}

export default VisitorRanking;