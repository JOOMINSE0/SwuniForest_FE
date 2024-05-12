import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './stamp_detail.css';
import './stamp.css';

function StampDetail4() {
    let navigate = useNavigate();
    const location = useLocation();
    const [score, setScore] = useState(location.state.score);
    const total = 7;
    const [departments, setDepartments] = useState([
        { name: "글로벌ICT인문융합학부", checked: false },
        { name: "국어국문학과", checked: false },
        { name: "영어영문학과", checked: false },
        { name: "중어중문학과", checked: false },
        { name: "일어일문학과", checked: false },
        { name: "사학과", checked: false },
        { name: "기독교학과", checked: false }
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


            const updatedDepartments = departments.map((dept, index) => {
                const depKey = `dep${index + 20}Checked`;
                return { ...dept, checked: response.data[depKey] };
            });

            setDepartments(updatedDepartments);

            const newScore = updatedDepartments.filter(dept => dept.checked).length;
            setScore(newScore);
            sessionStorage.setItem('score4', newScore);

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
            <img src={passed ? "../../../img/cat_4.png" : "../../../img/cat_4_line.png"}
                alt="고양이 4" className="cat-image" />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-65px" }}>10시 10분</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-245px" }}>인문대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">인자함</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">눈 감기</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">분노</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                {
                    departments.map((dept, index) => (
                        <div className="department" key={index}>
                            <div className="circle">
                                {dept.checked && <img src="../../../img/cat_4.png" alt="고양이 4" className="cat-stamp" />}
                            </div>
                            <p>{dept.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default StampDetail4;
