import "./fleaList.css"

function fleaList() {
    return (
        <div>
            <p className="flea-title">셀러 목록</p>

            <div className="flea-container">
                <div flea-box>
                    <p className="title">SEN</p>
                    <p className="detail">비즈키링 · 모루인형 판매 </p>
                </div>
                <div flea-box>
                    <p className="title">담기</p>
                    <p className="detail">도자기 판매 - 서울여자대학교 공예전공 도자 소학회 </p>
                </div>
                <div flea-box>
                    <p className="title">체리쉬미앤유</p>
                    <p className="detail">모루인형 · 키링 · 에어팟케이스 · 버즈케이스 · 그립톡 판매</p>
                </div>
                <div flea-box>
                    <p className="title">R.GP</p>
                    <p className="detail">키링 제작 - 시각디자인전공 그래픽 디자인 소학회</p>
                </div>
                <div flea-box>
                    <p className="title">시루모루</p>
                    <p className="detail">인형 판매</p>
                </div>
                <div flea-box>
                    <p className="title">뜨개다방</p>
                    <p className="detail">뜨개 제품 판매</p>
                </div>
                <div flea-box>
                    <p className="title">뜨개슌 애옹</p>
                    <p className="detail">뜨개 제품 판매</p>
                </div>
                <div flea-box>
                    <p className="title">Vintage Swup</p>
                    <p className="detail"> 빈티지 의류 판매</p>
                </div>
            </div>
        </div>

    )
}

export default fleaList