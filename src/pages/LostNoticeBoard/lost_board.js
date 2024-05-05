import { useNavigate } from "react-router-dom";

function LostBoard(){

    let navigate = useNavigate();

return(
    <div className="iphone-frame">
분실물 게시판   
<button
          onClick={() => {
            navigate("/lost_list");
          }}>분실물 더 찾아보기</button>  
<button
          onClick={() => {
            navigate("/lost_write");
          }}>글쓰기</button>
        </div>

)
}

export default LostBoard;