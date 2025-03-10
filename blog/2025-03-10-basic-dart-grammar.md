---
slug: basic-dart-grammar
title: 다트 기초 문법 익히기
authors: [junseok]
tags: [journal, dart]
date: 2025-03-10T20:00
---

# 2025-03-10-basic-dart-grammar

# 📚 오늘의 학습 내용

> 오늘은 `dart`에 대한 기초 문법을 공부했다. 기본적으로 익숙한 내용들이 있었지만 `javascript` 에는 없는 `?` `null handling` 이런 개념들에게 대해서 확실히 정리할 수 있었다. 그리고 컴파일러 개념 등에 대해서도 확실히 알게 되었다.

<!-- truncate -->

## ✍️ 주요 학습 내용

- ### 배운 내용
  - `dart` 언어의 특징
  - 타입
  - 변수
  - 연산자
  - 조건문
- ### 새로 알게된 개념

    <details>
    <summary>컴파일러</summary>
    <div markdown="1">
    > 프로그래밍 언어에는 컴퓨터에게 친숙한 `저급 프로그래밍 언어` 가 있고 사람에게 친숙한 `고급 프로그래밍 언어` 가 있는데 이것을 중간에서 통역사 역할을 하는 것이 컴파일러였다.
        - JIT (Just-In-Time) 컴파일
          - 프로그램 실행 중(런타임)에 코드의 일부 또는 전부를 컴파일하는 기술
          - 코드가 실행이 될 때 바로 컴파일을 하는 것 같음
          - 장점
            - 바로 컴파일하기 때문에 실행 결과를 실시간으로 확인 가능
          - 단점
            - 실행 중에 코드를 컴파일하니 상대적으로 느림
        - AOT(Ahead-Of-Time) 컴파일
          - 프로그램 실행 전에 미리 컴파일하는 기술
          - 대부분의 전통적인 컴파일러가 사용하는 방식
          - 장점
            - 한 번 컴파일 되고 나면 실행 속도가 빠름
          - 단점
            - 실시간으로 컴파일하는 것이 아니어서 결과를 바로 확인할 수 없음
        - `Dart` 는 2가지 컴파일러를 사용해 `AOT` 로 성능을 높이고 `JIT` 로 실시간 확인하며 효율을 높일 수 있음
      - `Null handling`
        - 컴퓨터는 값이 있는지 없는지 알려주지 않으면 모르기 때문에 값이 없다는 것을 알려주기 위해서 `null` 을 사용
        - 기본적으로는 `null` 을 허용하지 않는 `nonNullable` 임
        - `?` 을 사용하면 **`null` 을 허용**
        - 특징
          - `null` 을 허용하는 변수는 초기값이 설정되지 않으면 기본적으로 `null` 을 가짐
          - `null` 을 허용하는 변수를 사용할 때는 항상 주의해야 하고 최대한 덜 쓰려고 노력해야 해요
          ```dart
          int nonNullable;
          print(nonNullable)
          // error
          ```
          - `null` 을 오류 없이 사용하고 싶으면 `?` 를 사용하면 됌
            - 어떤 변수가 `null` 이면 `?.` 을 표함한 전체가 `null` 이 됨
            ```dart
            int? a;
            print(a?.isOdd());
            // null
            // print(a.isOdd()); -> 오류가 나옴
            // null 이 홀수인지 파악이 안되므로.
            ```
    </div> 
  </details>
  <details>
      <summary>SDK란?</summary>
      <div markdown="1">
        - Software development kit 의 줄임말
            - 특정 플랫폼에서 프로그램을 만들고 테스트하고 배포하는 과정에서 필요한 도구를 제공하는 패키지
            - 구성요소
            1. 컴파일러
            2. 라이브러리
                1. 프로그래밍할 때 자주 사용하는 코드를 미리 정의해 둔 코드의 집합
                2. 개발자가 매번 코드를 장황하게 쓰지 않고도 기능 구현 가능
                3. `core` `async` `math` `html` 등의 라이브러리 있음
            3. 디버깅 및 테스트 도구
            4. 문서 및 샘플 코드
            5. 패키지 관리자
                1. `외부 라이브러리` 나 `패키지`를 설치하고 관리할 수 있도록 도와주는 도구
                2. 외부 라이브러리(Third-party Library)
                3. 외부 라이브러리를 쓸 수 있도록 관리를 해 줌
            - Dart SDK에는 3가지 버전이 있음
            - stable
                - 3개월에 한번씩 업데이트되는 안정적인 배포 버전
                - 형태 : x.y.z
                - 1.24.3
            - beta
                - 1개월에 한번씩 업데이트되는 배포 버전
                - 새로운 기능을 stable 에 넣기 전에 미리 테스트해 보는 용도이기 때문에 안정적이지 않음
                - 형태 : x.y.z-a.b.beta
            - dev
                - 2주일에 한번씩 업데이트되는 배포 버전
                - 형태 : x.y.z-a.b.dev
      </div>
  </details>
  <details>
      <summary>타입</summary>
      <div markdown="1">
        - 상수의 개념
            - `final [타입] [변수 이름] = [값];`
            - `const [타입] [변수 이름] = [값];`
                - 타입은 생략이 가능(타입추론 가능)

            ```dart
            final int time = 10;
            final DateTime secondCurrentTime = DateTime.now()

            const [변수 이름] = [값];
            ```

            - 차이점
                - 초기화 시점
                - `final`
                    - 프로그램 실행(런타임) 시점에 초기화됨
                - `const`
                    - 컴파일 시점
                    - 컴파일 타임 상수라고 부르기도 함
                - 용도
                - `final`
                    - 프로그램 실행 중에 값이 결정되는 경우
                    - ex)현재 시간
                - `const`
                    - 프로그램 실행 전이든 실행 후든 상관없이 항상 값이 고정인 경우
                    - ex) 원주율

            - `late`

            - `late` 도 나에게 익숙치 않은 개념이었다.
            - 선언 후에 초기화되는 `NonNullable` 한 변수
            - 변수가 사용되는 시점에 초기화 (지연 초기화) 되는 변수
                - 사용이 되지 않으면 초기화되지 않음!
            - 타입 생략 불가능!
            - 언제 사용하나요?

                - 변수를 선언할 당시에는 넣어줄 값을 아직 특정하기 어려운 경우
                - 초기화 비용이 높은 변수가 지금 당장 필요하지는 않은 경우

                ```dart
                int getTemperature(int temperature){
                    return temparature;
                }

                void main(){
                    late int temparature = getTemperature(35);
                    // print (temperature);
                }

                -> 실행이 되지 않음
                ```

            - code

                ```dart
                late String description;

                void main() {
                    description = '설명입니다.';
                    print(description);
                }
                ```

            - 숫자형
            - `int`
                - 정수 유형(소수점 x)
            - `double`
                - 소수 유형 (소수점 o)
            - `num`
                - 정수, 소수 등의 모든 숫자 유형
                - `int` 와 `double` 의 상위 클래스
                - `Object` 의 하위 클래스
            - 문자형

            - `String`

                - String name = ‘문자’, “문자” 가능
                - ‘’, “” 둘 다 사용 가능
                - 표현식
                - 식별자는 `$식별자` 형태로 표현식은 `${표현식}` 형태로 만들면 문자열에 넣을 수 있음

                ```dart
                print('Hello, my name is $name.');
                print('Hello, my name is ${name.toUpperCase()}.');

                String s1 = '''
                여러 줄 만들 수 있음
                ''';

                String s2 =
                ```

                - functions
                - `toUpperCase()` `toLowerCase()`
      </div>

  </details>
  <details>
      <summary>연산자</summary>
      <div markdown="1">
        - `~/`
            - 결과값의 정수 부분만 출력
        - 타입 체크 연산자

            - `as`

            - 타입을 변환할 때 사용
            - 형변환 (Type Casting)

            ```dart
            int a = 2;
            print(a as double);

            String b = '2';
            print(b as double); //TypeError 발생
            ```

            확실하게 형변환이 가능할 때만 사용가능
            형변환이 불가능한 경우에 `as` 를 사용하면 `TypeError` 가 발생

            - `is`

            - 특정 타입을 가지고 있는지 판별할 때 사용

            ```dart
            int? a = 2;
            print(a is int); //true

            int? b = null;
            print(b is int); //false
            ```

            - `is!`
            - 특정 타입을 가지고 있지 않은지 판별할 때

        - `??=`

            - 기준으로 왼쪽에 있는 것이 `null` 일 때 오른쪽 값을 대입

            ```dart
            int? a = null
            a ??= 2;
            print(a); // 2

            int b = 3;
            b ??= 2;
            print(b); // 3
            ```

        - 논리 연산자
        - 참 또는 거짓으로 판별할 수 있는 표현식을 반전하거나 결합할 때 사용
        - `!`
            ```dart
            bool a = true;
            print(!a); // false;
            ```
        - `||`
            - `||` 기준으로 왼쪽 판별식과 오른쪽 판별식 중 하나라도 참이면 참을 반환하고 모두 거짓이면 거짓을 반환
            - 또는 `or` 과 같은 의미
        - `&&`
            - `&&` 기준으로 왼쪽 판별식과 오른쪽 판별식 양쪽이 다 참이어야 참을 반환
            - `and` 와 같은 의미
        - 조건 표현식

        - `조건문 ? 표현식1 : 표현식2`
            - `조건문`이 참이면 `표현식1` 을, 거짓이면 `표현식2` 를 실행
            ```dart
            int number = 7;
            String sentence = (number > 0) ? ('0보다 큽니다.') : ('0보다 작거나 같습니다.');
            print(sentence);
            ```
        - `표현식1 ?? 표현식2`

            - 표현식1 이 null 값을 갖지 않으면 표현식1 을
            - 표현식1 이 null 값을 가지면 표현식2 를 따라요.

            ```dart
            int? a = null;
            print(a ?? 2); // 2

            int b = 3;
            print(b ?? 2); //3
            ```
      </div>

  </details>

- 실습한 내용
  - 없음

## 🚨 발생한 문제/에러

- 없었음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
int number = 7;
String sentence = (number > 0) ? ('0보다 큽니다') : ('0보다 작습니다.');

int? a = null;
print(a ?? 2); // 2
```

## 📚 내일 학습할 내용

- dart 심화 문법
- 종합반 강의 복습

## 💭 오늘의 회고

### 잘한 점 👍

- 강의에 몰입해서 공부를 할 수 있었던 것 같다.

### 개선할 점 🔨

- 아침 시간에 조금 더 집중을 해서 하면 좋을 것 같음
- 수업 시작 전에 운동을 하자!

### 배운 점 💡

- dart 기초 문법
- 조건 표현식
- `late`
- `null handling`

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
