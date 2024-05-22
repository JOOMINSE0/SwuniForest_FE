import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './stamp_detail.css';
import './stamp.css';

function StampDetail3() {
    let navigate = useNavigate();
    const location = useLocation();
    const [score, setScore] = useState(location.state.score);
    const total = 7;
    const [departments, setDepartments] = useState([
        { name: "경영학과", checked: false },
        { name: "패션산업학과", checked: false },
        { name: "디지털미디어학과", checked: false },
        { name: "정보보호학부", checked: false },
        { name: "소프트웨어융합학과", checked: false },
        { name: "데이터사이언스학과", checked: false },
        { name: "산업디자인학과", checked: false }
    ]);

    const fetchStampStatus = async () => {
        const token = sessionStorage.getItem('token');
        const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwh5tfst.sel5.cloudtype.app/";
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
                const depKey = `dep${index + 13}Checked`;
                return { ...dept, checked: response.data[depKey] };
            });

            setDepartments(updatedDepartments);

            const newScore = updatedDepartments.filter(dept => dept.checked).length;
            setScore(newScore);

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
                onClick={() => navigate('/stamp_list')}
            />
            <p className="stamp-title">도장판</p>

            <div className="back-circle"></div>
            <img
                src={passed ? "../../../img/cat_3.png" : "../../../img/cat_3_line.png"}
                alt="고양이 3"
                className="cat-image"
            />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-15px" }}>그루밍마스터</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-165px" }}>미래산업융합대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">그루밍력</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">애교</span>
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
                                {dept.checked && <img src="../../../img/cat_3.png" alt="고양이 3" className="cat-stamp" />}
                            </div>
                            <p>{dept.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default StampDetail3;
