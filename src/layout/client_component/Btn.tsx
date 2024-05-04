"use client";
import Cookies from "js-cookie";

export default function Btn() {
  const ProgressContractOne = async () => {
    // const accessToken = Cookies.get('access_token');
    const authorization = Cookies.get("Authorization");
    console.log(authorization);
    const res = await fetch(
      "http://43.202.127.236:8080/api/contracts?state=NOT_PROCEED",
      {
        headers: { Authorization: authorization ? String(authorization) : "" },
      }
    );

    const response = await res.json();
    return console.log(response.data);
  };

  return (
    <>
      <button onClick={ProgressContractOne}>버튼</button>
    </>
  );
}
