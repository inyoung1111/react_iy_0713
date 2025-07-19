## node JS 
자바스크립트 실행 프로그램
javascript는 브라우저에서만 동작했지만, nodejs 덕분에 브라우저 밖에서도 javascript를 사용

---

## npm 

npm : node package manager
javascript 프로젝트에서 필요한 패키지 (라이브러리, 도구)를 설치하고 관리하는데 사용하는 명령어

## npm start - 실행


## 기본세팅

npx create-react-app@latest ./

(폴더이름은 영문자 소문자 + 숫자로만 구성)
(상위폴더도 마찬가지)
(react라는 폴더명 금지)
(영문자 소문자로 시작)

## 버전변경
i = npm install
npm i react@18 react-dom@18 으로 버전 변경


---
##  tailwindCSS
1. https://v3.tailwindcss.com/ 버전 3 
2. https://v3.tailwindcss.com/docs/installation 독스로 이동
3. npm i -D tailwindcss@3
4. (tailwind.config.js)
 './src/**/*.{js,jsx,ys,tsx}',

 (src/index.css)

@tailwind base;
@tailwind components;
@tailwind utilities;

rafce


컨트롤 +시프트 _ 백키
컨트롤  + / 주석


git 가져 올때 
1. 새로운 파일 만들기 
2. vs코드 켜서 코드 주소 복사 하기
터미널에 git clone 주소 입력 
3. 새로운 파일에서 다시 vs코드 열기 
4. npm i -> 새로운 코드 파일에 맞는 패키지 가져와짐 - > npm start 