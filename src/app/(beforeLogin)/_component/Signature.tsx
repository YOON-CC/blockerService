"use client";

import style from '@/app/(beforeLogin)/_component/signature.module.css';
import React, { useState, useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';
import {redirect, useRouter} from "next/navigation";
import appStore from '@/store/appStore';

export default function Signature() {
    const router = useRouter();
    if (appStore.value !== 2){
        router.replace('/');
    }

    const signatureRef = useRef<SignatureCanvas | null>(null); // 타입 지정
    //useState 설정
    const [access_token, setAccess_token] = useState('');

    useEffect(() => {
        //access_token 추출
        const temp_access_token = localStorage.getItem('access-token');
        if (temp_access_token !== null) {
            setAccess_token(temp_access_token);
        } else {
            console.log("access-token not found in localStorage");
        }
    },[]);

    const handleClearSignature = () => {
        if (signatureRef.current) {
          signatureRef.current.clear();
        }
    };

    const handleSaveSignature = async (signatureImage: Blob) => {
        try {
          const formData = new FormData();
          formData.append('signature', signatureImage, 'signature.png');
          const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/signatures`,
            formData,
            {
              headers: {
                Authorization: access_token,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
    
          console.log(response.status);
          if (response.status === 200) {
            console.log('상태값 200');
            localStorage.setItem('access-token', response.headers['authorization'])
            appStore.setValue(1);
          }
        } catch (error) {
          // 에러 처리
        }
      };
    
    const handleSaveAndSend = () => {
        if (signatureRef.current) {
            const canvas = signatureRef.current.getCanvas();
            canvas.toBlob((blob) => {
              if (blob) {
                handleSaveSignature(blob);
              }
            }, 'image/png');
          }
    };

    return (
        <div className={style.modalBackground}>
          <div className={style.Container_frame}>
            <div className={style.Container_1}>
              전자서명(필수)
            </div>
            <div className={style.Container_2}>
              <SignatureCanvas ref={signatureRef} penColor="#ffffff" canvasProps={{ width: 589, height: 230, className: 'signatureCanvas'}}/>
            </div>
            <div className={style.Container_3}>
              <div className={style.Container_3_btn_1} onClick={handleClearSignature}>다시쓰기</div>
              <div className={style.Container_3_btn_2} onClick={handleSaveAndSend}>저장</div>
            </div>
          </div>
        </div>
    );
}