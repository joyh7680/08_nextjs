"use client"; //파일 최상단에 있으면 이 파일 전체가 Client Component

import { useState } from "react";

export default function CounterButton() {

  const [count, setCount] = useState<number>(0); //React 상태 사용 → 클라이언트에서만 가능

  const handleClick = (): void => {
    setCount(count + 1);
    console.log("로그의 실행위치는?");//: Client Component는 브라우저에서 실행되기 때문에 브라우저 console 에 출력됨
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 rounded text-white"
      onClick={handleClick}>
      카운팅 : {count}
    </button>
  );
}