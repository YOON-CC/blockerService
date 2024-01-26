import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Image from "next/image";
import appStore from '@/store/appStore';
import {redirect, useRouter} from "next/navigation";
import BoardList from "./_component/BoardList"

export default function board(){

    return (
        <>
            <div>
                <BoardList/>
            </div>
        </>
    )
}