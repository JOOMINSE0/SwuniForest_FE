import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './lost_board.css';

function LostBoard() {
    const navigate = useNavigate();
    const [lostItems, setLostItems] = useState([]);
    const fetchURL = "https://db30-221-140-29-184.ngrok-free.app/"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchURL + 'api/lostitem/', {
                    headers: {
                        'Content-Type': `application/json`,
                        'ngrok-skip-browser-warning': '69420',
                    }
                });

                setLostItems(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
                alert('데이터를 불러오는 중 오류가 발생했습니다.');
            }
        };

        fetchData();
    }, []);

    return (
        <div className="iphone-frame">
            <p className="lost-title">분실물 게시판</p>
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate('/')}
            />
            <p className="lost-text-1">
                <span style={{ color: "#B2E0D0" }}>잃어버린 물건</span>은<br />없으신가요?
            </p>
            <p className="lost-text-2">
                바쁘게 축제를 즐기시는 분들을 위해 <br />주인을 잃은 물건들을 모아봤어요
            </p>
            <div className='back-circle-1'></div>
            <div className="lost-item-list" style={{ border: "0.4px solid #B6B6B6", width: "350px", height: "400px" }}>
                <div className="scroll">
                    {lostItems.map((item, index) => (
                        <div className="lost-item" key={index}>
                            <img src={item.fileName} alt="분실물사진" className="lost-item-img" />
                            <div className="lost-item-details">
                                <p className="lost-item-name">
                                    <span className="green-dot">•</span>{item.itemTitle}
                                </p>
                                <p className="lost-item-place">{item.findPoint} → {item.putPoint}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="line" style={{ width: "300px" }}></div>
                <button className="lost-more-btn" onClick={() => navigate("/lost_list")}>
                    분실물 더 찾아보기 <span className="more-indicator"></span>
                </button>
            </div>
            <button className="lost-write-btn" onClick={() => navigate("/lost_write")}>글쓰기</button>
        </div>
    );
}

export default LostBoard;
