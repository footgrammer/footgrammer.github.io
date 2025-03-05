---
slug: flutter-widget
title: 플러터에서 화면을 구성하는 법
authors: [junseok]
tags: [flutter, docusaurus, github-pages]
date: 2025-03-05T22:00
---

# 2025-03-05-flutter-widget

Date: March 5, 2025

# 📚 오늘의 학습 내용

오늘은 flutter에서 사용되는 다양한 widget에 대해서 학습을 했다.

`Container` `SizeBox` `Row` `Column` `Expanded` `Stack` 등등

## ✍️ 주요 학습 내용

- 배운 내용

> 2주차 강의에서는 주로 flutter에서 화면을 어떻게 구성하는지 배웠다. 웹사이트에서는 `html` `css` 를 통해서 간단하게 화면을 만들 수 있었지만 flutter에서는 위젯이라는 `class` 를 활용해서 화면을 구성해 갔다. 처음에는 코드의 진행 및 구성에 대해서 이해하기 어려웠지만 그냥 빠르게 강의를 들으면서 flutter code의 흐름에 대해서 조금씩 감이 잡히기 시작하는 것 같다.

- **Container**
  > `Container` 는 기본적인 위젯인 것 같은데 `html` 의 `div` 태그와 조금 닮은 것 같은 느낌이 들었다.
- **SizedBox**
  > `SizedBox` 는 위젯 사이의 간격을 벌려줄 때 쉽게 사용할 수 있는 위젯인 것 같다.
- **Row & Column**
  > Row & Column 은 css에서 `flex`를 사용하면서 익숙했던 개념이어서 이해하기 좋았다. 별다르게 `flex` 선언 없이 가로로 위젯들을 배열하고 싶으면 `Row` 를 사용하고 세로로 위젯들을 배열하고 싶으면 `Column` 을 사용하고 `Column` 안에 `Row` 를 사용할 수도 있고 앱 화면을 구성할 때 가장 많이 찾게 되는 위젯이지 않나 싶다.
- **Expanded**
  > 이것은 남은 영역을 다 사용하고 싶을 때 사용하는 것 같다. `flex` 옵션을 사용해서 영역을 균등하게 분배해서 사용할 수 있는 것 같다.
- **Stack**
  > 이것은 겹치는 레이아웃이 있을 때 사용한다. 사진 위에 + 버튼이라든지 그런 경우에 사용할 수 있을 것 같다. `Positioned` 를 사용해서 겹치는 위젯의 위치를 조정할 수 있다.

> Html으로 치면 form과 관련된 위젯들도 배웠다. inputField, toggle button 그런 위젯들도 사용법들을 익힐 수 있었다.

- **TextField**
- **Switch**
- **Slyder**

> 기타 요긴한 위젯들

- **JestureDetector**
  > 모바일 앱이다 보니 사용자의 제스처에 따른 함수를 실행할 수 있게 도와준다. `onTap()` `onDoubleTap()` 이런 옵션을 사용해서 한번 탭을 했을 때 두 번 탭을 했을 때 원하는 동작을 구현할 수 있다.
- **Image**
- **AppBar**
  > 고정된 헤더를 구현할 때 사용하는 것 같다.
  - leading : 왼쪽 아이콘
  - title : 중앙 텍스트
  - actions : 오른쪽 아이콘
- **Scaffold**
  > 디자인의 구조를 정해준다고 하는데 아직 개념이 확실하지 않은 것 같다.
- **SingleChildScrollView**

  > 이거도 PageView와 차이점이 무엇인지 조금 더 공부할 필요가 있는 것 같다.

- 새로 알게된 개념

  - 위젯으로 감싸줘야 할 때 `cmd` + `.` 을 누르고 `wrap with widget` 을 하면 편하다. 아마 들여쓰기 지옥 flutter에서 꿀 기능인 것 같다.
  - 위젯이 들어가는 자리에 함수를 넣어줘서 코드를 명료하게 만들기!

  ```dart
  Widget _wakeUpAlarm(){
  	return Container(
  		padding : const EdgeInsets.symmetric(horizontal : 10),
  	)
  }

  Column(
  	children : [
  		_wakeUpAlarm(),
  	]
  )
  ```

  → 이런 식으로 간편하게 만들어 줄 수 있다. 추축으로 flutter에서는 함수 이름 앞에 \_ 를 붙여서 만드는 것 같다.

- 실습한 내용
  - IOS 알람앱 레이아웃 만들기

## 🚨 발생한 문제/에러

- 오늘은 발생한 에러가 없었다.

## 📝 코드 스니펫

```dart
Widget _wakeUpAlarm(){
	return Container(
		padding : const EdgeInsets.symmetric(horizontal : 10)
	);
}
// 오늘 배운 주요 코드
Column(
	children : [
		_wakeUpAlarm(),
	]
)
```

## 📚 내일 학습할 내용

이번 주 개인과제를 깜박하고 있어서 조금 학습에 여유를 부렸는데 금요일 18시까지 개인 프로젝트를 제출을 해야 해서 오늘 밤새고 내일도 빡세게 공부를 해야 할 것 같다.

## 💭 오늘의 회고

### 잘한 점 👍

- 블로그 글 작성에 있어서 에러가 있었는데 다시 실행하니까 해결되어 있어서 좋았음.

### 개선할 점 🔨

- 학습에 몰입해서 하지 못한 것 같음

### 배운 점 💡

- 다양한 위젯들:)

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
