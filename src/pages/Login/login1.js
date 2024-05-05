import { useNavigate } from "react-router-dom";
import "./login1.css";

function Login1(){

    let navigate = useNavigate();

return(
    <div className="iphone-frame">
        <p className="login-title">
        로그인</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{marginTop:"9%"}}
        onClick={() => navigate(-1)}
      />
        <img className="login1Img" src="../../../img/login1.png"></img>

        <div className="login1-text">
            <b>로그인하면</b><br/>
            <b>우리 학과 방문율이 올라가요</b>
        </div>


        <button className="login1Btn"
        onClick={()=>{navigate('/login2')}}>
            <b style={{fontSize:"20px", color:"#ffffff"}}>
            로그인하기</b></button><br/>
        <a style={{color:"#898A8D", cursor:"pointer"}} onClick={()=>{navigate('/signup1')}}>회원가입하기</a>

    </div>

)
}

export default Login1;