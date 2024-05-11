import { useNavigate } from "react-router-dom";
import "./visitorRanking.css";

function VisitorRanking(){
    let navigate = useNavigate();

return(
    <div className="iphone-frame">
    <p className="login-title">방명문율 랭킹</p>
        <img
            src="../../../img/back.png"
            alt="Back button"
            className="close-btn"
            style={{ marginTop: "9%", marginRight: "80%", width: "14px" }}
            onClick={() => navigate(-1)}
        />

<div 
    style={{
        width: '380px', 
        height: '169px', 
        marginTop:"-10%", 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        position:"absolute",
        marginTop:"-120%"
    }} 
    className="divform1"
>   

    <div className="one-text">데이터사이언스학과</div>
    <div className="one" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"13%"}}>
    <img style={{width:"35px", height:"39px"}} src="../../../img/2.png"></img>
    </div>

    <div className="two-text">경영학과</div>
    <div className="two" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"7%"}}>
    
        <img style={{width:"35px", height:"39px"}} src="../../../img/1.png"></img>
    </div>

    <div className="three-text">패션산업학과</div>
    <div className="three" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"18%"}}>
        <img style={{width:"35px", height:"39px"}} src="../../../img/3.png"></img>
    </div>
</div>

        <p style={{color:"#7E7F82"}}>학과별 방문율 등수</p>
        
            <div className="first">1등
            <div className="vertical1"> </div>
            <div style={{position:"absolute", marginLeft:"25%", marginTop:"-6%"}}>경영학과</div>
            <div className="ratio">28%</div>
            </div>


            <div className="second">2등
            <div className="vertical1"> </div>
            <div style={{position:"absolute", marginLeft:"25%", marginTop:"-6%"}}>데이터사이언스학과</div>
            <div className="ratio">27%</div>
            </div>


            <div className="third">3등
            <div className="vertical1"> </div>
            <div style={{position:"absolute", marginLeft:"25%", marginTop:"-6%"}}>패션산업학과</div>
            <div className="ratio">25%</div>
            </div>


            <div className="fourth">4등
            <div className="vertical2"> </div>
            <div style={{position:"absolute", marginLeft:"25%", marginTop:"-6%"}}>소프트웨어융합학과</div>
            <div className="ratio">23%</div>
            </div>


            <div className="fifth">5등
            <div className="vertical2"> </div>
            <div style={{position:"absolute", marginLeft:"25%", marginTop:"-6%"}}>정보보호학과</div>
            <div className="ratio">19%</div>
            </div>
        
    </div>

)
}

export default VisitorRanking;