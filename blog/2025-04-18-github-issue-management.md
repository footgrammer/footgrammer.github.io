---
slug: github-issue-management
title: 깃헙 프로젝트로 개인과제 관리하기
authors: [junseok]
tags: [journal, flutter]
date: 2025-04-18T20:00
---

# 📚 오늘의 학습 내용

- 오늘은 개인과제를 시작하기에 앞서서 기능별로 github 이슈를 만들어서 이슈별로 브랜치를 만들어서 진행을 하고자 했다.

## ✍️ 이슈 만들기

### 이슈 작성 원칙

- 제목

```jsx
[Home] AppBar Title 표시
```

- 내용

```jsx
### 🪄 구현 항목
- AppBar Title 표시
```

---

### PR 작성 원칙

- 제목

```jsx
[Home] AppBar Title 표시
```

- 내용

```jsx
### 🚀 개요
AppBar Title을 표시한다.

### 🔧 변경사항
- AppBar 생성
- AppBar 타이틀 변경

### 실행 화면
(이미지 첨부)

### 💡issue : #10
```

---

### 이슈 템플릿 설정

레포지토리 → settings → general → 하단의 Features - set up templates

⇒ 반복되는 내용을 템플릿으로 만들어 줬다.

---

### 이슈 내용

이슈는 총 7개로 생성을 했다.

- Home Page UI 구현
- [Home] 지역 검색 기능 구현
- [Detail] Detail Page 만들기
- [feat] 현위치의 주소를 조회한 뒤 네이버 API로 검색하는 기능 구현
- [Docs] Readme 작성
- [Docs] 트러블 슈팅 작성
- [Enhancement] 코드 리펙토링하기

그리고 `label` 은

- `feat`
- `bug`
- `documentation`

milestone은

- home Page 제작
- Detail Page 제작
- Write down project documentation

이렇게 3가지로 구성을 했다.

---

## ⎘Next Step

- 이 이슈에 맞춰서 브랜치를 나누고 기능개발이 끝나면 Pull Request를 해 main branch 로 merge를 하는 방식으로 진행할 예정!
