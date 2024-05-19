import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './booth.css';

function Booth() {
    let navigate = useNavigate();
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || "학과부스");

    useEffect(() => {
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
        }
    }, [location.state?.selectedCategory]);

    const categories = ["학과부스", "푸드트럭", "포토부스", "플리마켓"];

    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate('/')}
            />
            <p className="booth-title">부스배치도</p>
            <div className="booth-layout">
                <div className="booth-categories">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            className={`booth-category ${selectedCategory === category ? "selected" : ""}`}
                            style={{
                                borderRadius: index === 0 ? "40px 0 0 40px" : index === categories.length - 1 ? "0 40px 40px 0" : "0",
                            }}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="booth-map">
                {/* Add booth map content here */}
            </div>

            <div className="all-booth-location">
                <div className="booth-layout">
                    <div className="booth-1">
                        <div>5 6 7 8</div>
                    </div>
                </div>

                <div className="booth-locations">
                    <button className="booth-location">학생누리관</button>
                    <button className="booth-location">제1과학관</button>
                </div>
            </div>

            <div className="booth-places">
                <div className="place">
                    <button>1 2 3 4</button>
                    <span>미래산업융합대학</span>
                </div>
                <div className="place">
                    <button>5 6 7 8</button>
                    <span>아트앤디자인스쿨</span>
                </div>
                <div className="place">
                    <button>10 11 12 13 14</button>
                    <span>자율전공학부</span>
                </div>
            </div>
        </div>
    );
}

export default Booth;
