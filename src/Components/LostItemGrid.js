import React from 'react';

function LostItemGrid({ items }) {
    return (
        <div className="lost-item-grid">
            {items.map((item, index) => (
                <div className="lost-grid-item" key={index}>
                    <img src={item.fileName} alt="분실물" className="lost-item-img-grid" />
                    <div className="lost-item-details-grid">
                        <p className="lost-item-name-grid">{item.itemTitle}</p>
                        <p className="lost-item-time">{new Date(item.createdAt).toLocaleString()}</p>
                        <p className="lost-item-place-grid-1">주운 곳 | {item.findPoint}</p>
                        <p className="lost-item-place-grid-2">맡긴 곳 | {item.putPoint}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LostItemGrid;
