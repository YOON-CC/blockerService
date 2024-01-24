"use client";

import style from '@/app/(beforeLogin)/_component/login.module.css';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {redirect, useRouter} from "next/navigation";
// import jwtDecode from 'jwt-decode';
import axios from 'axios';
// import Cookies from 'js-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import closeImg from "../../../../public/close.png";
import loginLogo from "../../../../public/login_logo.png";


export default function LoginModal() {
    const router = useRouter();

    const handleLogInCancel = () => {
        router.back();
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
                {/* {clientId && (
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
                )} */}
            </div>
            </div>
        </div>
    );
}