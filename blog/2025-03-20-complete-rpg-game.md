---
slug: complete-rpg-game
title: RPG 게임 완성하기
authors: [junseok]
tags: [journal, dart]
date: 2025-03-20T20:00
---

# 2025-03-20-complete-rpg-game

# 📚 오늘의 학습 내용

> 오늘은 RPG 게임 완성을 하는 데 시간을 많이 쏟았던 것 같다. 코드를 최대한 예쁘게 작성하려고 했지만 만들면 만들수록 점점 지저분해지는 내 코드를 볼 수 있었는데 다시 한번 코드를 보면서 기능별로 함수처리를 해서 예쁘게 만들어야 될 것 같다.

그래도 과제를 하면서 콘솔 입출력에 대해서도 익숙해지게 되고 클래스와 인스턴스의 개념에 대해서도 내가 모르는 부분에 대해서 확실히 알게 되었다. 강의를 들을 때에는 확실히 알고 있다고 생각했지만 역시나 내가 직접 짤려고 하니 `required` ,`final` , `late` 등 언제 무엇을 써야될 지 멘붕이 올 때가 있었다. 그리고 생성자도 다양한 생성방법이 있는데 거기서 내가 어떤 방법을 적용해서 클래스를 만들어야 할지 그런 부분에서도 내가 아직 개념이 부족하다는 것을 알게 되었다.

역시 만들어 보면서 부족한 부분이 많이 나오는 것 같다. 그리고 반복문을 자주 쓰다 보니까 `break` , `continue` 의 개념에 대해서도 확실히 알게 된 것 같고 함수, 클래스, 객체 지향 프로그래밍, 값 복사, 참조 복사 이 개념에 대해서 명확히 해서 포스팅을 해야겠다.

역시 내가 개념을 정리해 가면서 공부할 때 내 것이 되는 것 같다.

>

## ✍️ 주요 학습 내용

### 배운 내용

- 파일출력
- 정규식

### 새로 알게된 개념

### 파일 출력

```dart
String contents = '파일 내용';
var file = File('파일 저장 위치');
file.writeAsStringSync(contents);
// 파일 저장 완료!
```

### 정규식

```dart
RegExp nameRegulation = RegExp(r"^[ㄱ-ㅎ가-힣a-zA-Z]*$");
String text = "검사하고 싶은 문자열";
if(!nameRegulation.hasMatch(text)){
	//문자열이 조건에 맞지 않을 때
}
```

- 정규식 한글은 `r”^[ㄱ-ㅎ가-힣]*$”`
- 정규식 영문은 `r”^[a-zA-Z]*$”`
- 정규식 숫자는 `r”^[0-9]*$”`
- `hatMatch(문자열)` 메서드를 통해서 조건일치여부 반환(True or False)

### 현재시간 얻기

```dart
var now = DateTime.now();
int year = now.year;
int month = now.month;
int day = now.day;
```

### 실습한 내용

- RPG Game 만들기

## 🚨 발생한 문제/에러

없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
RegExp nameRegulation = RegExp(r"^[ㄱ-ㅎ가-힣0-9a-zA-Z]*$");
String text = 'Study hard';
if(!nameRegulation.hasMatch(text){
	print('Study Again');
}
```

## 📚 내일 학습할 내용

- Code refactoring

## 💭 오늘의 회고

### 잘한 점 👍

- 과제 필수 기능 구현

### 개선할 점 🔨

- 도전 기능 구현하기

### 배운 점 💡

- 클래스 개념
- 값 복사, 참조 복사

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
