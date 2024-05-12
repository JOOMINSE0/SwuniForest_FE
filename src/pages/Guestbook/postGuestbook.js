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

        {/* <div className="divform1">
        <img src="../../../img/Circle.png"
        style={{width:"106px", position:"relative", marginTop:"15px", marginLeft:"10px"}}></img>
        <b style={{marginTop:"35px", marginLeft:"75px", color:"#9D9FA4", position:"absolute", fontSize:"14px"}}>{username}의 학과</b>
          <b style={{marginTop:"60px", marginLeft:"40px", color:"#898A8D", position:"absolute", fontSize:"16px"}}>{major}<span style={{color:"#9D9FA4"}}>의</span>방문율</b>
          <p style={{marginTop:"-43px", marginLeft:"50%", fontSize:"24px", color:"#898A8D", position:"absolute"}}>{visitRate}%</p>
          <p style={{marginTop:"-43px", marginLeft:"70%", fontSize:"24px", color:"#898A8D", position:"absolute"}}>{rank}위</p>
        </div> */}

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