import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Line } from '../../assets/line.svg';
import { ReactComponent as Locate } from '../../assets/locate.svg';
import "./Lineup.css";

function Lineup() {
    const [selectedDay, setSelectedDay] = useState(null);
    let navigate = useNavigate();


    const handleDayClick = (day) => {
        setSelectedDay(day);
    }

    const dayButtonStyle = (day) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 5px',
        backgroundColor: selectedDay === day ? '#DFF2EB' : 'transparent'
    });

    const renderContent = () => {
        switch (selectedDay) {
            case 'Wed 22':
                return (
                    <>
                        <div className="content1">

                            <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%" }}>가수</div>
                            <Locate style={{ marginTop: "10%", marginLeft: "5%"  }} />
                            <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>

                        <div className="content2">

                            <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%"}}>가수</div>
                            <Locate style={{ marginTop: "10%", marginLeft: "5%"  }} />
                            <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>

                        <div className="content2">

                        <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%"}}>가수</div>
                        <Locate style={{ marginTop: "10%", marginLeft: "5%" }} />
                        <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>
                    </>
                );
            case 'Thu 23':
                return (
                    <>
                        <div className="content1">

                            <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%" }}>가수</div>
                            <Locate style={{ marginTop: "10%", marginLeft: "5%"  }} />
                            <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>

                        <div className="content2">

                            <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%"}}>가수</div>
                            <Locate style={{ marginTop: "10%",marginLeft: "5%" }} />
                            <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>

                        <div className="content2">

                        <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%"}}>가수</div>
                        <Locate style={{ marginTop: "10%", marginLeft: "5%" }} />
                        <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>
                    </>
                );
            case 'Fri 24':
                return (
                    <>
                        <div className="content1">

                            <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%" }}>가수</div>
                            <Locate style={{ marginTop: "10%", marginLeft: "5%" }} />
                            <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>

                        <div className="content2">

                            <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%"}}>가수</div>
                            <Locate style={{ marginTop: "10%", marginLeft: "5%"  }} />
                            <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>

                        <div className="content2">

                        <div style={{ color: "#ffffff", marginBottom: "1px", marginTop: "10px", marginLeft: "15%"}}>가수</div>
                        <Locate style={{ marginTop: "10%", marginLeft: "5%"  }} />
                        <div style={{ color: "#ffffff", marginTop: "-8%", marginLeft: "15%" }}>만주벌판</div>

                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="iphone-frame">
            <p className="login-title">공연 라인업</p>
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                style={{ marginTop: "9%" }}
                onClick={() => navigate(-1)}
            />
            <Line style={{ marginLeft: "-85%", marginTop: "40%", position:"absolute" }} />
            <div style={{ display: 'flex', alignItems: 'center', position: "absolute", marginTop: "-140%" }}>
                <div className="month" style={{ marginRight: '20px', fontWeight: 'bold', fontSize: '24px' }}>May</div>
                {['Wed 22', 'Thu 23', 'Fri 24'].map((day, index) => (
                    <button key={index} className="day-box" style={dayButtonStyle(day)} onClick={() => handleDayClick(day)}>
                        <p style={{ color: '#B6B6B6', fontSize: '12px', marginBottom: '0px' }}>{day.split(' ')[0]}</p>
                        <b style={{ color: '#5A776D', fontSize: '24px', marginTop: '0px' }}>{day.split(' ')[1]}</b>
                    </button>
                ))}
            </div>
            {selectedDay && renderContent()}
        </div>
    );
}

export default Lineup;