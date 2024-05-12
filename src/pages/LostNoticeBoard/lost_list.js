import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './lost_board.css';
import './lost_item_list.css';

function LostList() {
    const [viewMode, setViewMode] = useState("grid");
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const fetchURL = "https://e4ee-118-218-144-103.ngrok-free.app/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchURL + 'api/lostitem/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': '69420',
                    }
                });

                setItems(response.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('서버와의 통신 중 오류가 발생했습니다.');
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredItems = items.filter(item =>
        item.itemTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const LostItemList = ({ items }) => (
        <div className="lost-item-list">
            {items.map((item, index) => (
                <div className="lost-list-item" key={index}>
                    <img src={item.fileName} alt="분실물" className="lost-item-img-list" />
                    <div className="lost-item-details-list">
                        <p className="lost-item-name-list">{item.itemTitle}</p>
                        <p className="lost-item-time">{new Date(item.createdAt).toLocaleString()}</p>
                        <p className="lost-item-place-list-1">주운 곳 | {item.findPoint}</p>
                        <p className="lost-item-place-list-2">맡긴 곳 | {item.putPoint}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const LostItemGrid = ({ items }) => (
        <div className="lost-item-grid">
            {items.map((item, index) => (
                <div className="lost-grid-item" key={index}>
                    <img src={item.fileName} alt="분실물" className="lost-item-img-grid" />
                    <div className="lost-item-details-grid">
                        <p className="lost-item-name-grid">{item.itemTitle}</p>
                        <p className="lost-item-time">{new Date(item.createdAt).toLocaleString()}</p>
                        <p className="lost-item-place-grid-1">주운 곳 | {item.findPoint}</p>
                        <p className="lost-item-place-grid-2">맡긴 곳 | {item.putPoint}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="iphone-frame">
            <p className="lost-title">분실물 게시판</p>
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate('/')}
            />
            <div className="search-container">
                <input
                    className="lost-input"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="상품명 검색"
                />
                <img
                    src="../../../img/search.png"
                    alt="검색"
                    className="search"
                />
            </div>
            <div className="line"></div>

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

            {viewMode === "grid" ? <LostItemGrid items={filteredItems} /> : <LostItemList items={filteredItems} />}

            <button
                className="lost-write-btn"
                onClick={() => navigate("/lost_write")}
            >글쓰기</button>

            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

export default LostList;
