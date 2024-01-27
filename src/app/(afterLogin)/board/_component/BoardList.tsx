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

const Board = () => {

    const [boardData, setBoardData] = useState<BoardItem[]>([]); 

    const access_token = typeof window !== 'undefined' ? localStorage.getItem('access-token') : null;
    // const access_token = localStorage.getItem('access-token'); 해당방식을 쓰면 international 500이 뜬다.
    //이렇게 코드를 작성하는 이유는, Next.js의 SSR이나 정적 생성 시에는 서버 측에서 코드가 실행되기 때문에 브라우저 API인 localStorage에 접근하는 것이 불가능

    console.log(access_token)

    const handleBoardList = async () => {
        //
        try {
            const access_token = localStorage.getItem('access-token');
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/boards`, {
                params: {
                    size: 8,
                    page: 0,
                },
                headers: {
                    'Authorization': access_token,
                },
            });
    
            if (response.status === 200) {
                console.log(response)
                setBoardData(response.data);
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
            throw error;
        }
    };


    useEffect(() => {
        handleBoardList();
    }, []);


    return (
        <div>
            <div className={styles.Container}>
                
                <Image className={styles.bannerImg} src={bannerImg} alt="logo" />

                <div className={styles.Board_title}>Board list</div>
                <div className={styles.Container_board_frame}>

                    {boardData.map((item, index) => (
                        <Link key={index} href={`/boardObject/${item.boardId}`} style={{ textDecoration: 'none' }}  onClick={() => localStorage.setItem("boardId", item.boardId.toString())}>
                            <div className={styles.Container_board_item} key={index}>
                                <div className={styles.Container_board_background_img} style={{ backgroundImage: `url(/boardImg.png)` }}>
                                    <div className={styles.Container_board_item_info}>
                                        <Image src={seeImg} alt="logo" style={{ width: "18px", height: "18px", marginTop:"1px", marginRight:"4px"}}/>
                                        {item.view}
                                        <Image src={bookmarkImg} alt="logo" style={{ width: "15px", height: "15px",marginTop:"2px", marginRight:"2px", marginLeft : "7px"}}/>
                                        {item.bookmarkCount}
                                    </div>

                                </div>

                                <div className={styles.Container_board_profile}>
                                    <div className={styles.Container_board_profile_user_info1}>
                                            {item.name}
                                            <div className={styles.Container_board_profile_user_info2}>
                                                게시일 : {item.createdAt.split("T")[0]}
                                            </div>
                                            <div className={styles.Container_board_profile_user_info3}>
                                                수정일 : {item.modifiedAt.split("T")[0]}
                                            </div>
                                    </div>
                                    <div className={styles.Container_board_title_frame}>
                                        {item.title.length > 8 ? `${item.title.substring(0, 8)}...` : item.title}
                                    </div>
                                    <div className={styles.Container_board_content_frame}>
                                        {item.content.length > 50 ? `${item.content.substring(0, 50)}...` : item.content}
                                    </div>
                                </div>
                            </div>
                        </Link>  
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Board;