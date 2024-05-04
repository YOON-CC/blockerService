import React, { useState, useEffect } from 'react';
import styles from '@/app/(afterLogin)/contract/contract.module.css'
import { cookies } from 'next/headers'

// 이후 계획
// page.tsx를 서버 컴포넌트이니, 여기서 pregress부분은 전부 fetch로 넣는다.
// 리스트 이동의 경우에는 localstorage에서 값을 꺼내와야 하기 때문에 page.tsx에서의 fetch를 인자를 넘겨주고 클라이언트 컴포넌트로 전송한다.

const Contract = () => {

  const ProgressContractOne = async() =>{
    // const accessToken = Cookies.get('access_token');
    const cookieStore = cookies(); // 동적
    const authorization = cookieStore.get('whdbscks')?.value;
    console.log(authorization)
    const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/contracts?state=NOT_PROCEED`, {
      // cache:'force-cache', 
      next: {revalidate: 10}, // 동적 요청에서의 GET요청결과를 특정 시간마다 캐싱하여 최적화
      headers: { Authorization : authorization ? String(authorization) : '' },
    })

    const response = await res.json()
    const nonProceed = response.length
    // console.log("서버에서 받아온 값입니다.", response.length)
    return nonProceed
  }
  const ProgressContractTwo = async() =>{
    // const accessToken = Cookies.get('access_token');
    const cookieStore = cookies(); // 동적
    const authorization = cookieStore.get('whdbscks')?.value;
    console.log(authorization)
    const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/contracts?state=PROCEED`, {
      // cache:'force-cache', 
      next: {revalidate: 10}, // 동적 요청에서의 GET요청결과를 특정 시간마다 캐싱하여 최적화
      headers: { Authorization : authorization ? String(authorization) : '' },
    })

    const response = await res.json()
    const Proceed = response.length
    // console.log("서버에서 받아온 값입니다.", response.length)
    return Proceed
  }
  const ProgressContractThree = async() =>{
    // const accessToken = Cookies.get('access_token');
    const cookieStore = cookies(); // 동적
    const authorization = cookieStore.get('whdbscks')?.value;
    console.log(authorization)
    const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/contracts?state=CONCLUDE`, {
      // cache:'force-cache', 
      // next: {revalidate: 10}, // 동적 요청에서의 GET요청결과를 특정 시간마다 캐싱하여 최적화
      headers: { Authorization : authorization ? String(authorization) : '' },
    })

    const response = await res.json()
    const Proceed = response.length
    // console.log("서버에서 받아온 값입니다.", response.length)
    return Proceed
  }
  

  return (
    <div className={styles.contractContainer}>
    <div className={styles.contractContainer1}>
      <div className={styles.contractContainer1Layout1}>
        <div className={styles.contractContainer1Layout1Title}>Progress</div>
        <div className={styles.contractContainer1Layout1ListContainer}>
          <div className={styles.contractContainer1Layout1ListContainerTitle}>미체결 계약서</div>
          <div className={styles.contractContainer1Layout1ListContainerNum}><ProgressContractOne/></div>
        </div>
        <div className={styles.contractContainer1Layout1ListContainer}>
          <div className={styles.contractContainer1Layout1ListContainerTitle}>진행중 계약서</div>
          <div className={styles.contractContainer1Layout1ListContainerNum}><ProgressContractTwo/></div>
        </div>
        <div className={styles.contractContainer1Layout1ListContainer}>
          <div className={styles.contractContainer1Layout1ListContainerTitle}>체결된 계약서</div>
          <div className={styles.contractContainer1Layout1ListContainerNum}><ProgressContractThree/></div>
        </div>
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