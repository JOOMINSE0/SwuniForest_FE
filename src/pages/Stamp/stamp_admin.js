import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './stamp_admin.css';

function StampAdmin() {
    const navigate = useNavigate();
    const [department, setDepartment] = useState('');
    const [code, setCode] = useState('');
    const [expirationTime, setExpirationTime] = useState('');
    const fetchURL = "https://db30-221-140-29-184.ngrok-free.app/"

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
                console.error('Esrror fetching code data:', error);
                alert('데이터를 가져오는 중 오류가 발생했습니다.');
            }
        };

        fetchCodeData();
    }, [navigate]);

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
                <p className="stamp-department">{department}</p>
                <div className="code-box">
                    <p className="code">{code}</p>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
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
