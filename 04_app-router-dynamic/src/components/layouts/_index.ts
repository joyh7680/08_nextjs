/*
배럴패턴
1. 여러 컴포넌트, 함수, 플래스 등의 모듈을 하나의 파일에 모아서 재정의
2. 여러 모듈을 한 곳에서 import할 수 있음. 각 모듈을 따로따로 import 하리 필요 없이 
index.ts작업 파일만 
*/

// import Header from "./Header"
// import Footer from "./Footer"
// import Navigator from "./Navigator"

// export {Header, Footer, Navigator}

//re-export
export { default as Header } from "./Header";
export { default as Footer } from "./Footer";
export { default as Navigator } from "./Navigator";
