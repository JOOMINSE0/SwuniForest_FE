function LostItemList() {
    const items = [
        {
            name: "갈색 반지갑", location1: "학생누리관 1층 로비", location2: "학사지원실", image: "../../../img/lost-item.png", time: "2시간 전"
        },
        { name: "C타입 충전기", location1: "도서관 4층 열람실", location2: "도서관 1층 데스크", image: "../../../img/lost-item.png", time: "4시간 전" },
    ];

    return (
        <div className="lost-item-list">
            {items.map((item, index) => (
                <div className="lost-list-item" key={index}>
                    <img src={item.image} alt="분실물" className="lost-item-img-list" />
                    <div className="lost-item-details-list">
                        <p className="lost-item-name-list">{item.name}</p>
                        <p className="lost-item-time"> {item.time}</p>
                        <p className="lost-item-place-list-1">주운 곳 | {item.location1}</p>
                        <p className="lost-item-place-list-2">맡긴 곳 | {item.location2}</p>

                    </div>
                </div>
            ))}
        </div>
    );
}


export default LostItemList