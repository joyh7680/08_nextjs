import "./globals.css";
import Link from "next/link";
// import Header from "@/components/layouts/Header";
// import Footer from "@/components/layouts/Footer";
// import Navigator from "@/components/layouts/Navigator";
import {Header, Navigator, Footer} from "@/components/layouts/_index"
//@ㄱ느데 왜 index.ts를 부르는게 아니고 layout폴더에서 저걸 넣어주는거야?

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Navigator />
        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto px-4 py-10">
            {/* 라우팅별 하위 페이지컴포넌트가 보여질 자리 */}
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
