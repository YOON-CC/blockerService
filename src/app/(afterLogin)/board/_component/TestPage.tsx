'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";
import styles from "@/app/(afterLogin)/board/_component/boardList.module.css"
import Image from "next/image";
import seeImg from '../../../../../public/see.png';
import bookmarkImg from '../../../../../public/bookmark.png';
import bannerImg from '../../../../../public/mainImg.png';

interface BoardItem {
    boardId: number;
    bookmarkCount : number;
    content : string;
    createdAt : string;
    modifiedAt : string;
    name : string;
    representImage : string;
    title : string;
    view : number;
}

const TestPage = () => {
    const [boardData, setBoardData] = useState<BoardItem[]>([]); 

    const access_token = typeof window !== 'undefined' ? localStorage.getItem('access-token') : null;
    // console.log(access_token)



    return (
        <div>
            안녕
        </div>
    );
};


export default TestPage;