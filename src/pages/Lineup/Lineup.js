import { useNavigate } from "react-router-dom";
import "./lineup.css";

function Lineup(){

    let navigate = useNavigate();

return(
    <div className="iphone-frame">
    <p className="login-title">
        공연 라인업</p>
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        style={{marginTop:"9%"}}
        onClick={() => navigate(-1)}
      />

      <div className="month">May</div>

      <div>
        <p>wed</p>
        <b>24</b>
      </div>


      <div>
      <p>Thu</p>
      <b>25</b>
      </div>


      <div>
        <p>Fri</p>
        <b>26</b>
      </div>

    <div>

      
    </div>







    </div>
)
}

export default Lineup;