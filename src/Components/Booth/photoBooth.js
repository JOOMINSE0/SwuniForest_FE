import './photoBooth.css'


function photoBooth() {
    return (
        <div>
            <div className="booth-container">
                <div className="photo-booth-1">제2과학관</div>
                <div className="plus"></div>

                <div className="sub">
                    <div className="photo-booth-2">포토부스</div>
                    <div className="photo-booth-3 long">고명우 기념관</div>
                </div>
                <div className="photo-booth-4">학생누리관</div>
            </div>
            <div className='photo-container'>
                <p className='photowall'>포토월</p>
                <p className='photo-booth-time'>5월 22일(수) ~ 5월 24일(금)</p>
                <p className='photo-booth-place'>서울여자대학교 한샘길</p>
                <p className='receipt'>영수증 사진기</p>
                <p className='photo-booth-time'>5월 22일(수) ~ 5월 24일(금)</p>
                <p className='photo-booth-place'>서울여자대학교 만주벌판 내 총학생회 부스</p>
            </div>

        </div>



    )
}


export default photoBooth
