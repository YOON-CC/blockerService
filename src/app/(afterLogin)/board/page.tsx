import React, { useState, useEffect, useRef } from "react";
import BoardList from "@/app/(afterLogin)/board/_component/BoardList";
import Header from "@/layout/Header";
import { signOut } from "next-auth/react";
import Boardtest from "./_component/boardtest";
// import TestPage from './_component/TestPage';
export default function board() {
  return (
    <>
      <div>
        <Header />
        <Boardtest></Boardtest>
        {/* <BoardList /> */}
        {/* <TestPage/> */}
      </div>
    </>
  );
}
