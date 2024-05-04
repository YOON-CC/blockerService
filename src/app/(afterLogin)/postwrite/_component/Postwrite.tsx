"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Import Image component from next/image
import styles from "@/app/(afterLogin)/postwrite/_component/postwrite.module.css";

const Postwrite = () => {
    const access_token = typeof window !== 'undefined' ? localStorage.getItem('access-token') : null;

    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [selectContract, setSelectContract] = useState('');
    const [content, setContent] = useState('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const newSelectedImages = Array.from(selectedFiles).filter(file => file.type === 'image/png');
            setSelectedImages(prevImages => [...prevImages, ...newSelectedImages]);
        }
    };

    useEffect(() => {
        const handlePngToUrl = async () => {
            try {
                if (selectedImages.length === 0) {
                    return;
                }
        
                const formData = new FormData();
                const lastIndex = selectedImages.length - 1;
                formData.append('image', selectedImages[lastIndex], 'image.png');
        
                const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/images`, formData, {
                    headers: {
                        'Authorization': access_token,
                        'Content-Type': 'multipart/form-data'
                    }
                });
        
                if (response.status === 201) {
                    setImages(prevImages => [...prevImages, response.data.address]);
                }
            } catch (error) {
                // Error handling
                throw error;
            }
        };

        handlePngToUrl();
    }, [selectedImages, access_token]); // Include selectedImages and access_token in the dependency array

    const handletitleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handlelocationChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };
    
    const handleSelectContract = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSelectContract(event.target.value);
    };

    const handlecontentChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleBoardPost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const boardData = {
                title: title,
                content: content,
                info: location,
                representImage: images[0],
                contractId: selectContract,
                images: images,
            };
    
            const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/boards`, boardData, {
                headers: {
                    'Authorization': access_token,
                }
            });
            console.log(response)
            if (response.status === 201) {
                console.log("옴");
                return true;
            } else {
                return false;
            }
    
        } catch (error) {
            // Error handling code
            throw error;
        }
    };

    return (
        <div>
            <div className={styles.Container}>
                <div className={styles.Container_tip}>🙌게시글을 작성하고, 동업자를 구해보세요!</div>
                <input className={styles.Container_title} placeholder='제목을 작성해주세요.' onChange={handletitleChange}></input>
                <div className={styles.Container_img_select}>
                    {selectedImages.map((image, index) => (
                        <div key={index}>
                            {/* Use Image component */}
                            <Image className={styles.Container_img} src={URL.createObjectURL(image)} alt={`Selected ${index}`} width={50} height={50}></Image>
                        </div>
                    ))}
                    <label className={styles.StyledLabel} htmlFor="upload">+</label>
                    <input className={styles.Container_img_select_btn}  type="file" accept="image/png" multiple onChange={handleImageChange} id="upload"></input>
                </div>
                <div className={styles.Container_info_container}>
                    <input className={styles.Container_info_container_select_location}  placeholder='위치를 입력해주세요.' onChange={handlelocationChange}></input>
                    <input className={styles.Container_info_container_select_contract} placeholder='계약서 번호를 입력해주세요' onChange={handleSelectContract}></input>
                </div>
                <input className={styles.Container_content} placeholder='내용을 작성해주세요.' onChange={handlecontentChange}></input>
                <form onSubmit={handleBoardPost}>
                    <div className={styles.Container_btn_container}>
                        <div className={styles.Container_btn_container_b1} >취소</div>
                        <button className={styles.Container_btn_container_b2}>작성</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postwrite;