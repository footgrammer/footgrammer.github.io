---
slug: basic-rpg-game
title: 콘솔 RPG 게임 필수 기능 만들기
authors: [junseok]
tags: [journal, dart]
date: 2025-03-19T20:00
---

# 2025-03-19-basic-rpg-game

# 📚 오늘의 학습 내용

- 콘솔 RPG 게임 만들기

## ✍️ 주요 학습 내용

### 배운 내용

- 랜덤으로 값을 뽑아내는 기능
- 파일 입출력을 처리하는 기능

### 새로 알게된 개념

콘솔 입력

- `stdin.readLineSync()`

콘솔 입력 받기 전에 안내문구 입력

- `stdout.write()`

파일 관련

```dart
final file = File(’./gameStats/characters.text’);
final contents = file.readAsStringSync();
final stats = contents.split(',');
```

랜덤값 구하기

```dart
import 'dart:math';
int attackingPower = Random().nextInt(100) + 10
```

`nextInt(100)`

→ 0부터 99까지의 랜덤값을 출력

→ +를 사용해 최소값을 정할 수 있음

### 실습한 내용

- 필수기능 구현

## 🚨 발생한 문제/에러

- 아직까진 없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
int randomInt = Random().nextInt(100) + 10;
```

## 📚 내일 학습할 내용

- 개인과제 도전 기능 구현

## 💭 오늘의 회고

### 잘한 점 👍

- 음 .. 최선을 다한 것?

### 개선할 점 🔨

- 시간관리

### 배운 점 💡

- 파일 입출력

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
