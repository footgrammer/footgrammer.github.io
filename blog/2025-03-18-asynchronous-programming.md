---
slug: asynchronous-programming
title: 비동기 프로그래밍
authors: [junseok]
tags: [journal, dart]
date: 2025-03-18T20:00
---

# 2025-03-18-asynchronous-programming

# 📚 오늘의 학습 내용

<details>
<summary>아침에 코딩</summary>
<div markdown="1">

> 주어진 문자열 haystack과 needle이 있을 때,
> needle이 haystack 내에서 처음 나타나는 위치를 반환합니다.
> needle이 존재하지 않으면 -1을 반환합니다.

```dart
int strStr(String haystack, String needle) {
  return haystack.indexOf(needle);
}
```

### 알게 된 점

- `String` 에서 indexOf로 특정 `String` 이 들어가는 시작 인덱스를 알 수 있다는 것을 배웠다.
- 그리고 해당 문자열이 없으면 -1 로 반환된다는 것을 배워서 간단한 문제였음.

</div>
</details>

## ✍️ 주요 학습 내용

### 배운 내용

- 동기 프로그래밍
- 비동기 프로그래밍

### 새로 알게된 개념

<details>
<summary>비동기 프로그래밍</summary>
<div markdown="1">

- 작업이 완료될 때까지 기다리지 않고, 미래의 특정 시점에 값을 반환해요.
- 결과값이 나올 때까지 멈춰 있지 않고, 수행할 수 있는 다른 작업을 찾아서 수행해요
- `dart:async`
  - `Future` , `Stream` 클래스를 통해 비동기 프로그래밍 지원

</div>
</details>

<details>
<summary>`Future` 클래스 </summary>
<div markdown="1">

- 작업이 성공적으로 완료되었을 때 해당 결과값을 반환하고 실행을 종료
- 하나의 작업에 대해 값이나 이벤트가 한번 발생하는 단일 비동기 작업에 사용

- `Future` 에 있는 `delayed()` 라는 메서드에 대해 알아보고 갑시다 👀

  - `Future.delayed(Duration(seconds: [지연 시간]));`

    ```dart
    void main() {
    	int seconds = 2;
    	print('실행 시작 !');
    	Future.delayed(Duration(seconds: seconds));
      print('실행 끝 !');
    }

    /*
    실행 시작 !
    실행 끝 !
    */
    ```

  - `Future.delayed(Duration(seconds: [지연 시간]), () {[지연 시간 후의 동작]});`

    ```dart
    void main() {
    	int seconds = 2;
    	print('실행 시작 !');
    	Future.delayed(Duration(seconds: seconds), () {
        print('$seconds초 다 기다림 !');
      });
      print('실행 끝 !');
    }

    /*
    실행 시작 !
    실행 끝 !
    2초 다 기다림 !
    */
    ```

`async` ~ `await`

→ 비동기 프로그래밍을 동기 프로그래밍으로!

`await` 을 사용하려면 `Future<void>` 를 반환타입에 명시해 줘야 함

### 한계점

- 하나의 작업당 결과값을 1번만 받을 수 있음
- 하나의 작업에 결과값이 여러 번 나오는 경우가 있을 수 있기 때문에 `Stream` 이 등장

</div>
</details>

<details>
<summary> `Stream` 클래스 </summary>
<div markdown="1">

- 실행을 종료해 주지 않으면 계속 실행됨
- 비동기 연산의 결과값이 여러 번 반환되는 경우 그 값을 순차적으로 받기 위해 사용됨
- 코드를 본격적으로 써보기 전에 몇 가지에 대해 알아보고 갑시다 👀

  - `yield`
    - 값을 방출하도록 하는 키워드
      ```dart
      Stream<String> emitNames() async* {
        yield '강미래';
        yield '강현재';
        yield '강과거';
      }
      ```
      ```dart
      Stream<String> emitNames(List<String> names) async* {
        for (var i = 0; i < names.length; i++) {
          yield '${i + 1}번째는 ${names[i]} ~';
        }
      }
      ```
    - **함수** 와 **메서드** 에서 사용하는 `return` 과 같은 개념이라고 보시면 돼요 🙂
  - `listen()`

    - 방출되는 소리를 듣고 있는다는 뜻으로 생각하면 돼요 🙂
    - `yield` 를 통해 방출되는 값을 받기 위해 사용하는 **메서드**

      ```dart
      Stream<String> emitNames() async* {
        yield '강미래';
        yield '강현재';
        yield '강과거';
      }

      void main() {
        int number = 1;

        emitNames().listen((name) {
          print('$number번째는 $name ~');
          number += 1;
        });
      }

      /*
      1번째는 강미래 ~
      2번째는 강현재 ~
      3번째는 강과거 ~
      */
      ```

      ```dart
      Stream<String> emitNames(List<String> names) async* {
        for (var i = 0; i < names.length; i++) {
          yield '${i + 1}번째는 ${names[i]} ~';
        }
      }

      void main() {
      	List<String> names = ['강미래', '강현재', '강과거'];
        emitNames(names).listen((element) {
          print(element);
        });
      }

      /*
      1번째는 강미래 ~
      2번째는 강현재 ~
      3번째는 강과거 ~
      */
      ```

- `async*` 이렇게 사용을 해줘야 함.

</div>
</details>

### 실습한 내용

- 없음

## 🚨 발생한 문제/에러

- 없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
Stream<int> emitNumbers(int first) async* {
	for(var i = first; i >= 0 ; i--){
		yield i;

		await Future.delayed(Duration(seconds : 1));
	}
}
```

## 📚 내일 학습할 내용

- 개인 과제

## 💭 오늘의 회고

### 잘한 점 👍

- 집중 공부

### 개선할 점 🔨

- 나태함 이기기

### 배운 점 💡

- Future 클래스
- Stream 클래스

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
