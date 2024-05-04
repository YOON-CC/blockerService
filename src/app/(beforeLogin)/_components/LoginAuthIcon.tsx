"use client";

import styles from "@/styles/login/login.module.css";
import loginLogo from "../../../../public/login_logo.png";
import kakaoLogin from "../../../../public/kakaoLogin.png";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginAuthIcon() {
  const onClick = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/board",
    });
  };

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {/* 임시로, 라우트 되도록 구현 => 이후 auth 적용해서 로직 수정 필요 */}
          <Image
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "100px",
              marginTop: "50px",
            }}
            src={loginLogo}
            alt="logo"
          />
          <div>
            <Image
              src={kakaoLogin}
              alt=""
              style={{
                width: "220px",
                height: "50px",
                marginLeft: "39px",
                marginTop: "50px",
                cursor: "pointer",
              }}
              onClick={onClick}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
