import { auth } from "@/auth"; // auth 추가
import Header from "@/layout/Header";
import { handlePostMethod } from "@/restful/login";
import appStore from "@/store/appStore";
import Cookies from "js-cookie";
import Signature from "./_components/Signature";
export default async function Page() {
  const session = await auth(); // session 호출 추가
  const { name, email, image: picture } = session?.user || {};
  const data = {
    name: name,
    email: email,
    picture: picture,
  };

  return (
    <>
      <Header />
      <Signature data={data} />
    </>
  );
}
