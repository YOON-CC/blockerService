import React, { useState, useEffect } from 'react';
import styles from '@/app/(afterLogin)/contract/contract.module.css'
import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import Cookies from 'js-cookie';

// 이후 계획
// page.tsx를 서버 컴포넌트이니, 여기서 pregress부분은 전부 fetch로 넣는다.
// 리스트 이동의 경우에는 localstorage에서 값을 꺼내와야 하기 때문에 page.tsx에서의 fetch를 인자를 넘겨주고 클라이언트 컴포넌트로 전송한다.


const Contract = () => {

  const Progress = async() =>{
    // const accessToken = Cookies.get('access_token');
    const cookieStore = cookies();
    const authorization = cookieStore.get('whdbscks')?.value;
    console.log(authorization)
    // const res = await fetch('https://blockerrrr.site/api?state=NOT_PROCEED', {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/contracts?state=NOT_PROCEED`, {
      headers: { Authorization : authorization ? String(authorization) : '' }, 
    })

    const response = await res.json()
    console.log("서버에서 받아온 값입니다.", response.length)
    
    return null
  }

  return (
    <div className={styles.contractContainer}>
    <div className={styles.contractContainer1}>
      <div className={styles.contractContainer1Layout1}>
        <div className={styles.contractContainer1Layout1Title}>Progress</div>
        <Progress/>
      </div>
      <div className={styles.contractContainer1Layout2}></div>
    </div>
    <div className={styles.contractContainer2}>
      <div className={styles.contractContainer2Layout1}></div>
      <div className={styles.contractContainer2Layout2}></div>
      <div className={styles.contractContainer2Layout3}></div>
    </div>
    <div className={styles.contractContainer3}>
      <div className={styles.contractContainer3Layout1}></div>
      <div className={styles.contractContainer3Layout2}></div>
    </div>
  </div>
  );
};


export default Contract;