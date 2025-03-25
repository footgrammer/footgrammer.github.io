---
slug: start-flutter
title: 플러터 기초 복습
authors: [junseok]
tags: [journal, dart]
date: 2025-03-24T20:00
---

# 2025-03-24-start-flutter

# 📚 오늘의 학습 내용

- 오늘은 환경설정 및 플러터 위젯에 대해서 다시 복습을 했다.
- 다트를 학습하다 보니까 플러터 위젯에 대해서 많이 까먹은 부분이 있어서 강의를 보면서 다시 복습을 할 수 있었다.

## ✍️ 주요 학습 내용

### 배운 내용

- 플러터 환경설정
- 플러터 위젯

### 새로 알게된 개념

- Column() Widget
- Row() Widget
- Text() Widget
- SafeArea() Widget
- Spacer() widget
  - 사용 가능한 모든 공간을 차지함
  - flex 옵션을 사용해 크기 비율 조정 가능
- Padding
  - Options
    - padding : EdgeInsets.all(16.0)
      - all() : 상하좌우
      - symmetric(horizonal : 8.0) : 좌우만
      - symmetric(vertical : 8.0) : 상하만
      - only (left : 40.0)
- Image
  - Image.network(’url’) : 인터넷의 이미지를 사용
  - Image.asset(’assets/image.png’) : 프로젝트에 추가해준 이미지 사용
  - Image.file(File(’디바이스 내 파일경로’)) : 디바이스 내 저장된 사진
  - Image.memory(bytes) : 메모리 내에 있는 이미지 사용
    - fit 옵션
      - `BoxFit.contain` : 원본사진의 가로 세로 비율 변화 없음
      - `BoxFit.fill` : 원본사진의 비율을 무시하고 지정한 영역에 사진을 맞춤
      - `BoxFit.cover` : 원본사진의 가로 세로 비율을 유지한 채로 지정한 영역에 사진을 맞춤. 장점은 사진의 비율을 유지할 수 있다는 점이고 단점은 사진이 지정한 크기를 벗어나면 잘릴 수 있음
- Expanded
  - Row, Column 내에서 남은 공간을 확장하여 공간을 채울 수 있도록 하는 위젯
- SizedBox()
  - width
  - height
  - child

### 기타

`cmd + .` → Wrap with widget

flutter devtools

cmd + shift + p(command pallete) : Devtools Widget Inspector을 실행

- debug 제거
- MaterialApp의 debugShowCheckedModeBanner : false

### 사용할 이미지 추가

- 이미지를 프로젝트 경로 내의 폴더 (/assets)를 만들어 복사해 주기
- pubspec.yaml에 해당 경로에 assets (이미지 등의 파일)이 있다고 알려주기

```dart
assets:
	- assets/
```

### main 함수와 runApp()

- flutter를 시작하기 위해서는 main 함수에서 runApp() 함수를 호출해야 함
- runApp 호출 시 넘겨주는 위젯이 앱의 루트 위젯이 됨
  - 루트 위젯은 플러터가 그림을 그릴 때 가장 먼저 그리는 위젯

### Class 구성

```dart
void main(){
	runApp(const MyApp());
}

class MyApp extends StatelessWidget {
	const MyApp({super.key});

	@override
	Widget build(BuildContext context){
		return MaterialApp(
			home : StorePage(),
		);
	}
}

class StorePage extends StatelessWidget {
	@override
	Widget build(BuildContext context){
		return Scaffold();
	}
}
```

- MyApp 에서는 MaterialApp으로 전체 구조를 잡아주고 StorePage에서는 Scaffold로 구성을 해 줌.

---

### 실습한 내용

- Store 앱

## 🚨 발생한 문제/에러

- 없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
SizedBox(
	height : 10.0,
	child : Card(child : Text('hello world')),
}
```

## 📚 내일 학습할 내용

- 플러터 나머지 강의

## 💭 오늘의 회고

### 잘한 점 👍

- 플러터 복습

### 개선할 점 🔨

- 아침 시간 활용

### 배운 점 💡

- 플러터 위젯들

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
