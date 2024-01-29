'use client'

import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import { uploadImages, postBoard } from '@/api/postWrite';
import styles from "@/app/(afterLogin)/write/_component/contractWrite.module.css"
import Link from 'next/link';
import Signature from '@/app/(afterLogin)/_component/Signatures';


const ContractWrite = () => {

    const access_token = typeof window !== 'undefined' ? localStorage.getItem('access-token') : null;


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handletitleChange = (event : any) => {
        setTitle(event.target.value)
    };
    const handlecontentChange = (event : any) => {
        setContent(event.target.value)
    };

    const handleContractPost = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/contracts`, {
                title: title,
                content: content,
            }, {
                headers: {
                    'Authorization': access_token,
                }
            });
    
            if (response.status === 201) {
                console.log("옴");
                return true;
            }
    
            return false;
        } catch (error) {
            // 에러 처리
            throw error;
        }
    };

    return (
        <div className={styles.Container}>
            <div className={styles.layoutTitle}>Contract</div>
            <div className={styles.ContainerText}>TITLE</div>
            <input className={styles.Container_title} placeholder='제목을 작성해주세요.' onChange={handletitleChange}></input>
            <div className={styles.ContainerText}>CONTENT</div>
            <textarea className={styles.Container_content} placeholder='내용을 작성해주세요.' onChange={handlecontentChange}></textarea>
            <div className={styles.ContainerText}>SIGNATURE</div>
            <Signature/>
            <div className={styles.Container_btn_container}>
                <Link href="/contracts" style={{ textDecoration: 'none' }}>
                    <div className={styles.Container_btn_container_b1}>취소</div>
                </Link>
                <form onSubmit={handleContractPost}>
                    <button className={styles.Container_btn_container_b2}>작성</button>
                </form>
            </div>
        </div>
    );
};




export default ContractWrite;