"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Signature() {
  const router = useRouter();
  router.replace('/i/flow/signature');

  return (
    <Main/>
  );
}