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
        gap: '10px'
    }} 
    className="divform1"
>
    <div className="one" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"5%"}}>
        <img style={{width:"35px", height:"39px"}} src="../../../img/1.png"></img>
    </div>
    <div className="two" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{width:"35px", height:"39px"}} src="../../../img/2.png"></img>
    </div>
    <div className="three" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"10%"}}>
        <img style={{width:"35px", height:"39px"}} src="../../../img/3.png"></img>
    </div>
</div>

        

        <p>학과별 방문율 등수</p>
        
            <div className="first">1등
            <div style={{width: "0.6px", height: "28px", background: "#ffffff", marginTop:"-7%", marginLeft:"13%"}}> </div></div>
            <div className="second">2등
            <div style={{width: "0.6px", height: "28px", background: "#ffffff", marginTop:"-7%", marginLeft:"13%"}}> </div></div>
            <div className="third">3등
            <div style={{width: "0.6px", height: "28px", background: "#ffffff", marginTop:"-7%", marginLeft:"13%"}}> </div></div>
            <div className="fourth">4등
            <div style={{width: "0.6px", height: "28px", background: "#B2E0D0", marginTop:"-7%", marginLeft:"13%"}}> </div></div>
            <div className="fifth">5등
            <div style={{width: "0.6px", height: "28px", background: "#B2E0D0", marginTop:"-7%", marginLeft:"13%"}}> </div></div>
        


        
        
        

    </div>

)
}

export default VisitorRanking;