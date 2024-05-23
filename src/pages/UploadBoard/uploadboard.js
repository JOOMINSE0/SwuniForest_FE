import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import heic2any from "heic2any";
import { ReactComponent as Gallery } from '../../assets/Gallery.svg';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import "./uploadboard.css";


function UploadBoard() {
    let navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [guestContent, setGuestContent] = useState('');
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const fileInputRef = useRef(null);
    const fetchURL = "https://port-0-swuniforest-be-1mrfs72llwh5tfst.sel5.cloudtype.app/";

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            fetchUserData(token);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const fetchUserData = async (token) => {
        try {
            const response = await axios.get(fetchURL + 'api/user/info', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsername(response.data.username);
        } catch (error) {
            console.error('사용자 정보 가져오기 실패:', error);
            setIsLoggedIn(false);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === "image/heic") {
                heic2any({
                    blob: file,
                    toType: "image/jpeg"
                }).then(function (resultBlob) {
                    resizeImage(resultBlob).then(resizedBlob => {
                        const convertedFile = new File([resizedBlob], file.name.replace(/\.heic$/, '.jpg'), { type: "image/jpeg", lastModified: new Date() });
                        setSelectedFile(convertedFile);
                        setPreview(URL.createObjectURL(convertedFile));
                    });
                }).catch(function (error) {
                    console.error('HEIC to JPEG conversion failed:', error);
                });
            } else {
                resizeImage(file).then(resizedBlob => {
                    const resizedFile = new File([resizedBlob], file.name, { type: file.type, lastModified: new Date() });
                    setSelectedFile(resizedFile);
                    setPreview(URL.createObjectURL(resizedFile));
                });
            }
        }
    };
    
    const resizeImage = (blob) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const maxW = 1024; 
                const maxH = 1024;
                let width = img.width;
                let height = img.height;
    
                if (width > height && width > maxW) {
                    height *= maxW / width;
                    width = maxW;
                } else if (height > maxH) {
                    width *= maxH / height;
                    height = maxH;
                }
    
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob(resolve, 'image/jpeg', 0.7);
            };
            img.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreview(null);
    };

    const handleGuestContentChange = (event) => {
        const inputContent = event.target.value;
        if (inputContent.length > 50) {
            alert('방명록 내용은 50자 이내로 작성해주세요.');
            setGuestContent(inputContent.slice(0, 50));
        } else {
            setGuestContent(inputContent);
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile || !guestContent) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('guestbookDto', new Blob([JSON.stringify({
            guestContent,
            anonymous: true,
            username
        })], { type: 'application/json' }));
        formData.append('imageFile', selectedFile);

        try {
            const response = await axios.post(fetchURL + 'api/guestbook/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
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
                        onChange={handleGuestContentChange}
                    />
                    <div style={{ width: "300px", height: "0.6px", background: "#fff", marginLeft: "30px" }}></div>
                </div>
            </div>
        </div>
    );
}

export default UploadBoard;
