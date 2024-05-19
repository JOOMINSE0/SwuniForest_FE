import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './stamp_detail.css';
import './stamp.css';

function StampDetail1() {
    let navigate = useNavigate();
    const location = useLocation();
    const [score, setScore] = useState(location.state.score);
    const total = 8;
    const [departments, setDepartments] = useState([
        { name: "경제학과", checked: false },
        { name: "문헌정보학과", checked: false },
        { name: "사회복지학과", checked: false },
        { name: "아동학과", checked: false },
        { name: "행정학과", checked: false },
        { name: "언론영상학부", checked: false },
        { name: "교육심리학과", checked: false },
        { name: "스포츠운동과학과", checked: false }
    ]);

    const fetchStampStatus = async () => {
        const token = sessionStorage.getItem('token');
        const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/";
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
                const depKey = `dep${index + 1}Checked`;
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
            <img src={passed ? "../../../img/cat_1.png" : "../../../img/cat_1_line.png"} alt="고양이 1" className="cat-image" />
            <div className="cat-name-wrapper">
                <div className="cat-name" style={{ marginLeft: "-15px" }}>핫도그 꼬리냥</div>
                <div className="score-circle">
                    {score}/{total}
                </div>
            </div>
            <div className="college-name" style={{ marginLeft: "-210px" }}>사회과학대학</div>

            <div className="cat-stats">
                <div className="stat">
                    <span className="category">식탐</span>
                    <span className="value" style={{ color: "#6EA693" }}>82%</span>
                </div>
                <div className="stat">
                    <span className="category">핑크 젤리</span>
                    <span className="value" style={{ color: "#FFD391" }}>93%</span>
                </div>
                <div className="stat">
                    <span className="category">예민함</span>
                    <span className="value" style={{ color: "#FF9885" }}>65%</span>
                </div>
            </div>

            <div className="departments">
                {
                    departments.map((dept, index) => (
                        <div className="department" key={index}>
                            <div className="circle">
                                {dept.checked && <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-stamp" />}
                            </div>
                            <p>{dept.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default StampDetail1;
