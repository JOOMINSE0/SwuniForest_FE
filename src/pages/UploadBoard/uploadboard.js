import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as Gallery } from '../../assets/Gallery.svg';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import "./uploadboard.css";

function UploadBoard() {
    let navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [guestContent, setGuestContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreview(null);
    };

    const toggleAnonymous = () => {
        setIsAnonymous(!isAnonymous);
    };

    const handleSubmit = async () => {
        if (!selectedFile || !guestContent) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('guestbookDto', new Blob([JSON.stringify({
            guestContent,
            isAnonymous
        })], { type: 'application/json' }));
        formData.append('imageFile', selectedFile);

        try {
            const response = await axios.post('https://5a86-114-70-38-149.ngrok-free.app/api/guestbook/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('업로드 성공!');
            navigate(-1);
        } catch (error) {
            console.error('Error:', error);
            alert('업로드 중 오류가 발생했습니다.');
        }
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
            <button className='upload' onClick={handleSubmit}>업로드</button>
            <div className="form">
                <div className="form2">
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button style={{ marginTop: "40%", marginLeft: "45%", width: "50px", height: "50px", borderStyle: "none", backgroundColor: "#ffffff", cursor: "pointer" }} onClick={handleUpload}>
                        <Gallery style={{ marginTop: "-5%", marginLeft: "-50%", width: "45px", height: "45px" }} />
                    </button>
                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Preview" style={{
                                width: '100%', objectFit: "cover", marginTop: "30px"
                            }} />
                            <button className="remove-image-btn" onClick={handleRemoveImage}>X</button>
                        </div>
                    )}
                </div>
                <div style={{ marginTop: "10%" }}>
                    <Pen />
                    <input
                        className="uploadcontent"
                        placeholder="내용을 작성해주세요"
                        value={guestContent}
                        onChange={(e) => setGuestContent(e.target.value)}
                    />
                    <div style={{width:"300px", height:"0.6px", background:"#fff", marginLeft:"30px"}}></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '35%' }}>
                    <div style={{ color: "#ffffff", marginLeft: "5%", fontWeight: 'bolder' }}>익명여부</div>
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
