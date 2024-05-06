import { useNavigate } from "react-router-dom";
import "./preGuestbook.css"

function PreGuestbook(){

    let navigate = useNavigate();

return(
    <div className="iphone-frame">
    <p className="login-title">
        방명록</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{marginTop:"9%"}}
        onClick={() => navigate(-1)}
      />

        <div className="contents"></div>
    </div>
)
}

export default PreGuestbook;