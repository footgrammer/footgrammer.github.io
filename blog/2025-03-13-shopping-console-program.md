---
slug: shopping-console-program
title: 쇼핑몰 콘솔 프로그램 트러블 슈팅
authors: [junseok]
tags: [journal, dart]
date: 2025-03-13T20:00
---

# 2025-03-13-shopping-console-program

# 📚 오늘의 학습 내용

## ✍️ 주요 학습 내용

### 배운 내용

-

### 새로 알게된 개념

<details>
<summary>쇼핑몰 과제</summary>
<div markdown="1">

`tryParse()`

- 성공시 정수 변환 → 실패시 `null` 반환
- ?? 연산자로 0을 반환 처리 가능

</div>
</details>

<details>
<summary>트러블 슈팅1</summary>
<div markdown="1">

```dart
// error message
수량 : 2
Unhandled exception:
Bad state: No element
#0      Iterable.first (dart:core/iterable.dart:645:7)
#1      ShoppingMall.addToCart (file:///Users/junseokyang/Desktop/project/flutter/assignment/consoleShoppingMall/consoleShoppingMall.dart:29:66)
#2      main (file:///Users/junseokyang/Desktop/project/flutter/assignment/consoleShoppingMall/consoleShoppingMall.dart:139:24)
#3      _delayEntrypointInvocation.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:315:19)
#4      _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:194:12)
```

- 수량을 입력하면 에러가 나온다.

```dart
product.name: 셔츠 productName: 반바지
== false
product.name: 원피스 productName: 반바지
== false
product.name: 반팔티 productName: 반바지
== false
product.name: 반바지 productName: 반바지
== false
```

</div>
</details>

<details>
<summary></summary>
<div markdown="1">
</div>
</details>

### 실습한 내용

- 콘솔 프로그램 제작

## 🚨 발생한 문제/에러

- 문제/에러 1
  ### 1. 문제/에러 정의
  ### 2. 시도한 해결 방법
  ### 3. 최종 해결 방법
  ### 4. 새롭게 알게 된 점
  ### 5. 다음에 비슷한 문제를 만난다면?

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드

```

## 📚 내일 학습할 내용

## 💭 오늘의 회고

### 잘한 점 👍

### 개선할 점 🔨

### 배운 점 💡

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
