# SVG drawer

![image](https://user-images.githubusercontent.com/40421183/153259891-4a464843-7233-42b5-81ff-a627c8166061.png)

비트맵이 아닌 벡터 기반의 drawing 툴

<br>

## 데모

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/40421183/153763149-3e0123c1-59a5-4ada-b76c-30239db832f3.gif)

<br>

## 시작 방법

```
yarn install 
yarn start
yarn server

http://localhost:3000/ 접속
```
yarn이 설치되있어야 합니다

## 사용 기술

* svg 관련은 직접 구현

#### 언어

<img width=100px height=25px src="https://img.shields.io/badge/-TypeScript-1f2229?style=flat&logo=TypeScript">&nbsp;

#### 라이브러리

react-color(색깔 표시용)

<img  src="https://img.shields.io/badge/-React-1f2229?style=flat&logo=React">&nbsp;
<img  src="https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=Redux">&nbsp;
<img alt="webpack" src ="https://img.shields.io/badge/webpack-8DD6F9.svg?&style=flat&logo=webpack&logoColor=white"/>
<img alt="Styled-Components" src ="https://img.shields.io/badge/Styled_Components-DB7093.svg?&style=flat&logo=styled-components&logoColor=white"/>

<img  src="https://img.shields.io/badge/-Yarn-2C8EBB?style=flat&logo=Yarn"> &nbsp;
<img src="https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=ESLint">&nbsp;
<img src="https://img.shields.io/badge/-Prettier-1b2b34?style=flat&logo=Prettier">&nbsp;

## 파일 구조
```
├─public
└─src
    ├─images
    └─javascripts
        ├─components
        │  ├─common
        │  │  └─modal
        │  └─Drawing
        │      ├─ButtonList
        │      │  └─ShapeButton
        │      ├─SelectOptionBar
        │      ├─SvgDrawer
        │      └─ZoomBox
        ├─global
        │  ├─api
        │  ├─constant
        │  ├─enum
        │  ├─interface
        │  ├─mixin
        │  └─util
        ├─hooks
        └─redux
            └─shape
```


src/javascripts/global 안에 공통적으로 사용되는 `상수`, `interface`, `함수`등을 담았습니다.

src/javascripts/hook 에 사용한 `custom hook`을 담았습니다.

src/javascripts/redux 에 사용한 redux `action`, `reducer` 등을 담았습니다. 

src/javascripts/components에 사용한 `react component`들을 담았습니다.


## 배포 

https://lodadoclone.github.io/


