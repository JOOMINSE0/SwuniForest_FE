import React from 'react';
import './otherBooth.css';

function OtherBooth({ selectedCategory }) {
    return (
        <div className="booth-container">
            <div className="grid-container">
                <div className="button rounded">무대</div>
                <div className='num-column' style={{
                    height: "90px", width: "13px", backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF",
                    color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                }}>1 2 3 4</div>
                <div className='num-column' style={{
                    height: "110px", marginLeft: "30px", backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF", color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                }}>13 14 15 16 17</div>

                <div className='num-container'>
                    <div className='num-row' style={{
                        backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF", color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                    }}>9 10 11 12</div>
                    <div className='num-row' style={{
                        backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF", color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                    }}>18 19 20 21</div>
                    <div className='num-row' style={{
                        width: "50px", marginLeft: "30px", backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF", color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                    }}>22 23</div>
                </div>
                <div className='num-column' style={{
                    marginLeft: "3px", backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF", color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                }}>24 25 26 27 28</div>
                <br />
                <div className='button' style={{ backgroundColor: selectedCategory === "플리마켓" ? "#6EA693" : "", color: selectedCategory === "플리마켓" ? "#FFF" : "" }}>플리마켓</div>
                <div className="button-group" style={{ marginTop: "50px" }}>
                    <div className='num-row' style={{
                        width: "80px", backgroundColor: selectedCategory === "학과부스" ? "#6EA693" : "#FFF", color: selectedCategory === "학과부스" ? "#FFF" : "#9D9FA4"
                    }}>5 6 7 8</div>
                    <div className="food" style={{ backgroundColor: selectedCategory === "푸드트럭" ? "#6EA693" : "", color: selectedCategory === "푸드트럭" ? "#FFF" : "" }}>푸드트럭</div>
                </div>
                <div className="button-group">
                    <div className="button" style={{ width: "110px" }}>학생누리관</div>
                    <div className="button" style={{ width: "150px" }}>제1과학관</div>
                </div>
            </div>
        </div>
    );
}

export default OtherBooth;
