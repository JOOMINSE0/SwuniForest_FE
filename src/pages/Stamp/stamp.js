import React from 'react';
import { useNavigate } from "react-router-dom";
import './stamp.css';

function Stamp() {
  let navigate = useNavigate();

  return (
    <div className="iphone-frame">
      <img
        src="../../../img/close.png"
        alt="취소버튼"
        className="close-btn"
        onClick={() => navigate('/')}
      />
      <div className="cat-list">
        <div className='back-circle-1'></div>
        <div className='back-circle-2'></div>
        <div className="cat-list-1">
          <img src="../../../img/cat_1.png" alt="고양이 1" />
          <img src="../../../img/cat_2.png" alt="고양이 2" />
        </div>
        <div className="cat-list-2">
          <img src="../../../img/cat_3.png" alt="고양이 3" />
          <img src="../../../img/cat_4.png" alt="고양이 4" />
        </div>
        <div className="cat-list-3">
          <img src="../../../img/cat_5.png" alt="고양이 5" />
          <img src="../../../img/cat_6.png" alt="고양이 6" />
        </div>
      </div>
      <div className='text'>
        <p className='text-1'>고양이를 모아보세요!</p>
        <p className='text-2'>축제 기간 동안 여러 부스를 체험하면<br />
          특별한 고양이 스템프를 받을 수 있어요.<br /><br />
          모여라 슈니의 숲과 함께 고양이 스템프를 모아 보아요.</p>
      </div>
      <button className="stamp-btn" onClick={() => navigate("/stamp_list")}>
        자세히 보기
      </button>
    </div>
  );
}

export default Stamp;
