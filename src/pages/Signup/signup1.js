import { useNavigate } from "react-router-dom";
import "./signup1.css";

function Signup1(){

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
        <img className="signup1Img" src="../../../img/signup1.png"></img>

        <div className="login1-text">
            <b>모바일 열람증으로</b><br/>
            <b>학과를 인증할 수 있어요</b>
        </div>


        <button className="login1Btn"
        onClick={()=>{navigate('/signup2')}}>
            <b style={{fontSize:"20px", color:"#ffffff"}}>
            회원가입하기</b></button><br/>
        <a style={{color:"#898A8D", cursor:"pointer"}} onClick={()=>{navigate('/login1')}}>로그인하기</a>



    </div>

)
}

export default Signup1;