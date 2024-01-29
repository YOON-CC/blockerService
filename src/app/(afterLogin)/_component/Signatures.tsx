'use client'

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styles from "@/app/(afterLogin)/_component/signatures.module.css";

const Signatures = () => {

    const access_token = typeof window !== 'undefined' ? localStorage.getItem('access-token') : null;
    const [imageURL, setImageURL] = useState<string | null>(null); 

    const handleBoardList = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/signatures`, {
                headers: {
                    'Authorization': access_token,
                },
            });
    
            if (response.status === 200) {
                setImageURL(response.data.address);
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
            throw error;
        }
    };

    useEffect(() => {
        // 페이지가 로드될 때 한 번만 호출되는 로직
        handleBoardList();
    }, []);

    return (
        <div className={styles.Toplayout}>
            <div className={styles.Container}>
                {imageURL && <img className={styles.signatureImg} src={imageURL} alt="logo" />}
            </div>
            <div className={styles.ContainerText}>
                <br/><br/><br/><br/>
                📌[한국 민법](낙성불요식 계약 원칙)<br/>
                - 계약에 대한 별도의 형식을 요구하지 않고, 당사자간의 합의만으로 계약의 성립을 인정하는 낙성불요식 원칙을 준수한다.<br/>
                - 계약 참여자들이 해당 계약 내용에 대해 동의한 사실을 증명할 수 있다면 그 형태가 무엇이든 법적 효력이 인정된다.<br/>
                <br/><br/>
                📌[유사 법률]<br/>
                - 전자서명법 제 3조1항, 2항<br/>
                - 전자문서 및 전자거래 기본법 제 4조 1항
            </div>
        </div>
    );
};

export default Signatures;
