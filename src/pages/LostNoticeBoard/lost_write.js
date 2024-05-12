import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from 'axios';
import './lost_write.css';

function LostWrite() {
    let navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [itemTitle, setItemTitle] = useState('');
    const [findPoint, setFindPoint] = useState('');
    const [putPoint, setPutPoint] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = () => {
        fileInputRef.current.click();
    };
    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreview(null);
    };
    const fetchURL = "https://e4ee-118-218-144-103.ngrok-free.app/"
    const handleSubmit = async () => {
        if (!selectedFile || !itemTitle || !findPoint || !putPoint) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('lostitemDto', new Blob([JSON.stringify({
            itemTitle,
            findPoint,
            putPoint
        })], { type: 'application/json' }));
        formData.append('imageFile', selectedFile);

        try {
            const response = await axios.post(fetchURL + 'api/lostitem/post', formData, {
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
                    onClick={handleSubmit}
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

            <div className="lost-content">
                <div className="upload-img">
                    {preview && <img src={preview} alt="Preview" className="preview-img" />}
                    {!preview && (
                        <button className="upload-btn" onClick={handleUpload}>사진 첨부</button>
                    )}

                </div>

                <div className="lost-input-1">
                    <div className="input-group">
                        <p>분실물</p>
                        <input
                            type="text"
                            placeholder="분실물명 입력"
                            value={itemTitle}
                            onChange={(e) => setItemTitle(e.target.value)}
                        />
                    </div>
                </div>

                <div className="lost-input-2">
                    <div className="input-group">
                        <p>주운 곳</p>
                        <input
                            type="text"
                            placeholder="주운 곳 입력"
                            value={findPoint}
                            onChange={(e) => setFindPoint(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <p>맡긴 곳</p>
                        <input
                            type="text"
                            placeholder="맡긴 곳 입력"
                            value={putPoint}
                            onChange={(e) => setPutPoint(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LostWrite;
