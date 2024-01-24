import Main from "@/app/(beforeLogin)/_component/Main";
import appStore from '@/store/appStore';
export default function Home() {


  return (
    <>
      {appStore.value === 1 &&  <Main />}
      {/* {appStore.value === 2 &&  <Home />} */}
    </>
  );
}