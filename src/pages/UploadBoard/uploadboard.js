import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Gallery } from '../../assets/Gallery.svg';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import "./uploadboard.css";

function UploadBoard() {
    let navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const [isAnonymous, setIsAnonymous] = useState(false); 

    const handleAttachClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null); // 이미지 미리보기 삭제
    };

    const toggleAnonymous = () => {
        setIsAnonymous(!isAnonymous);
    };

    return (
        <div className="iphone-frame">
            <p className="login-title">방명록</p>
            <img
                src="../../../img/back.png"
                alt="Back button"
                className="close-btn"
                style={{ marginTop: "9%", marginRight: "80%", width: "14px" }}
                onClick={() => navigate(-1)}
            />
            <button className='upload'>업로드</button>
            <div className="form">
                <div className="form2">
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button style={{ marginTop: "40%", marginLeft: "45%", width: "50px", height: "50px", borderStyle: "none", backgroundColor: "#ffffff", cursor: "pointer" }} onClick={handleAttachClick}>
                        <Gallery style={{ marginTop: "-5%", marginLeft: "-50%", width: "45px", height: "45px" }} />
                    </button>
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" style={{ width: '100%' }} />
                            <button className="remove-image-btn" onClick={handleRemoveImage}>X</button>
                        </div>
                    )}
                </div>
                <div style={{ marginTop: "10%" }}>
                    <Pen/>
                    <input className="uploadcontent"
                        placeholder="내용을 작성해주세요"></input>
                    <div className="line-div"></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '35%' }}>
                    <div style={{ color:"#ffffff", marginLeft:"5%", fontWeight:'bolder'}}>익명여부</div>
                    <div className="toggle-switch">
                        <input type="checkbox" id="toggle-anonymous" checked={isAnonymous} onChange={toggleAnonymous} />
                        <label htmlFor="toggle-anonymous" style={{ cursor: 'pointer' }}></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadBoard;
