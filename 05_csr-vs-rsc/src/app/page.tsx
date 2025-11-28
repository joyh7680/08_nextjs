import CouterButton from "@/components/CounterButton";
import Image from "next/image";

// Home 페이지 컴포넌트 == 서버컴포넌트
//서버 컴포넌트 → Node.js 서버에서 실행
export default function Home() {
  console.log("로그의 실행위치는? - 서버"); //console.log 는 브라우저가 아닌 Terminal에 출력

  // 서버에서 생성된 시간
  const time = new Date().toLocaleTimeString(); // 요청할 때마다 서버에서 현재 시간 생성

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-gray-900">
        Server Component와 vs Client Component
      </h1>
      <p className="mt-2 text-gray-600">
        현재 이 텍스트는 서버컴포넌트에서 렌더링된 텍스트입니다.
      </p>
      <div className="mt-4 p-2 bg-gray-100 rounded text-center font-bold text-purple-700">
        시간: {time}
      </div>
      <div className="mt-4 text-center">
        {/* 버튼요소에 클릭시마다 카운팅되게?  */}
        {/* 
          <button 
            className="px-4 py-2 bg-blue-500 rounded text-white"
            onClick={}>
            카운팅 : 0
          </button>
        */}
        {/* client component 를 server component 안에서 사용  
        Next.js App Router의 기본 구조 */}
        <CouterButton />
      </div>
    </div>
  );
}
