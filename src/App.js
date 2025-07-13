import './App.css';
import Step01 from './step/step01';
import Step02 from './step/step02';
import Step03 from './step/step03';
import Step04 from './step/step04';
import Step05 from './step/step05';


function App() {
  return (
    // 컴포넌트 : 재사용 가능한 코드조각
  <div>
    {/*  */}
     {/* <Comp></Comp>
     <Comp></Comp> */}
     {/* <Step01></Step01> */}
     {/* <Step02></Step02> */}
     {/* <Step03></Step03> */}
     {/* <Step04 title ='제목' content='게시판 내용' name='ll'></Step04>
     <Step04 title ='제목2' content='게시판 내용2222' name='게시판 작성자2'></Step04> */}
    <Step05></Step05>
  </div> 
 
  );
}
//같은 파일에서 컴포넌트  생성
// 긴 HTML을 한 단어로 깔끔하게 치환할 수 있는 문법, 작명 시 영어대문자로 시작 함수표현식, 함수선언식 둘 다 가능

function Comp(){
  return <div>컴포넌트</div>
}
//다른 곳에서 불러오기 가능 컴포넌트 <Comp></Comp> 버튼, 텍스트, 이미지


export default App;
