import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './stamp_detail.css';
import './stamp.css';

function StampDetail2() {
    let navigate = useNavigate();
    const location = useLocation();
    const [score, setScore] = useState(location.state.score);
    const total = 4;
    const [departments, setDepartments] = useState([
        { name: "현대미술전공", checked: false },
        { name: "공예전공", checked: false },
        { name: "시각디자인전공", checked: false },
        { name: "첨단미디어디자인전공", checked: false }
    ]);

    const fetchStampStatus = async () => {
        const token = sessionStorage.getItem('token');
        const fetchURL = "https://e4ee-118-218-144-103.ngrok-free.app/";
        if (!token) {
            alert('로그인이 필요합니다.');
            navigate('/login1');
            return;
        }

        try {
            const response = await axios.get(`${fetchURL}api/stamp/all`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': '69420',

                }
            });

            console.log('Stamp Status:', response.data);

            const updatedDepartments = departments.map((dept, index) => {
                const depKey = `dep${index + 9}Checked`;
                return { ...dept, checked: response.data[depKey] };
            });

            setDepartments(updatedDepartments);

            const newScore = updatedDepartments.filter(dept => dept.checked).length;
            setScore(newScore);
            sessionStorage.setItem('score2', newScore);

        } catch (error) {
            console.error('Error fetching stamp status:', error);
            alert('스탬프 상태를 가져오는 중 오류가 발생했습니다.');
        }
    };

    useEffect(() => {
        fetchStampStatus();
    }, []);

    const passed = score >= total / 2;

    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate('/stamp')}
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
                {
                    departments.map((dept, index) => (
                        <div className="department" key={index}>
                            <div className="circle">
                                {dept.checked && <img src="../../../img/cat_2.png" alt="고양이 2" className="cat-stamp" />}
                            </div>
                            <p>{dept.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default StampDetail2;

