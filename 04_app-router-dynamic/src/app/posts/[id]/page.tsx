import Link from "next/link";

// 페이지 컴포넌트가 받게 되는 props의 타입 정의
interface PostDetailPageProps {
  params: Promise<{id: string;}> //Next.js는 동적 세그먼트(route segment)를 params 객체로 자동 전달
}


//게시글 상세 화면을 보여주는 페이지 컴포넌트
export default async function PostDetailPage({ params }: PostDetailPageProps) {// props === {params : {id : 'xx'}}
  //게시글 식별자(id세그먼트) => 데이터패칭
  //const {id} = useParams() // {id: 'xx'} => react방법

  //params == Promis<{id:'xx}>
  const { id } = await params;
  // 14버전이상이랑 15번이랑 헷갈리지 않을 것

  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 상세</h1>
      <p>게시글 id: {id}</p>
      <hr />
      {/* URL: /posts/xx/edit => 수정페이지('xx번 게시글 수정페이지") */}
      <Link href={`/posts/${id}/edit`}>수정페이지로 이동</Link>
    </div>
  );
}
