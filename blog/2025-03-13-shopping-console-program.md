---
slug: shopping-console-program
title: 쇼핑몰 콘솔 프로그램 트러블 슈팅
authors: [junseok]
tags: [journal, dart, assignment]
date: 2025-03-13T21:00
---

# 2025-03-13-shopping-console-program

# 📚 오늘의 학습 내용

오늘은 개인 과제로 - 콘솔로 쇼핑몰 기능을 하는 프로그램을 만드는 것이었다. 간단하게 생각해서 여유부리다가 마지막에 시간에 쫓겨서 도전 기능은 거의 못하고 제출하게 되었다.

나는 사용자가 입력할 수 있는 모든 예외 상황에 대처할 수 있는 프로그램을 만들기 위해서 여러 가지 신경을 썼었는데 해설강의를 들으니까 기본적인 예외만 처리하고 나머지는 프리하게 하는 것을 보면서 내가 너무 어렵게 했나 그런 생각도 들었다. 그래도 확실히 이런 여러 가지 과제들을 하면서 복잡한 로직?을 짜보는 게 중요한 것 같다.

아무래도 코딩을 하다 보면 자기가 익숙한 문법, 코드만을 가지고 계속해서 코딩을 하게 되는데 알고리즘 문제 등을 풀면서 내가 익숙하지 않았던 문법 요소들도 사용을 하게 되고 이 문법이 이렇게 쓰이는구나 라고 깨닫게 되는 것 같다.

## ✍️ 주요 학습 내용

### 배운 내용

- 콘솔 프로그램 제작

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
<summary>트러블 슈팅1 : 공백 제거 </summary>
<div markdown="1">

```dart
void addToCart(String productName, int number) {
    Product addedProduct =
        products.where((product) {
          print('product.name: ${product.name} productName: $productName');
          print('== ${product.name == productName}');
          return product.name == productName;
        }).first;
    cart.add(addedProduct);
    totalPrice += addedProduct.price * number;
    print(
      '----------------------------------------------------------------------------------------',
    );
    print('장바구니에 상품이 담겼어요!');
  }

// error message
수량 : 2
Unhandled exception:
Bad state: No element
#0      Iterable.first (dart:core/iterable.dart:645:7)
#1      ShoppingMall.addToCart (file:///Users/junseokyang/Desktop/project/flutter/assignment/consoleShoppingMall/consoleShoppingMall.dart:29:66)
#2      main (file:///Users/junseokyang/Desktop/project/flutter/assignment/consoleShoppingMall/consoleShoppingMall.dart:139:24)
#3      _delayEntrypointInvocation.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:315:19)
#4      _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:194:12)
```

```dart
product.name: 셔츠 productName: 반바지
== false
product.name: 원피스 productName: 반바지
== false
product.name: 반팔티 productName: 반바지
== false
product.name: 반바지 productName: 반바지
== false
```

- 장바구니에 상품을 담기 위해서 수량을 입력하면 에러가 나왔다.
- 원인은 입력한 상품명과 동일한 상품명을 갖고 있는 요소들을 배열로 만들어야 되는데 동일한 상품명이 없어서 빈 배열을 where 을 통해서 반환하게 되고 거기서 first 를 사용해서 첫 번째 요소를 받으려고 하니까 오류가 생겼다.
- 분명히 상품명을 동일하게 입력했는데도 오류가 나오니까 where 문에 `print` 를 추가해서 값을 비교했다.
- 그랬더니 입력을 할 때 양말[공백] 이런 식으로 뒤나 앞에 공백이 있으면 양말과는 일치하지 않는다고 나와서 where 에서 빈 배열을 반환하게 되는 오류였다.
- 그래서 `addToCart()` 매개변수로 보내기 전에 `productName.trim()` 이렇게 `trim()` 을 사용해 양 옆 공백을 제거해 줌으로써 문제가 해결이 되었다.

</div>
</details>

<details>
<summary>해설</summary>
<div markdown="1">

`stdin.readLineSync();` → `String?` 을 반환함

`import ‘dart:io’;`

- 입출력을 담당하는 라이브러리
- `std` → standard의 준말
- `in` → input

`stdin.readLineSync();` : 입력요청

`stdout.write(’상품명 : ‘);` 글자 출력

No Element → Exception 처리

→ `try & catch`

`switch`

`default:` → 옵션에 없는 값이 나왔을 때

```dart
List<Map> cart = [];
cart.add({"product" : currentProduct, "count" : count})
cartItem['product'].name
```

</div>
</details>

### 실습한 내용

- 콘솔 프로그램 제작

## 🚨 발생한 문제/에러

- 위에서 정리를 함. 공백 문제

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
string.trim()
```

## 📚 내일 학습할 내용

- 종합반 복습

## 💭 오늘의 회고

### 잘한 점 👍

- 과제 마무리

### 개선할 점 🔨

- 미리미리 과제를 시작할걸..

### 배운 점 💡

- dart의 io 입출력에 대해서 배움

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
