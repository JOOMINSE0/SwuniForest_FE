import { useNavigate } from "react-router-dom";

function LostWrite(){
// 아이템 리스트 컴포넌트로 빼서 아이콘에 따라서 달라지도록
    let navigate = useNavigate();

return(
    <div className="iphone-frame">
분실물 게시판     
<button
          onClick={() => {
            navigate("/lost_board");
          }}>업로드</button>
        </div>

)
}

export default LostWrite;