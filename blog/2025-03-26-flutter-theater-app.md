---
slug: flutter-theater-app
title: 플러터 영화관 앱 만들기
authors: [junseok]
tags: [journal, flutter]
date: 2025-03-26T20:00
---

# 2025-03-26-flutter-theater-app

# 📚 오늘의 학습 내용

오늘은 영화관 앱을 만들어 보면서 State 관리에 대해서도 배울 수 있었고 또한 위젯들을 클래스 및 메소드로 만들어서 관리하는 방법에 대해서 배울 수 있었다.

## ✍️ 주요 학습 내용

### 배운 내용

- StatefulWidget과 StatelessWidget의 차이

### 새로 알게된 개념

- StatefulWidget을 상속받은 다음에 setState 함수를 통해서 상태를 업데이트해 줌으로써 빌드를 다시 해 변경된 상태를 앱에 보여줄 수 있게 됨
- State (상태)라는 것은 UI에 영향을 미치는 데이터
- StatefulWidget 클래스와 State 클래스가 필요
- state 값을 변경해 주면 setState를 통해서 값이 변경되었으니 다시 빌드해 달라는 요청을 해야 함
- color : Colors.grey[200] 이렇게 밝기를 조절할 수 있음
- container 의 특성

  - child가 없으면 기본적으로 크기가 확장
  - child가 있을 경우에는 child 크기에 맞춰서 줄어듬
  - 그렇기 때문에 child가 있을 때는 `width : double.infinity` 를 통해서 가로 크기를 최대로 키울 수 있음

- `ElevatedButton`

  - flutter에서 제공해 주는 버튼 툴 중 하나.
  - 우측 하단에 그림자가 있어 살짝 떠있어 보이는 입체적인 모양의 버튼
  - SizedBox → ElevatedButton으로 구성해 사이즈 구성 가능
  - `style : ElevatedButton.styleFrom(backgroundColor : Colors.ember)` → 스타일 변경할 때

- 유저의 제스처에 반응하고 싶다면 `GestureDetector()` 사용

- CupertinoDialog

```dart
onPressed : (){
	showCupertinoDialog(
		context : context,
		builder : (context) {
			return CupertinoAlertDialog(
				title : Text('확인'),
				content : Text('예약하시겠습니까?'),
				actions : [
					CupertinoDialogAction(
						child : Text('취소'),
						isDefaultAction : true,
						onPressed(){
							Navigator.of(context).pop();
						}
					),
					CupertinoDialogAction(
						child : Text('확인'),
						isDestructiveAction : true,
						onPressed(){}
					)
				]
			)
		}
	){

	}
}
```

- `Navigator.pop(context)`
  - 플러터 내에서 페이지 이동 시 기본적으로 Stack 구조에 차곡차곡 쌓이는 구조
  - 위 코드는 가장 위에 있는 페이지를 하나 제거(pop)해서 이전 페이지로 돌아가게 하는 코드
  - showCupertinoDialog 함수를 사용하면 SeatPage 위에 CupertinoAlertDialog가 쌓임

### 실습한 내용

- 영화관 앱 실습

## 🚨 발생한 문제/에러

- 문제/에러 1
  ### 1. 문제/에러 정의
  - 클릭하면 가끔 이상한 행과 열이 클릭이 된다.
  ### 2. 시도한 해결 방법
  ### 3. 최종 해결 방법
  ### 4. 새롭게 알게 된 점
  ### 5. 다음에 비슷한 문제를 만난다면?

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
// StatefulWidget 클래스
// 어떤 상태(State 클래스)를 가지는지 정의하는 클래스
// createState 메소드에서 재정의(override)하여 구현
class MyHomePage extends StatefulWidget {
	const MyHomePage({super.key, required this.title})

	final String title;

	@override
	State<MyHomePage> createState() => _MyHomePageState();
}

// state클래스
// 상태를 관리하고 업데이트하는 클래스
// State<MyHomePage> => MyHomePage 라는 StatefulWidget의 state클래스
class _MyHomePageState extends State<MyHomePage> {
	int _counter = 0;

	void _incrementCounter(){
		// 상태(변수) 가 변경되면 setState 함수를 통해
		// 플러터 프레임워크에 다시 그려달라고 요청
		print('_incrementCounter 호출됨 $_counter');
		setState((){
			_counter++;
		});
	}

	@override
	Widget build(BuildContext context){
		print('build 호출됨');
		return Scaffold(
			body : Center(
				child : Text(
					'$_counter',
					style : TextStyle(fontSize : 100)
				)
			)
		)
	}
}
```

## 📚 내일 학습할 내용

- 플러터 강의 완강

## 💭 오늘의 회고

### 잘한 점 👍

- 빡공

### 개선할 점 🔨

- 혼자서 실습 내용을 처음부터 해볼 필요가 있는 것 같음

### 배운 점 💡

- 위젯들

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
