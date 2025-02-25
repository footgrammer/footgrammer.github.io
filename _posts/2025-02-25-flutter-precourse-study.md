---
title: Flutter 사전교육 1주차 강의 및 마크다운 공부
date: 2025-02-25 18:00:00 +0900
categories: [Journal, Flutter Course]
tags: [blog, flutter, markdown]     # TAG names should always be lowercase
---

#2025년 2월 5일 개발일지!
### Flutter 사전교육 2일차
#### 오늘은 1주차 강의 1-10 강의를 듣고 마크다운을 학습했다.

___
###**학습내용**
* Flutter 환경설정
* Flutter Variable Type
* Flutter For문
* Flutter Function
* Markdown 문법
___
###**느낀 점**
#### Dart 문법이 javascript와 크게 다르진 않아서 어렵진 않았던 것 같다. 익숙한 문법도 나와서 앞으로 앱을 만들고 firebase를 이용해서 배포하는 게 재밌을 것 같음

___
### **Markdown 문법**

### **Heading**
"#을 1-6개까지 사용해서 글씨 크기를 변경할 수 있음"
___
### **Font Style**
#### Bold : **로 감싸기
#### Italic : *로 감싸기
#### ~~가운데 밑줄~~ : ~~로 감싸기
___
### **List**
#### * 혹은 - 을 앞에 붙이기
#### 숫자는 숫자.을 앞에 붙이기
* apple
- 사과
1. apple
2. pear
___
### Link
#### [] 안에 문구 ()에 링크
Click [Footgrammer Blog](https://footgrammer.github.io)
___
### Image
#### ![] 이미지 설명 () 이미지 주소
![Messi](https://dimg.donga.com/wps/NEWS/IMAGE/2020/09/05/102800493.2.jpg)

```html
<img src="https://dimg.donga.com/wps/NEWS/IMAGE/2020/09/05/102800493.2.jpg" width="300">
```
#### 이미지 태그로 크기 조정 가능
<img src="https://dimg.donga.com/wps/NEWS/IMAGE/2020/09/05/102800493.2.jpg" width="300">

___

### Table

```markdown
|Header|Description|
|--:|:--|
|Cell1|Cell2|
|Cell1|Cell2|
|Cell1|Cell2|
|Cell1|Cell2|
```

#### 예시
|Header|Description|
|--:|:--|
|Cell1|Cell2|
|Cell1|Cell2|
|Cell1|Cell2|
|Cell1|Cell2|

#### --: 오른쪽 정렬
#### :-- 왼쪽 정렬
#### :--: 가운데 정렬
___
### Code
#### `로 감싸면
`console.log('message')`

#### ``` 로 감싸면 Code Block
#### ``` 뒤에 언어 표시 가능(javascript)
```ts(js)
code block
```
