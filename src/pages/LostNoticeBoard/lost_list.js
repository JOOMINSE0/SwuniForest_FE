import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './lost_board.css';
import './lost_item_list.css';
import LostItemGrid from "../../Components/LostItemGrid";
import LostItemList from "../../Components/LostItemList";
import axios from 'axios';

function LostList() {
    const [viewMode, setViewMode] = useState("grid");
    const [itemTitle, setItemTitle] = useState('');
    const [fileName, setFilename] = useState('');
    const [findPoint, setfindPoint] = useState('');
    const [putPoint, setPutpoint] = useState('');
    const [createdAt, setCreateat] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://5a86-114-70-38-149.ngrok-free.app/api/lostitem');
                console.log(response);
                console.log(response);

            } catch (error) {
                if (error.response && error.response.status === 500) {
                    alert("이미 존재하는 회원입니다.");
                } else {
                    console.error('Error:', error);
                    alert('서버와의 통신 중 오류가 발생했습니다.');
                }
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
                onClick={() => navigate(-1)}
            />
            <div className="search-container">
                <input className="lost-input" />
                <img
                    src="../../../img/search.png"
                    alt="검색"
                    className="search"
                />
            </div>
            <div className="line"></div>
            <select className="sort-select">
                <option>최신순</option>
                <option>오래된순</option>
            </select>
            <div className="icon-list">
                <img
                    src="../../../img/grid.png"
                    alt="그리드형식"
                    className={`grid-show ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => setViewMode("grid")}
                />
                <img
                    src="../../../img/list.png"
                    alt="리스트형식"
                    className={`list-show ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => setViewMode("list")}
                />
            </div>

            {viewMode === "grid" ? <LostItemGrid /> : <LostItemList />}

            <button
                className="lost-write-btn"
                onClick={() => navigate("/lost_write")}
            >글쓰기</button>
        </div>
    );
}

export default LostList;
