"use client";

import React, { useState, useEffect, useRef } from "react";
import { handlePostMethod } from "@/restful/login";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import SignatureCanvas from "react-signature-canvas";
import style from "@/styles/signature/signature.module.css";

export default function Signature(props: any) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const signatureRef = useRef<SignatureCanvas | null>(null); // 타입 지정

  const handleBoardView = async () => {
    const response = await handlePostMethod(
      "http://43.202.127.236:8080/api/users/login",
      props.data
    );
    if (response.status === 200) {
      const refresh_token: any = response?.headers.get("cookie");
      const access_token: any = response?.headers.get("authorization");
      // 쿠키 설정
      Cookies.set("X-REFRESH-TOKEN", refresh_token);
      Cookies.set("Authorization", access_token);

      router.push("/board");
    }
    if (response.status === 201) {
      console.log("사인없음");
      const refresh_token: any = response?.headers.get("cookie");
      const access_token: any = response?.headers.get("authorization");

      // 쿠키 설정
      Cookies.set("X-REFRESH-TOKEN", refresh_token);
      Cookies.set("Authorization", access_token);
      setToggle(true);
    }
  };

  useEffect(() => {
    // 페이지가 로드될 때 한 번만 호출되는 로직
    handleBoardView();
  }, []);

  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  return (
    <>
      <div>
        {toggle && (
          <div className={style.modalBackground}>
            <div className={style.Container_frame}>
              <div className={style.Container_1}>전자서명(필수)</div>
              <div className={style.Container_2}>
                <SignatureCanvas
                  ref={signatureRef}
                  penColor="#ffffff"
                  canvasProps={{
                    width: 589,
                    height: 230,
                    className: "signatureCanvas",
                  }}
                />
              </div>
              <div className={style.Container_3}>
                <div
                  className={style.Container_3_btn_1}
                  onClick={handleClearSignature}
                >
                  다시쓰기
                </div>
                <div
                  className={style.Container_3_btn_2}
                  //   onClick={handleSaveAndSend}
                  // 사인 저장
                >
                  저장
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
