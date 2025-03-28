---
slug: flutter-train-app
title: 플러터 개인과제 기차 예매 앱 구상하기!
authors: [junseok]
tags: [journal, flutter]
date: 2025-03-28T20:00
---

# 2025-03-28-flutter-train-app

# 📚 오늘의 학습 내용

오늘은 기차 예매 과제를 시작해서 전체적인 구조를 파악하고 어떻게 할지 설계를 했다.

## ✍️ 주요 학습 내용

## 1. 페이지 설계

### `home_page.dart`

```dart
Padding - 양 옆
Column - 가운데 정렬
Container
- width : double.infinity
- height : 200
	Row
		Column (출발역, departureStation)
		VerticalDivider (가운데 경계선)
		Column (도착역, arrivalStation)

```

```dart
const VerticalDivider(
    width: 20,
    thickness: 1,
    indent: 20,
    endIndent: 0,
    color: Colors.grey,
  ),
```

### `station_list_page.dart`

```dart
final List<String> stationLists = [...역들]

Scaffold
	AppBar : 왼쪽 , title
	ListView
		onTap(){ return stationName; }
```

### `seat_page.dart`

```dart
Scaffold
	appBar : leftArrow, 좌석 선택
	Column
		Row
			Text : departureStation
			Icon :
			Text : arrivalStation

		Row
			SizedBox
			Text : 선택됨
			SizedBox(width : 20)
			SizedBox
			Text : 선택 안됨

		ListView
			RowSeat(int rowNum) * 20
				Seat * 4
					onTap((){return 좌석 번호})

		ElevatedButton
			onTap(()=> Navigator)
```

## 2. 막히는 부분

### 1. 좌석 위로 버튼이 보이게 하는 것

- Stack 을 활용해서 bottom : 20 정도로 해서 ListView와 ElevatedButton을 겹쳐서 하면 되지 않을까? 생각하고 있는데 한번 해봐야 알 수 있을 것 같음

### 2. 좌석 선택 화면에서 역 재선택 구현

- 역을 재선택했을 때 역 선택 스택이 쌓이기 때문에 뒤로 가기를 누르면 역선택 화면이 나올 것 같아서 뒤로 가기를 했을 때는 역 선택이 아니라 기차 예매 홈페이지로 이동할 수 있도록 개별적으로 설정해야 할 듯함

### 실습한 내용

- 기차 예매 앱 구현

## 🚨 발생한 문제/에러

- 아직은 없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
No pain, No gain
```

## 📚 내일 학습할 내용

- 주말이지롱

## 💭 오늘의 회고

### 잘한 점 👍

- 그래도 어떤 식으로 구현할지 아이디어가 나와서 괜찮을 듯

### 개선할 점 🔨

- git branch 전략을 잘 짜서 하기

### 배운 점 💡

- 😊

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
