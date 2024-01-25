import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Image from "next/image";
import appStore from '@/store/appStore';
import {redirect, useRouter} from "next/navigation";

export default function board(){

    return (
        <>
            <div>
                안녕하세요! 반갑습니다. 로그인 이후 페이지 입니다.
            </div>
        </>
    )
}