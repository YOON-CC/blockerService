"use client";

import style from '@/app/(beforeLogin)/_component/login.module.css';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {redirect, useRouter} from "next/navigation";
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import closeImg from "../../../../public/close.png";
import loginLogo from "../../../../public/login_logo.png";
import jwt from 'jsonwebtoken';
import appStore from '@/store/appStore';

export default function LoginModal() {
    const clientId: string | undefined = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_CLIENT_ID;
    const router = useRouter();

    const handleMypage_user_info = async (credentialResponse: any) => {

      const decodedToken: any = jwt.decode(credentialResponse.credential);
      

        try {   
          const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/users/login`, {
            email : decodedToken.email,
            name : decodedToken.name,
            picture : decodedToken.picture
          });
    
          if (response.status === 200) {
            console.log("상태값 200",response.data)
            const refresh_token = response.headers['cookie']
            const access_token = response.headers['authorization']
    
            Cookies.set('X-REFRESH-TOKEN', refresh_token);
            localStorage.setItem('access-token', access_token)
    
    
            console.log(refresh_token, access_token)
            appStore.setValue(2) // 나중에 1로 바꿔야함
          }
          if (response.status === 201) {
            console.log("상태값 201", response.data)
            const refresh_token = response.headers['cookie']
            const access_token = response.headers['authorization']
    
            Cookies.set('X-REFRESH-TOKEN', refresh_token);
            localStorage.setItem('access-token', access_token)
            router.replace('/signature');
            // router.back();
            appStore.setValue(3) // 나중에 1로 바꿔야함
          }
        } catch (error) {
        }
      };

    const handleLogInCancel = () => {
        router.back();
    };

    const handleLoginError = () => {
        alert("Google login failed")
    };
        
    return (
        <div className={style.modalBackground}>
            <div className={style.Container_finish_login_button}>
            <div className={style.Container_login_cancel} onClick={handleLogInCancel}>
                <Image style={{ width: "25px", height: "25px", marginTop:"10px", marginLeft:"15px"}} src={closeImg} alt="logo" />
            </div>
                <Image style={{ width: "100px", height: "100px", marginLeft:"100px"}} src={loginLogo} alt="logo" />
            <div className={style.Cotainer_login_title}>LOGIN</div>
            <div className={style.Container_login_btn}>
                {clientId && (
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                    onSuccess={handleMypage_user_info}
                    onError={handleLoginError}
                    logo_alignment = "center"
                    shape = "square"
                    type = "standard"
                    text='signin_with'
                    />
                </GoogleOAuthProvider>
                )}
            </div>
            </div>
        </div>
    );
}