---
slug: functional-programming
title: 함수형 프로그래밍(고차 함수 꿀기능인듯;;)
authors: [junseok]
tags: [journal, dart]
date: 2025-03-12T20:00
---

# 2025-03-12-functional-programming

# 📚 오늘의 학습 내용

<details>
<summary>🖥️ 오늘의 코딩</summary>
<div markdown="1">

### ❓ 로마 문자를 숫자로 바꾸시오!

```dart
Class Solution{
	int ramanToInt(String s){
		List<String> romans = s.spit('');
		Map<String, int> romanMap = {
			'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
		};
		int sum = 0;
		for(int i = 0; i < romans.length; i++{
			if(i + 1 < romans.length
			&& romanMap[romans[i] < romanMap[romans[i+1]){
				sum -= romanMap[romans[i]];
			}else{
				sum += romanMap[romans[i]];
			}
		}
	}
}

main() {
  Solution solution = Solution();
  print(solution.romanToInt("III"));
  print(solution.romanToInt("LVIII"));
  print(solution.romanToInt("MCMXCIV"));
}
```

### 알게 된 점

- 로마자들을 `Map` 으로 만들어서 구현해 낼 생각을 처음에는 못했던 것 같다. 역시 `Map` 을 자주 사용하는 것 같아서 `Map` 에 익숙해져야 할 필요가 있다고 느꼈다.
</div>
</details>

<br/>

오늘은 내가 익숙하지 않았던 여러 가지 함수에 대해서 배울 수 있었다. 그리고 `Collection` 에서 사용되는 다양한 고차 함수를 익히면서 메서드 체이닝 방식으로 간편하게 코딩을 할 수 있다는 것을 알 수 있게 되었다.

함수에 익숙하지 않으면 평소에 내가 익숙한 함수로만 코딩을 하기 때문에 이 고차 함수에 익숙해질 수 있도록 이 고차 함수 및 형변환 함수들은 외워놔야 될 필요성을 느꼈다!

## ✍️ 주요 학습 내용

### 배운 내용

- 함수형 프로그래밍
- 순수 함수
- 형변환 함수
- 고차 함수

### 새로 알게된 개념

<details>
<summary>함수형 프로그래밍</summary>
<div markdown="1">

- **함수** 의 연속으로 프로그램을 구성하는 방식
  - **함수** 의 연속 ?
    - **메서드 체이닝** (Method Chaining) 이라고도 불러요.
    - **메서드 체이닝** (Method Chaining) ? 🤔
      - 어떤 친구인가요 ?
        - `.` 을 사용해서 여러 개의 함수를 하나로 연결하는 방식
      - 예시 코드가 궁금해요 👀
        ```dart
        int number = -12345
        var result = number.abs().toString().contains('3');
        print(result); // true
        ```
        ```dart
        String word = 'abcd';
        var index = word.toUpperCase().indexOf('B');
        print(index); // 1
        ```
- 순수 함수
  - 출력값이 항상 함수의 매개변수에만 의존하는 함수
  - 함수 밖에 있는 변수를 사용하지 않는 함수
  - 값은 값을 입력하면 항상 같은 값이 나오기 때문에 예상하지 못했던 상황이 생길 일이 적어짐
- `method`
  - `toUpperCase()` : 대문자 바꿔주는 것
  - `toLowerCase()` : 소문자로 바꿔주는 것
  - `abs()` : 절대값 출력
  - `indexOf()` : 해당값의 인덱스 출력
  - `contains()` : 해당 값을 포함하고 있는지 알려줌

</div>
</details>

<details>
<summary>형 변환 함수</summary>
<div markdown="1">

- `toString()` : 문자열로 만들어 줌
- `int.parse(문자열)` : 문자열을 `int` 로 바꿔줌
- `double.parse(문자열)` : 문자열을 `double` 형태로 바꿔줌
- `toList()` : `Collection` 타입의 값을 `List` 타입으로 변환한 값을 반환해 줌
  ```dart
  Set<String> fruitSet = {'사과', '오렌지', '수박'};
  var fruitList = fruitSet.toList();
  print(fruitList); // [사과, 오렌지, 수박]
  print(fruitList.runtimeType); // List<String>
  ```
  - `Map` 타입에는 `toList()` 를 사용할 수 없음
- `toSet()` : 특정 `Collection` 타입의 값을 `Set` 타입으로 변환한 값을 반환해요.
  - `Set` 은 중복값을 허용하지 않기 때문에 `Collection` 값에 중복된 값을 제외한 `Set` 을 반환함
  - `Map` 에는 사용할 수 없음
- `asMap()` : 특정 `Collection` 타입의 값을 `Map` 타입으로 변환한 값을 반환해요.
  - `List` 의 인덱스를 키 값으로 `List` 의 값을 값으로 할당해 줌
  - `Map` 의 값은 중복이 되기 때문에 중복값 적용 가능!
  - `Set` 은 `index` 가 없기 때문에 `Set` 에는 적용하지 못함
  - `Set` 에서 `toList()` 로 `List` 로 바꿔준 후에 `asMap()` 으로 `Map` 형태로 바꿔줄 수 있음

</div>
</details>

<details>
<summary>고차 함수(Higher-order Function)</summary>
<div markdown="1">

- `Collection` 타입의 데이터에 있는 요소를 처리하거나 변환할 때 사용해요.
- 고차함수에 대해서는 익숙하지 않아서 이것은 암기해서 앞으로 필요한 상황이 있을 때 사용하면 좋을 것 같음
- 나만의 정리!
  - `map()` 은 `Collection` 에 어떤 작업을 해서 새로운 `Collection` 을 얻고자 할 때
  - `where()` 은 `Collection` 에서 원하는 조건에 해당하는 새로운 `Collection` 을 얻고자 할 때
  - `firstWhere()` , `lastWhere()` 은 원하는 조건의 값 1개를 얻고자 할 때. 하지만 값이 없으면 에러가 나오니 조심
  - `reduce()` 는 `Collection` 에 있는 전체 요소를 가지고 뭔가를 할 때. 예를 들면 전체 요소의 합을 구한다든지 할 때 쓰면 좋을 것 같음,
    - `Collection` 에 데이터가 없으면 에러 발생하니 조심
    - 다른 형태로 반환 불가능
  - `fold()` `reduce()` 와는 다르게 초기값을 설정해 주고 모든 요소들과 특정 동작을 수행할 수 있게 함
    - 초기값을 설정해 주니 데이터가 없어도 에러 발생하지 않음
    - 다른 형태로 반환 가능
  - `any()` : `Collection` 에 특정 조건을 해당하는 값이 있는지 확인할 때
  - `every()` : `Collection` 의 모든 요소가 특정 조건을 충족하는지 확인할 때
  - `takeWhile()` 조건에 부합하지 않는 첫 요소가 나올 때까지의 요소를 반환
  - `skipWhile()` : 조건에 부합하지 않는 첫 요소가 나올 때부터의 요소를 반환

---

### 종류

- `map()`

  - 어떤 친구인가요 ?
    - `Collection` 타입인 데이터의 각 요소에 특정 함수를 적용한
      새로운 `Collection` 타입의 데이터를 반환해요.
  - 어떻게 생겼나요 ?

    - `map(([매개변수]) { return [매개변수에 적용할 동작] });`

      ```dart
      List<String> fruitList = ['사과', '오렌지', '수박'];
      var delicious = fruitList.map((fruit) {
        var word = '맛있는 ';
        word += fruit;
        return word;
      });
      print(delicious); // (맛있는 사과, 맛있는 오렌지, 맛있는 수박)
      ```

      ```dart
      List<String> fruitList = ['사과', '오렌지', '수박'];
      var delicious = fruitList.map((fruit) {
      	return '맛있는 $fruit';
      });
      print(delicious); // (맛있는 사과, 맛있는 오렌지, 맛있는 수박)
      ```

      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var doubledNumbers = numbers.map((n) {
      	return n * 2;
      });
      print(doubledNumbers); // (2, 4, 6, 8, 10)
      ```

      ```dart
      Set<String> carSet = {'BMW', '현대', '기아'};
      var goodCar = carSet.map((car) {
      	return '짱 멋진 $car';
      });
      print(goodCar); // (짱 멋진 BMW, 짱 멋진 현대, 짱 멋진 기아)
      ```

      ```dart
      Map<String, int> fruits = {'사과': 5, '포도': 2, '귤': 3};

      var delicious = fruits.keys.map((fruit) {
      	return '맛있는 $fruit';
      });
      print(delicious); // (맛있는 사과, 맛있는 포도, 맛있는 귤)

      var numbers = fruits.values.map((number) {
      	return '$number개';
      });
      print(numbers); // (5개, 2개, 3개)
      ```

    - `map(([매개변수]) => [매개변수에 적용할 동작] );`
      - 매개변수에 적용할 동작을 한줄로 표현 가능한 경우에만 사용할 수 있어요.
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5];
        var doubledNumbers = numbers.map((n) => n * 2);
        print(doubledNumbers); // (2, 4, 6, 8, 10)
        ```
        ```dart
        List<String> fruits = ['사과', '오렌지', '수박'];
        var delicious = fruits.map((fruit) => '맛있는 $fruit');
        print(delicious); // (맛있는 사과, 맛있는 오렌지, 맛있는 수박)
        ```

  - 어떤 특징이 있나요 ?
    - 원본 데이터를 직접 가공하지 않고, 특정 함수를 적용한 새로운 데이터를 반환해요.
      ```dart
      List<String> alphabets = ['A', 'B', 'C', 'D'];
      var lowercasedAlphabets = alphabets.map((alphabet) {
      	return alphabet.toLowerCase()
      });
      print(lowercasedAlphabets); // (a, b, c, d)
      print(alphabets); // [A, B, C, D]
      ```
    - 원본 데이터와 크기가 같은 데이터를 반환해요.
      ```dart
      List<String> alphabets = ['a', 'b', 'c', 'd'];
      final uppercasedAlphabets = alphabets.map((alphabet) {
      	return alphabet.toUpperCase()
      });
      print(alphabets); // [A, B, C, D]
      print(alphabets.length); // 4
      print(uppercasedAlphabets); // (A, B, C, D)
      print(uppercasedAlphabets.length); // 4
      ```

- `where()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 각 요소들을 특정 조건에 넣었을 때 참인 요소들만 필터링한 새로운 `Collection` 타입의 데이터를 반환해요.
  - 어떻게 생겼나요 ?
    - `where(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.where((number) {
      	return number > 5;
      });
      print(result); // (6, 7, 8, 9, 10)
      ```
      ```dart
      List<String> fruits = ['사과', '오렌지', '수박'];
      var result = fruits.where((fruit) {
      	return fruit.length == 2;
      });
      print(result); // (사과, 수박)
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.where((number) {
      	return number.isEven
      });
      print(result); // (2, 4, 6)
      ```
    - `where(([매개변수]) => [조건식] );`
      - 매개변수에 적용할 동작을 한줄로 표현 가능한 경우에만 사용할 수 있어요.
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = numbers.where((n) => n > 5);
        print(result); // (6, 7, 8, 9, 10)
        ```
        ```dart
        List<String> fruits = ['사과', '오렌지', '수박'];
        var result = fruits.where((f) => f.length == 2);
        print(result); // (사과, 수박)
        ```
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5, 6];
        var result = numbers.where((n) => n.isEven);
        print(result); // (2, 4, 6)
        ```
  - 어떤 특징이 있나요 ?
    - 원본 데이터를 직접 가공하지 않고, 특정 함수를 적용한 새로운 데이터를 반환해요.
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.where((number) {
      	return number > 5
      });
      print(result); // (6, 7, 8, 9, 10)
      print(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      ```
      ```dart
      List<String> fruits = ['사과', '오렌지', '수박'];
      var filteredFruits = fruits.where((fruit) {
      	return fruit.length == 2
      });
      print(filteredFruits); // (사과, 수박)
      print(fruits); // ['사과', '오렌지', '수박']
      ```
    - 조건식이 참인 요소가 없는 경우에는 빈 값을 반환해요.
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.where((number) {
        return number > 10;
      });
      print(result); // ()
      ```
- `firstWhere()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 각 요소들을 특정 조건에 넣었을 때
      참인 요소들 중 첫번째 요소를 반환해요.
  - 어떻게 생겼나요 ?
    - `firstWhere(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.firstWhere((number) {
      	return number > 5;
      });
      print(result); // 6
      ```
      ```dart
      List<String> fruits = ['사과', '오렌지', '수박'];
      var result = fruits.firstWhere((fruit) {
      	return fruit.length == 2;
      });
      print(result); // 사과
      ```
    - `firstWhere(([매개변수]) => [조건식] );`
      - 매개변수에 적용할 동작을 한줄로 표현 가능한 경우에만 사용할 수 있어요.
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = numbers.firstWhere((n) => n > 5);
        print(result); // 6
        ```
        ```dart
        List<String> fruits = ['사과', '오렌지', '수박'];
        var result = fruits.firstWhere((f) => f.length == 2);
        print(result); // 사과
        ```
  - 어떤 특징이 있나요 ?
    - 원본 데이터를 직접 가공하지 않고, 특정 함수를 적용한 새로운 데이터를 반환해요.
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.firstWhere((number) => number > 2);
      print(result); // 3
      print(numbers); // [1, 2, 3, 4, 5]
      ```
    - 조건식이 참인 요소가 없는 경우에는 오류가 발생해요 🚨
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.firstWhere((number) {
        return number > 10;
      });
      print(result); // StateError
      ```
- `lastWhere()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 각 요소들을 특정 조건에 넣었을 때
      참인 요소들 중 마지막 요소를 반환해요.
  - 어떻게 생겼나요 ?
    - `lastWhere(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.lastWhere((number) {
      	return number > 5;
      });
      print(result); // 10
      ```
      ```dart
      List<String> fruits = ['사과', '오렌지', '수박'];
      var result = fruits.lastWhere((fruit) {
      	return fruit.length == 2;
      });
      print(result); // 수박
      ```
    - `lastWhere(([매개변수]) => [조건식] );`
      - 매개변수에 적용할 동작을 한줄로 표현 가능한 경우에만 사용할 수 있어요.
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = numbers.firstWhere((n) => n > 5);
        print(result); // 6
        ```
        ```dart
        List<String> fruits = ['사과', '오렌지', '수박'];
        var result = fruits.firstWhere((f) => f.length == 2);
        print(result); // 사과
        ```
  - 어떤 특징이 있나요 ?
    - 원본 데이터를 직접 가공하지 않고, 특정 함수를 적용한 새로운 데이터를 반환해요.
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.lastWhere((number) => number > 2);
      print(result); // 5
      print(numbers); // [1, 2, 3, 4, 5]
      ```
    - 조건식이 참인 요소가 없는 경우에는 오류가 발생해요 🚨
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = numbers.lastWhere((number) {
        return number > 10;
      });
      print(result); // StateError
      ```
- `reduce()`

  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 요소들을 하나의 값으로 결합해요.
  - 어떻게 생겼나요 ?
    - `reduce(([매개변수1], [매개변수2]) { return [적용할 동작] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.reduce((a, b) {
      	return a + b;
      });
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4];
      var result = numbers.reduce((a, b) {
        return a * b;
      });
      ```
      ```dart
      List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
      var result = words.reduce((a, b) {
        return a + b;
      });
      ```
    - `reduce(([매개변수1], [매개변수2]) => [적용할 동작] );`
      - 매개변수에 적용할 동작을 한줄로 표현 가능한 경우에만 사용할 수 있어요.
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5];
        var result = numbers.reduce((a, b) => a + b);
        ```
        ```dart
        List<int> numbers = [1, 2, 3, 4];
        var result = numbers.reduce((a, b) => a * b);
        ```
        ```dart
        List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
        var result = words.reduce((a, b) => a + b);
        ```
  - 어떻게 실행되나요 ?

    - `매개변수1` 에는 이전 실행에서 반환된 값 (첫번째 실행에서는 이전 실행이 없기 때문에 `Collection` 타입의 데이터에 있는 첫번째 값) 이 할당되고, `매개변수2` 에는 `Collection` 타입의 데이터에 있는 다음 값이 할당돼요.

      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      int result = numbers.reduce((a, b) {
        print('a : $a');
        print('b : $b');
        print('a + b : ${a + b}');
        print('----------------------');
        return a + b;
      });
      print('result : $result');

      /*
      a : 1
      b : 2
      a + b : 3
      ----------------------
      a : 3
      b : 3
      a + b : 6
      ----------------------
      a : 6
      b : 4
      a + b : 10
      ----------------------
      a : 10
      b : 5
      a + b : 15
      ----------------------
      result : 15
      */
      ```

      ```dart
      List<int> numbers = [1, 2, 3, 4];
      int result = numbers.reduce((a, b) {
        print('a : $a');
        print('b : $b');
        print('a * b : ${a * b}');
        print('----------------------');
        return a * b;
      });
      print('result : $result');

      /*
      a : 1
      b : 2
      a * b : 2
      ----------------------
      a : 2
      b : 3
      a * b : 6
      ----------------------
      a : 6
      b : 4
      a * b : 24
      ----------------------
      result : 24
      */
      ```

      ```dart
      List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
      int result = words.reduce((a, b) {
        print('a : $a');
        print('b : $b');
        print('a + b : ${a + b}');
        print('----------------------');
        return a + b;
      });
      print('result : $result');

      /*
      a : 다트는
      b : 참
      a + b : 다트는 참
      ----------------------
      a : 다트는 참
      b : 재미있군 ?
      a + b : 다트는 참 재미있군 ?
      ----------------------
      result : 다트는 참 재미있군 ?
      */
      ```

  - 어떤 특징이 있나요 ?
    - `Collection` 타입의 데이터와 같은 타입으로만 반환할 수 있어요.
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.reduce((a, b) => '$a' + '$b');
      // Error: A value of type 'String' can't be returned from a function with return type 'int'.
      ```
    - `Collection` 타입의 데이터에 요소가 없는 경우에는 오류가 발생해요 🚨
      ```dart
      List<int> list = [];
      var result = list.reduce((a, b) => a + b); // StateError
      ```

- `fold()`

  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 요소들을 하나의 값으로 결합해요.
    - 오잉 ? 그럼 `reduce()` 랑 같은건가요 ? 🤔
      - 이거는 `fold()` 에 대해 다 배우고 나서 알려 드릴게요 !
  - 어떻게 생겼나요 ?
    - `fold(초기값, ([매개변수1], [매개변수2]) { return [적용할 동작] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.fold(0, (a, b) {
      	return a + b
      });
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4];
      var result = numbers.fold(1, (a, b) {
        return a * b;
      });
      ```
      ```dart
      List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
      var result = words.fold('앗, ', (a, b) {
        return a + b;
      });
      ```
    - `fold(초기값, ([매개변수1], [매개변수2]) => [적용할 동작] );`
      - 매개변수에 적용할 동작을 한줄로 표현 가능한 경우에만 사용할 수 있어요.
        ```dart
        List<int> numbers = [1, 2, 3, 4, 5];
        var result = numbers.fold(0, (a, b) => a + b);
        ```
        ```dart
        List<int> numbers = [1, 2, 3, 4];
        var result = numbers.fold(1, (a, b) => a * b);
        ```
        ```dart
        List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
        var result = words.fold('앗, ', (a, b) => a + b);
        ```
  - 어떻게 실행되나요 ?

    - `매개변수1` 에는 이전 실행에서 반환된 값 (첫번째 실행에서는 `초기값`) 이 할당되고, `매개변수2` 에는 `Collection` 타입의 데이터에 있는 다음 값이 할당돼요.

      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      int result = numbers.fold(0, (a, b) {
        print('a : $a');
        print('b : $b');
        print('a + b : ${a + b}');
        print('----------------------');
        return a + b;
      });
      print('result : $result');

      /*
      a : 0
      b : 1
      a + b : 1
      ----------------------
      a : 1
      b : 2
      a + b : 3
      ----------------------
      a : 3
      b : 3
      a + b : 6
      ----------------------
      a : 6
      b : 4
      a + b : 10
      ----------------------
      a : 10
      b : 5
      a + b : 15
      ----------------------
      result : 15
      */
      ```

      ```dart
      List<int> numbers = [1, 2, 3, 4];
      int result = numbers.fold(1, (a, b) {
        print('a : $a');
        print('b : $b');
        print('a * b : ${a * b}');
        print('----------------------');
        return a * b;
      });
      print('result : $result');

      /*
      a : 1
      b : 1
      a * b : 1
      ----------------------
      a : 1
      b : 2
      a * b : 2
      ----------------------
      a : 2
      b : 3
      a * b : 6
      ----------------------
      a : 6
      b : 4
      a * b : 24
      ----------------------
      result : 24
      */
      ```

      ```dart
      List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
      int result = words.fold('앗, ', (a, b) {
        print('a : $a');
        print('b : $b');
        print('a + b : ${a + b}');
        print('----------------------');
        return a + b;
      });
      print('result : $result');

      /*
      a : 앗,
      b : 다트는
      a + b : 앗, 다트는
      ----------------------
      a : 앗, 다트는
      b : 참
      a + b : 앗, 다트는 참
      ----------------------
      a : 앗, 다트는 참
      b : 재미있군 ?
      a + b : 앗, 다트는 참 재미있군 ?
      ----------------------
      result : 앗, 다트는 참 재미있군 ?
      */
      ```

  - 어떤 특징이 있나요 ?

    - `Collection` 타입의 데이터와 다른 타입으로도 반환이 가능해요.

      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.fold('', (a, b) => '$a' + '$b');
      print(result); // 12345
      print(result.runtimeType); // String
      ```

      ```dart
      List<String> words = ['다트는 ', '참 ', '재미있군 ?'];
      int result = words.fold(0, (a, b) {
        print('a : $a');
        print('b : $b');
        print('b length : ${b.length}');
        print('---------------');
        return a + b.length;
      });
      print('총 글자 수 : $result');

      /*
      a : 0
      b : 다트는
      b length : 4
      ---------------
      a : 4
      b : 참
      b length : 2
      ---------------
      a : 6
      b : 재미있군 ?
      b length : 6
      ---------------
      총 글자 수 : 12
      */
      ```

    - `Collection` 타입의 데이터에 요소가 없어도 오류가 발생하지 않아요.
      ```dart
      List<int> list = [];
      var result = list.fold(0, (a, b) => a + b);
      print(result); // 0
      ```

  - 자 - 이제 아까 그냥 넘어갔던 것 짚고 넘어갑시다 🧐
    - `reduce()` 랑 `fold()` 는 뭐가 다른지 이제 아시겠죠 ?
      | | `reduce()` | `fold()` |
      | ------------------------------ | --------------------------------- | --------------------------- |
      | **초기값** | `Collection` 데이터의 첫번째 요소 | 첫번째 매개변수에 넣어준 값 |
      | 빈 `Collection` 사용 가능 여부 | X | O |
      | 타입 유연성 여부 |
      (`Collection` 의 요소 타입과
      반환 타입이 달라도 되는지) | X | O |

- `any()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 요소 중
      하나라도 주어진 조건을 만족하면 `true` 를 반환해요.
  - 어떻게 생겼나요 ?
    - `any(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.any((number) {
      	return number.isEven;
      });
      print(result); // true
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.any((number) {
       return number > 10;
       });
      print(result); // false
      ```
    - `any(([매개변수]) => [조건식] );`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.any((n) => n.isEven);
      print(result); // true
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.any((number) => number > 10);
      print(result); // false
      ```
- `every()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 모든 요소가
      주어진 조건을 만족하면 `true` 를 반환해요.
  - 어떻게 생겼나요 ?
    - `every(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.every((number) {
       return number > 0;
      });
      print(result); // true
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.every((number) {
      	return number.isEven;
      });
      print(result); // false
      ```
    - `every(([매개변수]) => [조건식] );`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.any((number) => number > 0);
      print(result); // true
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5];
      var result = numbers.every((n) => n.isEven);
      print(result); // false
      ```
- `takeWhile()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 요소들을 주어진 조건에 넣었을 때
      참이 되는 동안은 해당 요소들을 반환하고,
      조건이 처음으로 거짓이 되는 순간부터의 요소들은 모두 무시해요.
  - 어떻게 생겼나요 ?
    - `takeWhile(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.takeWhile((number) {
       return number < 4;
      });
      print(result); // (1, 2, 3)
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.takeWhile((number) {
       return number.isOdd;
      });
      print(result); // (1)
      ```
    - `takeWhile(([매개변수]) => [조건식] );`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.takeWhile((number) => number < 4);
      print(result); // (1, 2, 3)
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.takeWhile((number) => number.isOdd);
      print(result); // (1)
      ```
- `skipWhile()`
  - 어떤 친구인가요 ?
    - `Collection` 타입의 데이터에 있는 요소들을 주어진 조건에 넣었을 때 참이 되는 동안은 해당 요소들을 건너뛰고,
      조건이 처음으로 거짓이 되는 순간부터의 요소들을 모두 반환해요.
  - 어떻게 생겼나요 ?
    - `skipWhile(([매개변수]) { return [조건식] });`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.skipWhile((number) {
       return number < 4;
      });
      print(result); // (4, 5, 6)
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.skipWhile((number) {
       return number.isOdd;
      });
      print(result); // (2, 3, 4, 5, 6)
      ```
    - `takeWhile(([매개변수]) => [조건식] );`
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.takeWhile((number) => number < 4);
      print(result); // (4, 5, 6)
      ```
      ```dart
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      var result = numbers.takeWhile((number) => number.isOdd);
      print(result); // (2, 3, 4, 5, 6)
      ```

</div>
</details>
<br/>
- 실습한 내용

<details>
<summary>고차함수 실습</summary>
<div markdown="1">

- `map()` + `where()`

  - `List` 에 있는 숫자들 각각에 2 를 곱한 후 5 보다 큰 값들을 반환하고 싶다면 ?
    ```dart
    List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var doubledNumbers = numbers.map((number) => number * 2);
    var result = doubledNumbers.where((number) => number > 5);
    print(result); // (6, 8, 10, 12, 14, 16, 18, 20)
    ```
    ⏬
    ```dart
    List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = numbers
      .map((number) => number * 2)
      .where((number) => number > 5);
    print(result); // (6, 8, 10, 12, 14, 16, 18, 20)
    ```
  - `List` 에 있는 숫자들 중 짝수들만 골라낸 후 각각을 제곱한 값들의 합을 반환하고 싶다면 ?
    ```dart
    List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var evenNumbers = numbers.where((number) => number.isEven);
    var squaredNumbers = evenNumbers.map((number) => number * number);
    var sumOfSquares = squaredNumbers.reduce((a, b) => a + b);
    print(sumOfSquares); // 220
    ```
    ⏬
    ```dart
    List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sumOfSquares = numbers
    	.where((number) => number.isEven)
      .map((number) => number * number)
      .reduce((a, b) => a + b);
    print(sumOfSquares); // 220
    ```
  - `List` 에 있는 문자열들 중 글자가 5개보다 많은 문자열들만 골라낸 후
    모든 글자를 대문자로 바꿔서 반환하고 싶다면 ?
    `dart
List<String> words = ['apple', 'orange', 'watermelon', 'pineapple'];
var longerThanFiveWords = words.where((word) => word.length > 5);
var result = longerThanFiveWords.map((word) => word.toUpperCase());
print(result); // (ORANGE, WATERMELON, PINEAPPLE)
`

                                                                                                                                                                                                                                            ⏬

                                                                                                                                                                                                                                            ```dart
                                                                                                                                                                                                                                            List<String> words = ['apple', 'orange', 'watermelon', 'pineapple'];
                                                                                                                                                                                                                                            var upperCasedWords = words
                                                                                                                                                                                                                                                .where((word) => word.length > 5)
                                                                                                                                                                                                                                                .map((word) => word.toUpperCase());
                                                                                                                                                                                                                                            print(upperCasedWords); // (ORANGE, WATERMELON, PINEAPPLE)
                                                                                                                                                                                                                                            ```

- `where()` + `reduce()`

  - `List` 에 있는 숫자들 중 짝수들만 골라낸 후 그 숫자들을 모두 더한 값을 반환하고 싶다면 ?
    ```dart
    List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var evenNumbers = numbers.where((number) => number.isEven);
    var result = evenNumbers.reduce((a, b) => a + b);
    print(result); // 30
    ```
    ⏬
    ```dart
    List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = numbers
      .where((number) => number % 2 == 0)
      .reduce((a, b) => a + b);
    print(result); // 30
    ```
  - `List` 에 있는 숫자들 중 5 보다 작은 숫자들만 골라낸 후
    그 숫자들을 모두 곱한 값을 반환하고 싶다면 ?
    `dart
List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var smallerThanFive = numbers.where((number) => number < 5);
var result = smallerThanFive.reduce((a, b) => a * b);
print(result); // 24
`

                                                                                                                                                                                                                                            ⏬

                                                                                                                                                                                                                                            ```dart
                                                                                                                                                                                                                                            List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                                                                                                                                                                                                                                            var result = numbers
                                                                                                                                                                                                                                              .where((number) => number < 5)
                                                                                                                                                                                                                                              .reduce((a, b) => a * b);
                                                                                                                                                                                                                                            print(result); // 24
                                                                                                                                                                                                                                            ```

- `where()` + `map()` + `fold()`

  - `List` 에 있는 숫자들 중 양수들만 골라낸 후
    그 숫자들 각각에 10 을 더한 숫자들을 모두 더한 값을 반환하고 싶은 경우
    `dart
List<int> numbers = [-10, 20, -30, 40, 50];
var positiveNumbers = numbers..where((number) => number > 0);
var plusTenNumbers = positiveNumbers.map((number) => number + 10);
var result = plusTenNumbers.fold(0, (a, b) => a + b);
print(result); // 140
`

                                                                                                                                                                                                                                            ⏬

                                                                                                                                                                                                                                            ```dart
                                                                                                                                                                                                                                            List<int> numbers = [-10, 20, -30, 40, 50];
                                                                                                                                                                                                                                            var result = numbers
                                                                                                                                                                                                                                              .where((number) => number > 0)
                                                                                                                                                                                                                                              .map((number) => number + 10)
                                                                                                                                                                                                                                              .fold(0, (a, b) => a + b);
                                                                                                                                                                                                                                            print(result); // 140
                                                                                                                                                                                                                                            ```

</div>
</details>

## 🚨 발생한 문제/에러

없었음.

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
List<int> numbers = [1,2,3,4,5];
int result = numbers.fold(0, (a,b){
	return a + b;
}
```

## 📚 내일 학습할 내용

- 예외 처리
- 라이브러리 이용
- 비동기 프로그래밍

## 💭 오늘의 회고

### 잘한 점 👍

- 고차 함수 부분에서 빡집중함

### 개선할 점 🔨

- 하루 계획과 목표를 구체적으로 세우고 시작하면 좋을 것 같음

### 배운 점 💡

- `map()` 등 고차 함수 꿀 기능인듯.

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
