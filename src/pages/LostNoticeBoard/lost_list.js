import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './lost_board.css';
import './lost_item_list.css';
import LostItemGrid from "../../Components/LostItemGrid";
import LostItemList from "../../Components/LostItemList";

function LostList() {
    const [viewMode, setViewMode] = useState("grid");
    const navigate = useNavigate();

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
