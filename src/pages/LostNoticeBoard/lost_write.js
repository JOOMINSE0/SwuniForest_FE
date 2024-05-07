import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import './lost_write.css';

function LostWrite() {
    let navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="iphone-frame">
            <div className="header">
                <img
                    src="../../../img/back.png"
                    alt="이전버튼"
                    className="back-btn"
                    onClick={() => navigate(-1)}
                />
                <p className="lost-write-title">분실물 게시판</p>
                <button
                    className="upload-btn"
                >
                    업로드
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>

            <div className="content">
                <div className="upload-img">
                    {preview && <img src={preview} alt="Preview" className="preview-img" />}
                    {!preview && (
                        <button className="upload-btn"
                            onClick={handleUpload}>사진 첨부</button>
                    )}
                </div>

                <div className="lost-input-1">
                    <div className="input-group">
                        <p>주운 시간 </p>
                        <input type="text" placeholder="주운 시간 입력" />
                    </div>
                    <div className="input-group">
                        <p>분실물</p>
                        <input type="text" placeholder="분실물명 입력" />
                    </div>
                </div>

                <div className="lost-input-2">
                    <div className="input-group">
                        <p>주운 곳 </p>
                        <input type="text" placeholder="주운 곳 입력" />
                    </div>
                    <div className="input-group">
                        <p>맡긴 곳 </p>
                        <input type="text" placeholder="맡긴 곳 입력" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LostWrite;
