import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './stamp_admin.css';

function StampAdmin() {
    const navigate = useNavigate();
    const [department, setDepartment] = useState('');
    const [code, setCode] = useState('');
    const [expirationTime, setExpirationTime] = useState('');
    const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwd799yh.sel5.cloudtype.app/";

    const departmentMapping = {
        "Department1": "경제학과",
        "Department2": "문헌정보학과",
        "Department3": "사회복지학과",
        "Department4": "아동학과",
        "Department5": "행정학과",
        "Department6": "언론영상학부",
        "Department7": "교육심리학과",
        "Department8": "스포츠운동과학과",
        "Department9": "현대미술전공",
        "Department10": "공예전공",
        "Department11": "시각디자인전공",
        "Department12": "첨단미디어디자인전공",
        "Department13": "경영학과",
        "Department14": "패션산업학과",
        "Department15": "디지털미디어학과",
        "Department16": "정보보호학부",
        "Department17": "소프트웨어융합학과",
        "Department18": "데이터사이언스학과",
        "Department19": "산업디자인학과",
        "Department20": "글로벌ICT인문융합학부",
        "Department21": "국어국문학과",
        "Department22": "영어영문학과",
        "Department23": "중어중문학과",
        "Department24": "일어일문학과",
        "Department25": "사학과",
        "Department26": "기독교학과",
        "Department27": "자율전공학부",
        "Department28": "수학과",
        "Department29": "화학과",
        "Department30": "생명환경공학과",
        "Department31": "바이오헬스융합학과",
        "Department32": "원예생명조경학과",
        "Department33": "식품공학과",
        "Department34": "식품영양학과"
    };

    useEffect(() => {
        const fetchCodeData = async () => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                alert('로그인이 필요합니다.');
                navigate('/login1');
                return;
            }

            try {
                const response = await axios.get(fetchURL + 'api/code', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': `application/json`,
                        'ngrok-skip-browser-warning': '69420',
                    }
                });
                const { department, code, expirationTime } = response.data;
                setDepartment(department);
                setCode(code);
                setExpirationTime(expirationTime);


            } catch (error) {
                console.error('Error fetching code data:', error);
                alert('데이터를 가져오는 중 오류가 발생했습니다.');
            }
        };




        fetchCodeData();




    }, [navigate]);

    const departmentName = departmentMapping[department] || '학과 정보 없음';

    return (
        <div className="iphone-frame">
            <div className="stamp-header">
                <img
                    src="../../../img/back.png"
                    alt="이전버튼"
                    className="back-btn"
                    onClick={() => navigate('/login1')}
                />
                <p className="stamp-title">인증번호</p>
            </div>

            <div className="stamp-content">
                <p className="stamp-department">{departmentName}</p>
                <div className="code-box">
                    <p className="code">{code}</p>

                    <p className="valid-time">유효시간 {expirationTime}</p>
                </div>
                <p className="instruction">
                    사용자의 도장판 목록 상단에 인증번호를 입력하면 <br /> 학과 도장을 부여할 수 있어요.
                </p>
            </div>
        </div>
    );
}

export default StampAdmin;