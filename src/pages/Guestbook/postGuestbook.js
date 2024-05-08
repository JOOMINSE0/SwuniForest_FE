import { useNavigate } from "react-router-dom";
import "./preGuestbook.css"

function PostGuestbook(){

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

        <div className="divform1">
        <img src="../../../img/Circle.png"
        style={{width:"106px", position:"relative", marginTop:"15px", marginLeft:"10px"}}></img>
          <b style={{marginTop:"40px", marginLeft:"40px", color:"#898A8D", position:"absolute"}}>우리 학과는 지금 방문율 몇 위?</b>
          <p style={{marginTop:"-63px", marginLeft:"43%", fontSize:"10px", color:"#898A8D", position:"absolute"}}>학과를 인증하면 방문율을 높을 수 있어요</p>
          <button className="guestbookBtn"
          >방문하기</button>
        </div>

        <a onClick={()=>{navigate('/visitorRanking')}}
        className="rankingcheck">
          방문율랭킹 확인하기
          <img style={{width:"14px", height:"15px"}} src="../../../img/arrow.png"></img>
          </a>
        
        
        <div className="divform2"> </div>

        <button 
        onClick={()=>{navigate('/uploadboard')}}
        style={{width:"60px", height:"60px", zIndex:"1", position:"relative", marginTop:"-20%", marginLeft:"55%"
        , borderStyle:"none", backgroundColor:"transparent", cursor:"pointer"}}>
          <img style={{width:"60px", height:"60px"}} src="../../../img/writeBtn.png"></img>
        </button>


    </div>
  )
}

export default PostGuestbook;