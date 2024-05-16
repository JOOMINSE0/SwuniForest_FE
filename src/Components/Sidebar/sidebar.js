import { useNavigate } from "react-router-dom";
import { ReactComponent as Boothicon } from '../../assets/Boothicon.svg';
import { ReactComponent as Lineupicon } from '../../assets/Lineupicon.svg';
import { ReactComponent as Guestbookicon } from '../../assets/Guestbookicon.svg';
import { ReactComponent as Boardicon } from '../../assets/Boardicon.svg';
import { ReactComponent as Stampicon } from '../../assets/Stampicon.svg';
import './sidebar.css'

function Sidebar({ onToggle }) {

    let navigate = useNavigate();

    return (
        <>
            <div className="sidebar-layout">
                <Boothicon style={{ marginTop: "60%", cursor: "pointer" }} onClick={() => { navigate('/booth') }} />
                <p className="sidebar-text">부스 배치도</p>
                <Stampicon style={{ cursor: "pointer" }} onClick={() => { navigate('/stamp') }} />
                <p className="sidebar-text">도장판</p>
                <Lineupicon style={{ cursor: "pointer" }} onClick={() => { navigate('/Lineup') }} />
                <p className="sidebar-text">공연 라인업</p>
                <Guestbookicon style={{ cursor: "pointer" }} onClick={() => { navigate('/preGuestbook') }} />
                <p className="sidebar-text">방명록</p>
                <Boardicon style={{ cursor: "pointer" }} onClick={() => { navigate('/lost_board') }} />
                <p style={{ marginBottom: "60%" }} className="sidebar-text">분실물<br /> 게시판</p>
            </div>
            <button className="xBtn" onClick={onToggle}>
                <img className="x" src="../../../img/x.png"></img>
            </button>
        </>

    )
}

export default Sidebar;