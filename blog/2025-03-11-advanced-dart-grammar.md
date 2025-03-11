---
slug: advanced-dart-grammar
title: 다트 심화 문법 익히기
authors: [junseok]
tags: [journal, dart]
date: 2025-03-11T20:00
---

# 2025-03-11-advanced-dart-grammar

# 📚 오늘의 학습 내용

## 👨‍💻 오늘의 코딩!

### 문제

> 정수 배열 `nums`와 정수 `target`이 주어질 때, 두 수를 더해서 `target`이 되는 배열 내 두 숫자의 인덱스를 반환하세요.
>
> 같은 요소를 두 번 사용할 수 없습니다. 답은 반드시 하나만 존재한다고 가정합니다.

<!-- truncate -->

### 풀이

```dart
List<int> twoSum(List<int> nums, int target){
	// 1. 숫자와 인덱스를 저장할 해시맵 생성
	Map<int, int> map = {};

	// 2. 배열을 순회하면서 필요한 값을 맵에서 찾음
	for(int i = 0; i < nums.length ; i++{
		int complement = target - nums[i];

		// 3. 필요한 값이 맵에 존재하면 정답 반환
		if(map.containsKey(complement)){
			return [map[complement]!, i];
		}

		// 4. 현재 숫자와 인덱스를 맵에 추가
		map[nums[i]] = i;
	}


}
```

### 몰랐던 내용

- `map()` 의 개념을 몰라서 저 풀이법을 생각조차 못했다.
- for 문에서 ; 대신 , 를 사용해서 계속해서 오류만 났던…
- `!` 의 의미.
  - 위에서 !를 사용한 이유는 `Map<int, int> map = {};` 이렇게 선언이 되어 있기 때문에 반환값이 null이 들어갈 수 없는데 `nullable` 한 map[complement]가 들어갔기 때문에 그렇다.
  - !는 null 값이 허용되어 있는 값을 허용되지 않는 값에 넣으려고 하면 에러가 나기 때문에 그때 ! 를 붙여준다.
  - 하지만 null이 실제로 들어가 있으면 !를 사용해도 에러가 난다.

---

오늘은 반복문과 컬렉션, 열거형, 함수, 제너릭에 대해서 학습을 했다. 이 개념들이 나에게 있어서는 조금 명확하지 않은 부분이었기 때문에 오늘 학습을 하면서 확실히 개념을 이해할 수 있어서 좋았다.

## ✍️ 주요 학습 내용

### 배운 내용

- do - while
- for - in
- 컬렉션
- 열거형
- 함수
- 제네릭

### 새로 알게된 개념

<details>
<summary> 반복문 </summary>
<div markdown="1">
- do - while : do를 한번 실행하고 while 조건에 충족하면 다시 실행
- `for - in`
    
    ```dart
    List<String> foods = ['pizza', 'chicken'];
    for( var food in foods ){
    	print(food);
    }
    ```
    
    - 리스트를 이용해서 반복문을 사용할 때
- `continue`
    
    ```dart
    for (final fruit in fruits){
    	if(fruit == '파인애플'){
    		continue;
    	}
    	print('맛있는 $fruit');
    }
    
    ```
    
    - continue를 쓰면 반복문을 건너뛰고 처음으로 돌아감

</div>
</details>
<details>
<summary>컬렉션</summary>
<div markdown="1">

- `List`

  - `function`
    - `length` , `isEmpty`
    - `indexOf()` , `add()` , `addAll()` , `remove()` , `removeAt()` , `clear()`

- Set
  - `Set` 에 대해서는 개념이 많이 없었던 것 같다.
  - 순서 및 인덱스의 개념은 없이 요소들을 저장함
  - 중복된 값을 허용하지 않음 → 중복된 값이 있으면 하나만 남기고 다 지움
    - 중복된 값을 제거할 때 사용 가능
  - `function`
    - `length`
    - `isEmpty`
    - `add()` `addAll()`
      ```dart
      var fruits = {'사과', '파인애플'};
      var haha = {'haha'}
      haha.addAll(fruits)
      // {'haha', '사과', '파인애플'}
      ```
    - `remove()`
    - `contains()` , `containsAll()`
      - `contains()` 는 하나의 요소가 포함되어 있는지 판별할 때
      - `containsAll()` 은 여러 요소가 포함되어 있는지 판별할 때 사용
      - `containsAll()` 은 `()` 에 넣은 요소 중 하나라도 없으면 거짓으로 판별
- `Map`

  - 키와 값이 묶인 하나의 쌍으로 이루어진 형태
  - 키는 중복될 수 없지만 값은 중복될 수 있음
  - `functions`

    - `length` , `isEmpty`
    - `[변수 이름][[키 이름]]` 을 통해 값 검색 가능
    - `[변수 이름][[키 이름]]= [값]` 을 통해 값 수정 가능
    - `[변수 이름][[새로운 키 이름]]= [값]` 을 통해 값 추가 가능
    - `remove(키)` 를 통해 제거 가능
      ```dart
      Map<String, int> people = {'alice' : 25, 'bob' : 30};
      people.remove('bob);
      ```
    - `containsKey()` 특정요소가 있는지 확인 가능
    - `keys` 를 통해 모든 키들을 알 수 있음

      ```dart
      print(people.keys)
      // ('alice', 'bob')
      print(people.values)
      // (35, 37, 35)

      ```

    - `values` 모든 값들을 알 수 있음 (중복된 값도 같이 출력됨)

</div>
</details>
<details>

<summary>열거형</summary>
<div markdown="1">

- 여러 개의 상수 값을 묶는 상태
- 인덱스 개념이 있음
- `enum` 을 본 적은 많았지만 개념이 없었는데 이번에 이해할 수 있게 되었다.
- `switch` 문을 통해 열거형에 포함된 값 각각을 다룰 수 있음

  - `enum` 은 `switch` 에 최적화되어 있음

  ```dart
  enum Color {red, green}

  var myColor = Color.green;
  var result = '내가 좋아하는 색은 ';

  switch(myColor){
  	case Color.red:
  		result += '빨강';
  	case Color.green:
  		result += '초록';
  }
  print(result)
  ```

- `index` 를 통해 열거형에 포함된 값이 몇 번째에 있는지 알 수 있음
  - `Color.red.index  -> 0`
- `values`

  - 열거형에 포함된 값을 알 수 있음

  ```dart
  enum Color {red, green}

  var colors = Color.values;
  // [Color.red, Color.green]
  // type은 List<Color>
  print(colors[1]; //Color.green

  ```

- `name`
  ```dart
  print(Color.red.name); // red
  ```
- 고정된 값들의 집합을 정의할 때 사용 가능
- `Set` 이랑 뭐가 다른건지?
  - 처음 정의된 상태에서 값 추가, 제거가 가능한지
    - `Set`은 가능하지만 `enum`은 불가능
  - 중복 값을 넣었을 때 오류가 발생하는지
    - `Set`은 오류 발생 안함, `enum`은 오류 발생
  - 요소들 사이에 순서가 있는지
    - `Set` 은 순서가 없지만 `enum` 은 순서가 있음
    - `Set` 에는 index 개념이 없지만 `enum` 은 있음

</div>

</details>

<details>
<summary>제네릭</summary>
<div markdown="1">

- 형태
  - `[타입 파라미터] [함수 이름]<타입 파라미터>([매개변수]) { … }`
    ```dart
    T getFirstElement<T>(List<T> list) {
      return list[0];
    }
    ```
    - 어라 ? 이런 형태 어디서 많이 보지 않았어요 ? 🤔
      - 컬렉션 배울 때 봤던 것 같지 않나요 ?
        - `List<int>`, `List<String>`, `Set<int>`, `Set<String>` 등등 ..
        - 실제로 `List`, `Set`, `Map` 은 각각
          `List<E>`, `Set<E>`, `Map<E, E>` 형태로 정의되어 있고,
          타입 파라미터인 `E` 에 여러 타입이 올 수 있답니다 !
- 왜 사용하나요 ? 사용하면 뭐가 좋은가요 ?

  - 특정 타입에 의존하지 않고, 여러 타입에 대해 동일한 코드를 적용할 수 있어서
    재사용성 높은 코드를 짤 수 있어요 👍🏼

    ````dart
    int getFirstNumber(List<int> numbers) {
    return numbers[0];
    }

        String getFirstWord(List<String> words) {
          return words[0];
        }

        void main() {
          var numbers = [0, 1, 2, 3];
          print(getFirstNumber(numbers)); // 0

          var words = ['a', 'b', 'c'];
          print(getFirstWord(words)); // a
        }
        ```

        ```dart
        T getFirstElement<T>(List<T> list) {
          return list[0];
        }

        void main() {
          var numbers = [0, 1, 2, 3];
          print(getFirstElement(numbers)); // 0

          var words = ['a', 'b', 'c'];
          print(getFirstElement(words)); // a
        }
        ```
    ````

- 지금까지 제네릭에 대한 개념이 없으니까 제네릭은 사용할 생각이 없었는데 같은 기능을 가졌는데 데이터 타입이 바뀔 수 있는 경우에는 제네릭을 사용해서 유동적으로 형변환을 가질 수 있도록 하는 게 중요하다느 ㄴ것을 알 수 있었음

</div>

</details>

### 실습한 내용

- 없었음

## 🚨 발생한 문제/에러

- for 에서 ; 이 아닌 , 를 사용해서 멍청한 실수를 했음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
T getFirstElement<T>(List<T> list){
	return list[0];
}
```

## 📚 내일 학습할 내용

- 함수형 프로그래밍과 객체 지향 프로그래밍

## 💭 오늘의 회고

### 잘한 점 👍

- 오전에 운동을 하고 학습을 시작할 수 있었음

### 개선할 점 🔨

- 중간에 너무 졸려서 쉬는 시간이 많았음

### 배운 점 💡

- 컬렉션과 제네릭 개념에 대해 알 수 있었음
- 제네릭 개념에 대해서는 아직 헷갈리는 게 많아서 조금 더 물어봐야 될 것 같음

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
