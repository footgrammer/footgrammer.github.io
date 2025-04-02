# 2025-04-02-flutter-train-challenge-function

---

slug: flutter-train-challenge-function
title: 플러터 기차 예매 서비스 구현하면서 느낀 점
authors: [junseok]
tags: [journal, flutter]
date: 2025-04-01T20:00

---

# 📚 오늘의 학습 내용

오늘은 개인과제인 기차예매 앱을 마무리할 수 있었다. 볼 때는 간단해 보였지만 막상 해보니까 생각지도 못한 부분에서 오류도 많이 났고 다트 문법이 아직 부족하다는 부분을 알 수 있었다.

강의를 들을 때는 당연한 것처럼 느껴졌지만 `required` `final` `const` 이런 것들을 언제 붙이고 언제 사용해야 하는지 애매한 부분들도 있었고 생성자도 어떤 식으로 하는 게 좋은지 개념이 확실하지 않다는 것을 알게 되<!-- slide -->

어서 역시 내가 스스로 해 보는 게 중요하다고 많이 느끼게 되었다.

또한 코드의 가독성을 높이기 위해서 코드를 메소드화하거나 클래스로 따로 빼서 사용하는 등의 작업들도 아직은 익숙하지 않아서 반복되는 작업들은 메소드로 빼는 게 중요하다는 것도 알게 되었다.

## ✍️ 주요 학습 내용

### 배운 내용

-

### 새로 알게된 개념

1. 함수 vs 함수()의 차이

```dart
onPressed : function
onPressed : function() // return 값이 없으므로 에러

void function(){
	print('haha');
}

```

- function 과 function() 의 차이를 알지 못했는데 ()가 붙으면 return 값을 가져오겠다는 의미가 있어서 return 값으로 치환되어서 컴퓨터가 인식한다는 것을 알게 되었다.

1. ListView 오류

- Column 안에 ListView를 사용하게 되면 오류가 남
- ListView는 부모 위젯의 높이에 높이를 맞추게 되는데 Column의 높이는 무한이기 때문에 ListView의 높이도 부모위젯을 따라서 무한해지게 되기 때문에 오류가 남
  → ListView의 높이를 설정해야 함
- **Expanded 로 감싸서 ListView를 사용하는 것을 추천**

1. SafeArea 사용

- 버튼이 화면 맨 밑에 붙어 있어서 나는 패딩으로 올릴 생각을 했는데 SafeArea로 감싸주면 너무 간편하고 이쁘게 화면구성을 할 수 있었음

1. Navigator 사용

- 특정 페이지로 이동

```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) {
      return SeatPage(
        departure: departure!,
        arrival: arrival!,
      );
    },
  ),
);
```

- 전 화면으로 이동

```dart
Navigator.pop(context)

// 특정 데이터를 전 화면으로 보낼 수 있음
Navigator.pop(context, result)
```

- 데이터를 받을 때

```dart
onTap : () async {
	String? result = await Navigator.push(
		context,
	  MaterialPageRoute(
	    builder: (context) {
	      return StationListPage(title, departure, arrival);
	    },
	  ),
	);

}
```

1. ??

```dart
arrival ?? '선택'
```

- `arrival` 이 `null` 이면 ‘선택’을 `arrival`에 넣으라는 의미

1. builder로 감싸기

- 코드를 메서드화하거나 클래스로 분리하다 보면 때때로 context를 받을 때가 필요한데 그럴 때 나는 인자로 context를 갖고 와서 쓰고 있었는데 그렇게 하지 않고 builder widget으로 감싸면 쉽게 context를 받아서 쓸 수가 있었음..

```dart
Expanded stationArea(String title, String station) {
    return Expanded(
      child: Builder(
        builder: (context) {
          return GestureDetector(
            onTap: () async {
              String? result = await Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return StationListPage(title, departure, arrival);
                  },
                ),
              );
              if (result != null) {
                setState(() {
                  if (title == '출발역') {
                    departure = result;
                  } else {
                    arrival = result;
                  }
                });
              }
            },
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.grey,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(station, style: TextStyle(fontSize: 40)),
              ],
            ),
          );
        },
      ),
    );
  }
```

1. DefaultTextStyle

- DefaultTextStyle로 감싸서 내부에 있는 child 안에 text style을 한 번에 지정해 줄 수 있음

1. 테마 컬러

- 테마에서 설정한 색상들을 사용할 때
- color : `Theme.of(context).[색상명]`

1. `List.generate`

```dart
List.generate(20, (index) => Widget())
-> 20개의 위젯을 담은 List<Widget>이 반환됨
-> ...List.generate(20, (index) => Widget())
-> 이렇게 하면 바로 사용할 수 있음.
```

### 실습한 내용

- 다크 테마 적용
- Navigator 활용

## 📚 내일 학습할 내용

- 팀플 시작

## 💭 오늘의 회고

### 잘한 점 👍

- 코드 리펙토링

### 개선할 점 🔨

- 다트 개념 복습

### 배운 점 💡

- 정리해 놓은 내용들

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
