import { useNavigate } from "react-router-dom";
import "./login2.css";

function Login2(){

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
    <div style={{marginTop:"260px"}}>
    <p className="stId">학번</p>
    <input className="input"></input>
        <div 
        style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginTop:"0px"}}></div>

        <p className="stPw">비밀번호</p>
        <input className="input"></input>
        <div 
        style={{width: "360px", height: "0.6px", background: "#E3E3E3", marginTop:"0px"}}></div>

    </div>
        


    <p style={{marginTop:"110px"}}>아직도 모바일 열람증 인증을 하지 않으셨나요?</p>
    <button onClick={()=>{navigate('/signup1')}} className="L2signupBtn"><div style={{color:"#898A8D"}}
    >회원가입하기</div></button>


    <button onClick={()=>{navigate('/')}} className="confirmButton1">
        <b style={{fontSize:"20px", color:"#ffffff"}}>확인</b></button>
    </div>

)
}

export default Login2;