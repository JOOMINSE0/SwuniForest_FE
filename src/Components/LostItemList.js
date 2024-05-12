import React from 'react';

function LostItemList({ items }) {
    return (
        <div className="lost-item-list">
            {items.map((item, index) => (
                <div className="lost-list-item" key={index}>
                    <img src={item.fileName} alt="분실물" className="lost-item-img-list" />
                    <div className="lost-item-details-list">
                        <p className="lost-item-name-list">{item.itemTitle}</p>
                        <p className="lost-item-time">{new Date(item.createdAt).toLocaleString()}</p>
                        <p className="lost-item-place-list-1">주운 곳 | {item.findPoint}</p>
                        <p className="lost-item-place-list-2">맡긴 곳 | {item.putPoint}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LostItemList;
