import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './booth.css';
import PhotoBooth from '../../Components/Booth/photoBooth.js';
import OtherBooth from '../../Components/Booth/otherBooth.js';
import DepartmentList from '../../Components/Booth/departmentList.js';
import FleaList from '../../Components/Booth/fleaList.js';
import MenuList from '../../Components/Booth/menuList.js';
function Booth() {
    let navigate = useNavigate();
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || "학과부스");
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    useEffect(() => {
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
        }
    }, [location.state?.selectedCategory]);

    const categories = ["학과부스", "푸드트럭", "플리마켓", "포토부스"];
    function renderBoothComponent() {
        let Component = null;

        switch (selectedCategory) {
            case "포토부스":
                Component = PhotoBooth;
                break;
            case "학과부스":
                Component = () => (
                    <div>
                        <OtherBooth selectedCategory={selectedCategory} />
                        <DepartmentList />
                    </div>
                );
                break;
            case "플리마켓":
                Component = () => (
                    <div style={{ marginLeft: "30px" }}>
                        <OtherBooth selectedCategory={selectedCategory} />
                        {/* <FleaList /> */}
                    </div>
                );
                break;
            case "푸드트럭":
                Component = () => (
                    <div style={{ marginLeft: "26.5px" }}>
                        <OtherBooth selectedCategory={selectedCategory} style={{ marginLeft: "30px" }} />
                        <MenuList />
                    </div>
                );
                break;

        }

        return <div className="component-container"><Component /></div>;
    }

    useEffect(() => {
        if (selectedCategory) {
            switch (selectedCategory) {
                case "포토부스":
                    setTime("5월 20일(월) ~ 5월 28일(화)");
                    setPlace("제2과학관 ~ 고명우 기념관 사이 주차장");
                    break;
                case "플리마켓":
                    setTime("5월 22일(수) ~ 5월 24일(금) 11:00 ~ 17:00");
                    setPlace("학생누리관 지하 1층 앞");
                    break;
                case "푸드트럭":
                    setTime("5월 22일(수) ~ 5월 24일(금) 11:00 ~ 21:00");
                    setPlace(`서울여자대학교 제1과학관 앞 도로${"       "}   `);
                    break;
                case "학과부스":
                    setTime("5월 22일(수) ~ 5월 24일(금) 11:00 ~ 16:30");
                    setPlace("서울여자대학교 잔디광장 및 만주대로");
                    break;
                default:
                    setTime('');
                    setPlace('');
            }
        }
    }, [selectedCategory]);
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
            <p className="select-category">{selectedCategory}</p>
            <p className="select-time" style={{
                marginLeft: selectedCategory === "포토부스" ? "-164.5px" : ""
            }}
            >{time}</p>
            <p className="select-place" style={{ marginLeft: selectedCategory === "포토부스" ? "-30px" : "-50px" }}>{place}</p>


            {renderBoothComponent()}
        </div>
    );
}

export default Booth;


