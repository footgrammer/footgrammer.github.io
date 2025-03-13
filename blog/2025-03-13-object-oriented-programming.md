---
slug: object-oriented-programming
title: 객체 지향 프로그래밍 배우기
authors: [junseok]
tags: [journal, dart]
date: 2025-03-13T20:00
---

# 2025-03-13-object-oriented-programming

# 📚 오늘의 학습 내용

<details>
<summary>오늘의 코딩</summary>
<div markdown="1">

> 공통된 접두사를 찾아서 반환해라

```dart
// 강사님 풀이법
String longestCommonPrefix(List<String> strs){
	if(strs.isEmpty){
		return ""
	}
	String prefix = strs.first;

	for(var i = 1; i < strs.length; i++){
		String str = strs[i];
		while(!str.startsWith(prefix)){
			prefix = prefix.substring(0, prefix.length - 1);
			if(prefix.isEmpty){
				return "";
			}
		}
	}
	return prefix;

}
```

```dart
// 내 풀이법 str.codeUnits
class Solution {
  String longestCommonPrefix(List<String> strs) {
	  if (strs.isEmpty) {
      return solutionStr;
    }

    String prefix = "";
    String solutionStr = "";
    List<String> firstStr = strs[0].split("");
    for(int i = 0; i < firstStr.length; i++){
        prefix = firstStr[i];

        if(strs.every((samePrefix) => samePrefix.startsWith(prefix, i))){
            solutionStr += prefix;
        }else{
            break;
        }
    }
    return solutionStr;
  }
}
```

### 알게 된 점

1. 빈 배열에 대한 예외 처리
   1. 빈 List가 왔을 때 에러가 나오기 때문에 처음에 `isEmpty` 로 예외처리해 주기
2. `subString([시작인덱스], [길이])`
   1. 문자열에서 원하는 부분을 출력할 때

</div>
</details>

클래스의 개념에 대해서 배웠다. 속성에서 클래스 변수, 지역 변수, 정적 변수가 있었는데 정적 변수에 대한 개념이 없었는데 정적 변수에 대해서 확실히 배울 수 있었다.

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
<summary>클래스</summary>
<div markdown="1">

`class [클래스 이름] { … }`

```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduce() {
    print('안녕 ? 나는 $age살 $name !');
  }
}
```

### 속성 (attribute)

1. 인스턴스 변수(Instance Variable)

   1. 객체에 속해 있는 변수

      ```dart
      class Person {
        String name = '강미래';
      	int age = 25;
      }
      ```

   2. `this` 를 통해 접근 가능
   3. 객체가 존재하는 동안 계속 메모리 상에 존재

2. 지역 변수 (Local Variable)

   1. 특정 코드 블록 안에 선언된 변수

      ```dart
      class Person {
      	String name = '강미래';

      	void sayName() {
      		String nameSentence = '내 이름은 $name !';
      		print(nameSentence);
      	}
      }
      ```

   2. 변수가 선언된 코드 블록의 실행이 끝나면 메모리 상에서 사라짐

3. 정적 변수 (Static Variable)

   - 클래스 변수라고 불림
   - 객체에 종속되지 않고 클래스 자체에 속하는 변수

   ```dart
   class Circle {
     static double pi = 3.14159;
   }
   ```

   - 클래스 이름을 통해 접근 가능

   ```dart
   class Circle {
     static double pi = 3.14159;
     double radius = 0;
   }

   void main() {
   	print(Circle.pi); // 3.14159
   	print(Circle.radius); // Error: Member not found: 'radius'.
   }
   ```

   - 객체를 통해 접근할 수 없음

   ```dart
   class Circle {
     static double pi = 3.14159;
     double radius = 0;
   }

   void main() {
   	Circle circle = Circle();
   	print(circle.radius); // 0
   	print(circle.pi); // 오류 발생
   }
   ```

   - `this` 를 통해 접근할 수 없음
   - 모든 객체가 서로 값을 공유함

</div>
</details>

<details>
<summary> branch 관리</summary>
<div markdown="1">

mileStone에서 이슈를 만들어서 이슈명에 맞게 브랜치 명에 맞게 함

pull request 남기기 전에 rebase가 깔끔한 것 같음

</div>
</details>

### 실습한 내용

-

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
