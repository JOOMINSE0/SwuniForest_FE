import { useNavigate } from "react-router-dom";
import './lost_board.css';

function LostBoard() {
    let navigate = useNavigate();

    return (
        <div className="iphone-frame">
            <p className="lost-title">분실물 게시판</p>
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate(-1)} />
            <p className="lost-text-1">
                <span style={{ color: "#B2E0D0" }}>잃어버린 물건</span>은<br />없으신가요?
            </p>
            <p className="lost-text-2">
                바쁘게 축제를 즐기시는 분들을 위해 <br />주인을 잃은 물건들을 모아봤어요
            </p>
            <div className='back-circle-1'></div>
            <div className="lost-item-list" style={{ border: "0.4px solid #B6B6B6", width: "350px", height: "400px" }}>
                <div className="scroll">
                    <div className="lost-item">
                        <img src="../../../img/lost-item.png" alt="분실물사진" className="lost-item-img" />
                        <div className="lost-item-details">
                            <p className="lost-item-name">
                                <span className="green-dot">•</span>갈색 반지갑
                            </p>
                            <p className="lost-item-place">학생누리관 1층 로비 학사지원실</p>
                        </div>
                    </div>

                    <div className="lost-item">
                        <img src="../../../img/lost-item.png" alt="분실물사진" className="lost-item-img" />
                        <div className="lost-item-details">
                            <p className="lost-item-name">
                                <span className="green-dot">•</span>C타입 충전기
                            </p>
                            <p className="lost-item-place">도서관 4층 열람실 → 도서관 1층 데스크</p>
                        </div>
                    </div>

                    <div className="lost-item">
                        <img src="../../../img/lost-item.png" alt="분실물사진" className="lost-item-img" />
                        <div className="lost-item-details">
                            <p className="lost-item-name">
                                <span className="green-dot">•</span>C타입 충전기
                            </p>
                            <p className="lost-item-place">도서관 4층 열람실 → 도서관 1층 데스크</p>
                        </div>
                    </div>

                    <div className="lost-item">
                        <img src="../../../img/lost-item.png" alt="분실물사진" className="lost-item-img" />
                        <div className="lost-item-details">
                            <p className="lost-item-name">
                                <span className="green-dot">• </span> C타입 충전기
                            </p>
                            <p className="lost-item-place">도서관 4층 열람실 → 도서관 1층 데스크</p>
                        </div>
                    </div>
                </div>

                <div className="line" style={{ width: "300px" }}></div>
                <button className="lost-more-btn" onClick={() => navigate("/lost_list")}>
                    분실물 더 찾아보기 <span className="more-indicator"></span>
                </button>
            </div>
            <button className="lost-write-btn" onClick={() => navigate("/lost_write")}>글쓰기</button>
        </div >
    );
}

export default LostBoard;
