import { useNavigate } from "react-router-dom";
import "./signup2.css";

function Signup2(){

    let navigate = useNavigate();

return(
    <div className="iphone-frame">
        <p className="login-title">
        회원가입</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{marginTop:"9%"}}
        onClick={() => navigate(-1)}
      />



    </div>

)
}

export default Signup2;