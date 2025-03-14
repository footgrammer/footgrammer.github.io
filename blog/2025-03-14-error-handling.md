---
slug: error-handling
title: 에러 헨들링
authors: [junseok]
tags: [journal, dart]
date: 2025-03-14T20:00
---

# 2025-03-14-error-handling

# 📚 오늘의 학습 내용

<details>
<summary>오늘의 코딩</summary>
<div markdown="1">

### 정렬된 배열에서 중복 제거

```dart
class Solution {
  int removeDuplicates(List<int> nums) {
    if(nums.isEmpty){return 0;}
    int k = 1;

    for(int i = 1; i < nums.length ; i++){
        if(nums[i] != nums[k-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;

  }
}
```

### 문제점

- 숫자 배열에서 조건에 숫자가 뒤로 갈수록 감소하지 않는다는 것을 파악하지 못함
- 중복되는 것을 제거해서 ‘\_’로 바꿔야 한다는 것을 잘못 이해해서 헛고생을 조금 했다. 매번 문제를 잘 이해하지 못하는 부분이 있는 것 같다.

</div>
</details>   
<br/>

- 예외와 오류의 차이
  - 예외는 프로그래밍 로직 문제, 오류는 주로 시스템 문제(메모리 부족)

## ✍️ 주요 학습 내용

### 배운 내용

- 예외 클래스
- 오류 클래스
- 예외와 오류의 차이
- 예외처리

### 새로 알게된 개념

<details>
<summary>예외</summary>
<div markdown="1">

`FormatException`

- 다른 형태의 데이터가 들어갔을 때 예외 발생

`IOException`

- 입출력 관련 오류

`OSError`

- 운영체제 관련 에러

`TimoutException`

- 비동기 처리시 시간이 오버할 때 나오는 에러

`throw` → 의도적으로 예외를 던지는 것.

---

### 예외에 사용하는 키워드

`try` 의 코드 블록 중에 예외가 발생하면 `try` 의 코드 블록에 있는 뒷 코드들은 실행되지 않음 → `catch` 문으로 넘어감

`catch (e)`

e → 예외객체가 매개변수로 들어옴

`on`

- 단독으로 쓸 수 없음
- 특정 타입의 예외를 다룸

```dart
try{

}on FormatException catch(e){}
```

`finally`

- 예외 발생 여부에 상관없이 실행할 코드를 넣는 부분

```dart
try{
}catch(e){
}finally{
	print('예외 처리 끝!')
}
```

</div>
</details>

<details>
<summary>오류(Error)</summary>
<div markdown="1">

- 오류를 발생하면 프로그램이 종료됨

`AssertionError`

- `assert(조건문)` 가 `false` 면 오류 발생

`RangeError`

- 리스트 길이보다 더 큰 인덱스를 사용할 때
  - `RangeError` 를 상속받은 `IndexError` 를 발생

`OutOfMemoryError`

- 메모리 부족

`StackOverflowError`

- 메모리 영역 중 하나인 스택 영역이 가능한 범위를 넘어가는 현상
- 스택은 지역 변수나 매개변수를 담는 공간

`StateError`

- 객체가 현재 상태로는 특정 동작이 불가능할 때
- ex) `null.first()`

`UnimplementedError`

- 정의되지 않은 메서드나 기능을 호출했을 때

`UnsupportedError`

- 호출은 하는데 동작은 하지 않음

</div>
</details>

### 실습한 내용

- 없음

## 🚨 발생한 문제/에러

- 없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
try{
}catch(e){
}finally{
}
```

## 📚 내일 학습할 내용

- 종합반 강의 복습

## 💭 오늘의 회고

### 잘한 점 👍

- 목표를 끝까지 지키려고 한 점

### 개선할 점 🔨

- 완벽한 상태에서 과제를 하려고 하기보다 미리 시작하고 과제를 먼저 파악하는 게 중요한 것 같음

### 배운 점 💡

- 예외를 예측하는 게 쉽지 않은 것 같음

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
