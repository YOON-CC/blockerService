"use client";

import {useRouter} from "next/navigation";
import Board from "@/app/(afterLogin)/board/page";
import appStore from '@/store/appStore';


export default function Access() {
  const router = useRouter();
  if (appStore.value === 2){
    router.replace('/board');
  }
  return (
    <Board/>
  );
}