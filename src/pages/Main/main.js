import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ReactComponent as SidebarIcon } from '../../assets/Sidebar.svg';
import { ReactComponent as Myinfo } from '../../assets/Myinfo.svg';
import Sidebar from '../../Components/Sidebar/sidebar.js';
import "./main.css";

function Main() {
    const [activeBox, setActiveBox] = useState('');
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedBooth, setSelectedBooth] = useState('학과부스');
    const [todayVisitCount, setTodayVisitCount] = useState(0);
    const [totalVisitCount, setTotalVisitCount] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    let navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/', {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420',
            }
        })
        .then(response => {
            setTodayVisitCount(response.data.todayVisitCount);
            setTotalVisitCount(response.data.totalVisitCount);
        })
        .catch(error => {
            console.error('접속자 수 에러:', error);
            setError('접속자 수를 불러오는데 실패했습니다.');
        });

        const token = sessionStorage.getItem('token');
        setLoggedIn(!!token);
    }, []);

    const handleBoxClick = (boxName) => {
        setActiveBox(boxName);
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBoothClick = (boothName) => {
        setSelectedBooth(boothName);
        navigate('/booth', { state: { selectedCategory: boothName } });
    };

    const booths = {
        '학과부스': {
            img: 'box1icon.png',
            title: '학과부스',
            description: '학과별 부스의 위치를 확인할 수 있으며 고양이 스템프를 모으는 데에 유용해요'
        },
        '푸드트럭': {
            img: 'box2icon.png',
            title: '푸드트럭',
            description: '축제 기간 동안 진행되는 푸드트럭의 위치와 메뉴, 운영 시간을 알려드려요'
        },
        '포토부스': {
            img: 'box3icon.png',
            title: '포토부스',
            description: '교내에 설치되어 있는 포토부스의 위치와 갯수를 확인할 수 있어요'
        },
        '플리마켓': {
            img: 'box4icon.png',
            title: '플리마켓',
            description: '올해 서랑제에서 진행되는 플리마켓의 위치와 정보를 제공해드려요'
        }
    };

    return (
        <div className="iphone-frame1">
            <img style={{ position: "absolute", marginTop: "-180%", width:"144px", height:"15px"}} src='../../img/swuniforest.png' />
            <button className='StampBtn' onClick={() => navigate('/stamp')}>
                <img style={{ width: "55px", height: "55px", cursor: "pointer" }} src='../../../img/StampBtn.png' alt="Stamp Button"></img>
            </button>
            <button className="sidebar-button" onClick={toggleSidebar}><SidebarIcon /></button>
            {isSidebarVisible && <Sidebar style={{ zIndex: "10" }} onToggle={toggleSidebar} />}
            {!loggedIn && (
                <button onClick={() => navigate('/login1')} className="myinfo-button"><Myinfo /></button>
            )}
            <div className='background-circle'></div>
            <div className='small-circle'></div>
            <img className='cat1' src='../../../img/cat1.png'/>
            <img className='cat2' src='../../../img/cat2.png'/>
            <img className='cat3' src='../../../img/cat3.png'/>
            <img className='cat4' src='../../../img/cat4.png'/>
            <img className='cat5' src='../../../img/cat5.png'/>
            <img className='cat6' src='../../../img/cat6.png'/>
            <div className='swuni-text'>고양이 스탬프를<br/>모아 보아요</div>

            {/* <img className='background' src="../../../img/Background.png" alt="배경"
                style={{ width: "349px", height: "355px", position: "absolute" }} /> */}
            <div className='btn-list'>
                {Object.keys(booths).map((booth, index, array) => (
                    <b key={booth} onClick={() => setSelectedBooth(booth)}
                        style={{
                            cursor: 'pointer',
                            marginRight: index !== array.length - 1 ? '15px' : '0px'
                        }}>
                        {booth}
                    </b>
                ))}
            </div>
            <button className='box1' onClick={() => handleBoothClick(selectedBooth)}>
                <b style={{ color: "#ffffff", marginTop: "20%", marginLeft: "-30%", position: "absolute" }}>{booths[selectedBooth].title}</b>
                <img src={`../../img/${booths[selectedBooth].img}`} />
                <div>
                    <b style={{ color: "#5A776D", marginLeft: "-70%", fontSize: "16px" }}>{booths[selectedBooth].title}</b>
                    <p style={{ color: "#9D9FA4" }}>{booths[selectedBooth].description}</p>
                </div>
            </button>
            <p className='visitText'>접속자수</p>
            {error && <div className="error-message">{error}</div>}
            <div className='visitor-layout'>
                <div style={{ fontSize: "12px" }}>오늘 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {todayVisitCount} 명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 누적 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {totalVisitCount}명</div>
            </div>
            <div className='madeby'>
                <p>서울여자대학교 멋쟁이사자처럼 12TH</p>
            </div>
        </div>
    );
}

export default Main;
