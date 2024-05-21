import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Locate } from '../../assets/locate.svg';
import "./Lineup.css";

function Lineup() {
    const [selectedDay, setSelectedDay] = useState('Wed 22');
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
                        <div className="scrollY">
                            <p className="section"><span style={{color:"#5A776D"}}>•</span> <span style={{color:"#575757"}}>토크 콘서트</span></p>
                            
                            <div className="location-content">
                                <Locate/>
                                <span style={{color:"#575757"}}>학생누리관 114호 소극장</span>
                            </div>
                            <div className="blur">
                            <img style={{width:"323px", height:"400px"}} src="../../../img/이호연.png"/>
                            </div>

                            <div style={{textAlign:"center"}}>
                                <p style={{color:"#575757"}}>하다필름</p>
                                <p style={{fontSize:"26px", color:"#5A776D", fontWeight:"600"}}>이호연</p>
                            </div>
                        </div>
                    </>
                );
            case 'Thu 23':
                return (
                    <>
                        <div className="scrollY">
                            <p className="section">• 아티스트 공연</p>
                            
                            <div className="location-content2">
                                <Locate/>
                                <span>만주벌판</span>
                            </div>
                            <div className="blur">
                            <img style={{width:"323px", height:"400px"}} src="../../../img/거미.png"/>
                            </div>

                           
                            <p className="section">• 동아리 공연</p>
                            
                            <div className="location-content2">
                                <Locate/>
                                <span>만주벌판</span>
                            </div>

                            
                            <div className="clubs-container">
                            <div className="club" style={{position: "relative", color: "#fff"}}>
                            <svg style={{position: "absolute", marginLeft:"-80%"}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="white"/>
                            </svg>
                            <p style={{marginBottom: "5px"}}>서울여대 중앙 락밴드</p>
                            <p style={{fontSize:"24px", marginTop: "10px", fontWeight:"bolder"}}>S.E.L.</p>
                        </div>


                            <div className="club" style={{position: "relative"}}>
                                <p style={{marginBottom: "5px", color:"#fff"}}>서울여대 중앙 노래패</p>
                                <svg style={{position: "absolute", marginLeft:"-80%"}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="white"/>
                            </svg>
                                <p style={{fontSize:"24px", marginTop: "10px", color:"#fff", fontWeight:"bolder"}}>소리마당</p>
                            </div>
                        </div>

                      


                        </div>
                     

                    </>
                );
            case 'Fri 24':
                return (
                    <>
                        <div className="scrollY">
                            <p className="section">• 아티스트 공연</p>
                            
                            <div className="location-content2">
                                <Locate/>
                                <span>만주벌판</span>
                            </div>
                            <div className="blur">
                            <img style={{width:"323px", height:"400px"}} src="../../../img/이하이.png"/>
                            </div>


                            <p className="section">• 동아리 공연</p>
                            
                            <div className="location-content2">
                                <Locate/>
                                <span>만주벌판</span>
                            </div>


                            <div className="clubs-container">
                            <div className="club" style={{position: "relative", color: "#fff"}}>
                            <svg style={{position: "absolute", marginLeft:"-80%"}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="white"/>
                            </svg>
                            <p style={{marginBottom: "5px", color:"#fff"}}>서울여대 중앙 풍물패</p>
                            <p style={{fontSize:"24px", marginTop: "10px", color:"#fff", fontWeight:"bolder"}}>청천벽력</p>
                             </div>

                            <div className="club" style={{position: "relative", color: "#fff"}}>
                            <svg style={{position: "absolute", marginLeft:"-80%"}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="white"/>
                            </svg>
                                <p style={{marginBottom: "5px", color:"#fff"}}>스트릿 댄스 동아리</p>
                                <p style={{fontSize:"24px", marginTop: "10px", color:"#fff", fontWeight:"bolder"}}>TIPSSY</p>
                            </div>

                            <div className="club" style={{position: "relative", color: "#fff"}}>
                            <svg style={{position: "absolute", marginLeft:"-80%"}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="white"/>
                            </svg>
                                <p style={{marginBottom: "5px", color:"#fff"}}>재즈 퍼포먼스 동아리</p>
                                <p style={{fontSize:"24px", marginTop: "10px", color:"#fff", fontWeight:"bolder"}}>S.A.K.E.</p>
                            </div>
                        </div>



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