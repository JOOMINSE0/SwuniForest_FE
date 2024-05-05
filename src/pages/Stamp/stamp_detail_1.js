import { useNavigate } from "react-router-dom";
import './stamp_success.css';
import './stamp.css';
function StampDetail1() {

    let navigate = useNavigate();

    return (
        <div className="iphone-frame">
            <img
                src="../../../img/close.png"
                alt="취소버튼"
                className="close-btn"
                onClick={() => navigate(-1)}
            />
            <p className="stamp-title">
                도장판
            </p>
            <img src="../../../img/cat_1.png" alt="고양이 1" className="cat-image"
                style={{ width: "357px", height: "357px" }} />
            <div className='cat-name'>핫도그 꼬리냥</div>
        </div>

    )
}

export default StampDetail1;