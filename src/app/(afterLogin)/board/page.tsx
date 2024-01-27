import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Image from "next/image";
import appStore from '@/store/appStore';
import {redirect, useRouter} from "next/navigation";
import BoardList from "@/app/(afterLogin)/board/_component/BoardList";
// import TestPage from './_component/TestPage';
export default function boarffd(){

    return (
        <>
            <div>
                <BoardList/>
                {/* <TestPage/> */}
            </div>
        </>
    )
}