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

- 클래스의 개념에 대해서 배웠다. 속성에서 클래스 변수, 지역 변수, 정적 변수가 있었는데 정적 변수에 대한 개념이 없었는데 정적 변수에 대해서 확실히 배울 수 있었다.
- 지금까지 메서드와 함수를 같은 개념으로 생각해 왔는데 그렇지 않다는 것을 알게 되었다. 메서드는 클레스에 종속되어 있는 것이고 함수는 클래스와 관계없이 있는 것을 함수라고 하는데 그 차이점을 알게 되었다.
- 또한 정적 메서드도 클래스에 종속되어 있어서 클래스를 통해서 호출가능한 메서드라는 것을 배울 수 있었다.
- 클래스 변수인지 객체 변수인지 구분하는 게 중요하다는 것을 알 수 있었음.
- 클래스 메서드는 객체 변수를 사용할 수 없음!
- 제네릭 클래스를 활용해서 클래스명 뒤에 `<T>` 를 사용해서 제네릭 클래스임을 명시해 주고 타입에 `T` 를 사용해서 유동적인 타입을 줄 수 있음.
- **부모 클래스** 는 **자식 클래스** 에게 자신의 모든 **속성** 과 **메서드** 를 **상속** 해요.
- `final` 을 사용해서 하나의 **클래스** 로부터 **자식 클래스** 를 만들 수 없도록 할 수 있음
  - `final class [class 명]{}`

## ✍️ 주요 학습 내용

### 배운 내용

- 클래스
- 클래스의 정적 변수
- 메서드와 함수
- 제네릭 클래스

### 새로 알게된 개념

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

   2. `this` 를 통해 접근 가능(`this` 객체를 의미)
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

<details>
<summary>메서드</summary>
<div markdown="1">

- **메서드** (Method)
  - 어떤 친구인가요 ?
    - **객체** 의 **동작** 을 정의하는 함수
    - **속성** 을 변경하거나 **객체** 를 가지고 특정 작업을 수행해요.
    - 여기서 잠깐 ! 🧐 **함수** (Function) 랑 **메서드** (Method) 는 서로 같은 개념일까요 ?
      - 엄밀히 말하면, 완전히 같지는 않아요 !
        - 두 친구 모두 동작을 정의한다는 점에서는 같지만,
        - **메서드** 는 **클래스** 에 의존하고, **함수** 는 **클래스** 에 의존하지 않는다는 차이가 있어요.
          ```dart
          void function() {
            print('저는 함수입니다 !');
          }

          class Class {
          	void method() {
          		print('저는 메서드입니다 !');
          	}
          }

          void main() {
            function(); // 저는 함수입니다 !

            Class object = Class();
            object.method(); // 저는 메서드입니다 !
          }
          ```
  - 종류에는 무엇이 있나요 ?
    - **인스턴스 메서드** (Instance Method)
      - 어떤 친구인가요 ?
        - **객체** 에 속해 있는 **메서드**
          ```dart
          class Person {
            String name = '강미래';
          	int age = 25;

            void introduce() {
              print('안녕 ? 나는 $age살 $name !');
            }
          }
          ```
      - 어떤 특징이 있나요 ?
        - `this` 를 통해 접근할 수 있어요.
          ```dart
          class Person {
            String name = '강미래';
            int age = 25;

            void printName() {
              print(name);
            }

            void printNameAndAge() {
              this.printName();
              print(age);
            }
          }
          ```
        - **클래스** 의 모든 곳에서 접근할 수 있어요.
          ```dart
          class Person {
            String name = '강미래';
            int age = 25;

            void printName() {
              print(name);
            }

            void printNameAgain() {
              printName();
            }
          }
          ```
    - **정적 메서드** (Static Method)
      - **클래스 메서드** 라고도 불러요.
      - 어떤 친구인가요 ?
        - **객체** 에 종속되지 않고, **클래스** 자체에 속하는 **메서드**
          ```dart
          class Circle {
          	static double pi = 3.14159;

            static void printPi() {
          	  print('원주율은 $pi !');
            }
          }
          ```
      - 어떤 특징이 있나요 ?
        - **클래스** 이름을 통해 호출해요.
          - 그래서 **객체** 를 생성하지 않고도 **메서드** 를 호출할 수 있답니다 👍🏼
            ```dart
            class Circle {
            	static double pi = 3.14159;
            	double radius = 0;

              static void printPi() {
            	  print(pi);
              }

              void printRadius() {
                print(radius);
              }
            }

            void main() {
            	Circle.printPi(); // 3.14159
            	Circle.printRadius(); // 오류 발생
            }
            ```
        - **객체** 를 통해 호출할 수 없어요.
          ```dart
          class Circle {
          	static double pi = 3.14159;
          	double radius = 0;

            static void printPi() {
          	  print(pi);
            }

            void printRadius() {
              print(radius);
            }
          }

          void main() {
          	Circle circle = Circle();
          	circle.radius = 5;
          	circle.printRadius(); // 5
          	circle.printPi(); // 오류 발생
          }
          ```
        - `this` 를 통해 호출할 수 없어요.
          ```dart
          class Circle {
          	static double pi = 3.14159;
          	double radius = 0;

            static void printPi() {
          	  print(pi);
            }

            void printPiAgain() {
          	  this.printPi(); // 오류 발생
            }
          }
          ```
        - 코드 블록에서 **인스턴스 변수** 를 사용할 수 없어요.
          ```dart
          class Circle {
          	double pi = 3.14159;
          	double radius = 0;

            static void printPi() {
          	  print(pi); // 오류 발생
            }
          }
          ```
          - 그럼 **인스턴스 메서드** 의 코드 블록에서 **정적 변수** 를 쓸 수 있을까요 ?
            - Yes !! 완 ~ 전 ~ 가능 🎶
              ```dart
              class Circle {
              	static double pi = 3.14159;
              	double radius = 0;

                void printArea() {
                  print(pi * radius * radius);
                }
              }
              ```
        - 객체마다 개별적으로 동작하지 않고, 모두 동일하게 동작한다.
- **속성** 과 **메서드** 는 **클래스** 안에 있는 요소라서 **클래스** 의 **멤버** (Member) 라고 부르기도 해요 !

</div>
</details>

<details>
<summary>생성자</summary>
<div markdown="1">

- **생성자** (Constructor) 라는 친구인데요 !
  - 어떤 친구인가요 ?
    - **객체** 를 생성하고, 초기화하기 위해 사용하는 특수한 **메서드**
  - 종류에는 어떤 것이 있나요 ?
    - **기본 생성자** (Default Constructor)
      - 어떤 친구인가요 ?
        - **매개변수** 를 갖지 않는 생성자
      - 어떻게 생겼나요 ?
        - `[클래스 이름]();`
          ```dart
          class Car {
            Car();
          }
          ```
      - 어떤 특징이 있나요 ?
        - 자동으로 정의되기 때문에 **클래스** 에 따로 명시하지 않아도 돼요.
          ```dart
          class Car {

          }

          void main() {
          	Car car = Car();
          }
          ```
          ```dart
          class Car {
            Car();
          }

          void main() {
          	Car car = Car();
          }
          ```
          ```dart
          class Car {

          }

          void main() {
          	Car car = new Car();
          }
          ```
        - **인스턴스 변수** 들이 모두 초기화되어 있는 상태여야 해요.
          ```dart
          class Car {
          	String name = '';
          	List<String> models = [];

            Car();
          }
          ```
          ```dart
          class Car {
          	String name; // Error: Field 'name' should be initialized because its type 'String' doesn't allow null.
          	List<String> models; // Error: Field 'models' should be initialized because its type 'List<String>' doesn't allow null.

            Car();
          }
          ```
    - **매개변수 생성자** (Parameterized Constructor)
      - 어떤 친구인가요 ?
        - **매개변수** 를 갖는 생성자
        - **매개변수** 를 통해 외부에서 **인스턴스 변수** 들의 초기값을 설정해요.
      - 어떻게 생겼나요 ?
        - `[클래스 이름](this.변수);`
          ```dart
          class Car {
          	String name;
          	List<String> models;

            Car(this.name, this.models);
          }
          ```
        - `[클래스 이름]([타입] [매개변수 이름]) : this.변수;`
          ```dart
          class Car {
            String name;
            List<String> models;

            Car(String name, List<String> models)
                : this.name = name,
                  this.models = models;
          }
          ```
        - `[클래스 이름]([타입] [매개변수 이름]) { this.변수; }`
          ```dart
          class Car {
            String name = '';
            List<String> models = [];

            Car(String name, List<String> models) {
              this.name = name;
              this.models = models;
            }
          }
          ```
      - 어떤 특징이 있나요 ?
        - **객체** 생성할 때 **매개변수** 를 넣지 않으면 오류가 나요 🚨
          ```dart
          class Car {
          	String name;
          	List<String> models;

            Car(this.name, this.models);
          }

          void main() {
          	Car car = Car(); // Error: Too few positional arguments: 2 required, 0 given.
          }
          ```
    - **네임드 생성자** (Named Constructor)
      - 어떤 친구인가요 ?
        - **클래스 메서드** 와 같은 형식으로 호출하는 생성자
      - 어떻게 생겼나요 ?
        - `[클래스 이름].[메서드 이름]([타입] [매개변수 이름]) : this.변수;`
          ```dart
          class Car {
            String name;
            List<String> models;

            Car.fromList(List values)
                : this.name = values[0],
                  this.models = values[1];
          }
          ```
      - 어떻게 사용하나요 ?
        ```dart
        class Car {
          String name;
          List<String> models;

          Car.fromList(List values)
              : this.name = values[0],
                this.models = values[1];

          void speakName() {
            print('저희는 $name 입니다 !');
          }

          void speakModels() {
            print('$models 모델을 가지고 있습니다 !');
          }
        }

        void main() {
          Car car = Car.fromList([
            'BMW',
            ['320i', '340i', 'M3']
          ]);
          car.speakName(); // 저희는 BMW 입니다 !
          car.speakModels(); // [320i, 340i, M3] 모델을 가지고 있습니다 !
        }
        ```
      - 어떤 특징이 있나요 ?
        - **클래스** 에 있는 **변수** 와 **타입** 이 맞지 않는 값을 넣으면 오류가 나요 🚨
          ```dart
          class Car {
            String name;
            List<String> models;

            Car.fromList(List values)
                : this.name = values[0],
                  this.models = values[1];
          }

          void main() {
            Car car = Car.fromList([
              'BMW',
              [1, 2, 3]
            ]); // TypeError: Instance of 'JSArray<int>': type 'List<int>' is not a subtype of type 'List<String>'
          }
          ```
  - 어떤 특징이 있나요 ?
    - **클래스** 와 이름이 같아요.
    - **반환값** 이 없기 때문에 `void` 타입이에요.
    - **클래스** 를 통해 **객체** 가 생성될 때 자동으로 호출돼요.
    - 생성할 수 있는 **객체** 의 수에는 제한이 없어요.
      ```dart
      class Person {
        String name;
      	int age;

        Person(this.name, this.age);
      }

      void main() {
        Person paul = Person('Paul', 25);
        Person mark = Person('Mark', 30);
      }
      ```
    - 생성한 **객체** 들은 서로 같지 않은 독립된 개체예요.
      ```dart
      class Person {
        String name;
      	int age;

        Person(this.name, this.age);
      }

      void main() {
      	Person paul1 = Person('Paul', 25);
      	Person paul2 = Person('Paul', 25);
      	print(paul1 == paul2); // false
      }
      ```

</div>
</details>

<details>
<summary>제네릭 클래스</summary>
<div markdown="1">

- **제네릭 클래스** (Generic Class) ?
  - 어떻게 생겼나요 ?
    - `[클래스 이름]<타입 파라미터>`
      ```dart
      class Box<T> {
        T value;

        Box(this.value);

        T getValue() {
          return value;
        }
      }
      ```
  - 왜 사용하나요 ?
    - **제네릭 함수** 와 마찬가지로
      특정 타입에 의존하지 않고, 여러 타입에 대해 동일한 코드를 적용할 수 있어서
      재사용성 높은 코드를 짤 수 있겠죠 👍🏼
          ```dart
          class IntBox {
          	int value;

          	IntBox(this.value);

          	int getValue() {
          		return value;
          	}
          }

          class StringBox {
          	String value;

          	StringBox(this.value);

          	String getValue() {
          		return value;
          	}
          }

          void main() {
            var intBox = IntBox(10);
            print(intBox.getValue()); // 10

            var stringBox = StringBox('Hello');
            print(stringBox.getValue()); // Hello
          }
          ```

          ```dart
          class Box<T> {
            T value;

            Box(this.value);

            T getValue() {
              return value;
            }
          }

          void main() {
            var intBox = Box<int>(10);
            print(intBox.getValue()); // 10

            var stringBox = Box<String>('Hello');
            print(stringBox.getValue()); // Hello
          }
          ```

</div>
</details>

<details>
<summary>상속(Inheritance)</summary>
<div markdown="1">

## 상속 (Inheritance)

- 어떤 친구인가요 ?
  - 기존 클래스의 기능을 확장하여 새로운 클래스를 만드는 것
  - 하나의 **클래스** 가 다른 **클래스** 의 **속성** 과 **메서드** 를 물려받는 것
    - 물려주는 **클래스** 는 **부모 클래스** (Parent Class, Superclass),
      물려받는 **클래스** 는 **자식 클래스** (Child Class, Subclass) 라고도 불러요.
- 어떻게 생겼나요 ?
  - `class [자식 클래스 이름] extends [부모 클래스 이름] { … }`
    ```dart
    class Person {
      void eat() {
        print('냠냠 !');
      }
    }

    class Student extends Person {
      void study() {
        print('열공 !');
      }
    }
    ```
- 어떤 특징이 있나요 ?
  - **부모 클래스** 는 **자식 클래스** 에게 자신의 모든 **속성** 과 **메서드** 를 **상속** 해요.
    ```dart
    class Person {
    	String name = '';

      void eat() {
        print('냠냠 !');
      }
    }

    class Student extends Person {
      void study() {
        print('열공 !');
      }
    }

    void main() {
      Student student = Student();
      student.name = '강미래';
      student.eat(); // 냠냠 !
      student.study(); // 열공 !
    }
    ```
  - **부모 클래스** 는 **자식 클래스** 에 있는 멤버 (**속성**, **메서드**) 를 사용할 수 없어요.
    ```dart
    class Person {
      void eat() {
        print('냠냠 !');
      }
    }

    class Student extends Person {
      void study() {
        print('열공 !');
      }
    }

    void main() {
    	Person person = Person();
    	person.study(); // Error: The method 'study' isn't defined for the class 'Person'.
    }
    ```
  - `super` 를 통해 **자식 클래스** 가 **부모 클래스** 의 **속성** 과 **메서드** 를 사용할 수 있어요.
    ```dart
    class Person {
      String name = '강미래';

      void eat() {
        print('냠냠 !');
      }
    }

    class Student extends Person {
      void eatAndIntroduce() {
        super.eat();
        print('맛있게 먹는 ${super.name} ㅋㅋ');
      }
    }

    void main() {
      Student student = Student();
      student.eatAndIntroduce();
    }

    /*
    냠냠 !
    맛있게 먹는 강미래 ㅋㅋ
    */
    ```
  - **자식 클래스** 는 **상속** 받은 **속성** 과 **메서드** 를 **재정의** (Overriding) 하거나 기능을 확장할 수 있어요.
    - **재정의** (Overriding) ?
      - 어떤 친구인가요 ?
        - **자식 클래스** 가 **부모 클래스** 로부터 **상속** 받은 **속성** 과 **메서드** 를
          그대로 사용하지 않고, 덮어 씌우는 것을 의미해요.
      - 언제 사용하나요 ?
        - **부모 클래스** 에 정의되어 있는 **속성** 이나 **메서드** 가 마음에 안 들어서
          새로 정의하고 싶을 때 사용해요 🤣
      - 어떻게 생겼나요 ?
        - `@override [변수 이름] = [값];`
          ```dart
          class Person {
            String name = '강미래';

            void eat() {
              print('냠냠 !');
            }
          }

          class Student extends Person {
            @override
            String name = '여러분';

            void study() {
              print('열공하는 $name !');
            }
          }

          void main() {
            Student student = Student();
            student.study(); // 열공하는 여러분 !
          }
          ```
        - `@override [반환 타입] [함수 이름]() { … }`
          ```dart
          class Person {
            void eat() {
              print('냠냠 !');
            }
          }

          class Student extends Person {
            @override
            void eat() {
              print('쩝쩝 !');
            }
          }

          void main() {
            Student student = Student();
            student.eat(); // 쩝쩝 !
          }
          ```
    - **재정의** 는 알겠는데요 ~ 기능 확장은 어떻게 해요 ? 🤔
      ```dart
      class Person {
        void eat() {
          print('냠냠 !');
        }
      }

      class Student extends Person {
        @override
        void eat() {
          super.eat();
          print('쩝쩝 !');
        }
      }

      void main() {
        Student student = Student();
        student.eat();
      }

      /*
      냠냠 !
      쩝쩝 !
      */
      ```
- 왜 사용하나요 ?
  - 공통적인 **속성** 과 **메서드** 를 **부모 클래스** 에 정의하고,
    공통되지 않는 요소들만 따로 **자식 클래스** 에 정의해서
    중복된 코드를 줄이고, 코드의 재사용성을 높일 수 있어요 👍🏼
- 근데요 .. 어떤 **클래스** 는 **상속** 당하지 (?) 않게 하고 싶을 수도 있잖아요 😅
  - 그 경우에는 `final` 을 사용하면 돼요 !
  - `final` ?
    - 어떤 친구인가요 ?
      - 하나의 **클래스** 로부터 **자식 클래스** 를 만들 수 없도록 하는 것
      - **상속** 받을 수 없도록 만드는 키워드라고 생각하면 돼요 🙂
    - 어떻게 생겼나요 ?
      - `final class [클래스 이름] { … }`
        ```dart
        final class Person {
          void eat() {
            print('냠냠 !');
          }
        }

        class Student extends Person {
        	// Error: The type 'Student' must be 'base', 'final' or 'sealed' because the supertype 'Person' is 'final'.
        }
        ```

</div>
</details>

### 실습한 내용

- 쇼핑몰 콘솔 프로그램 제작
  - 다음 글에 포스팅할 예정🙂

## 🚨 발생한 문제/에러

- 없음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
final class NoChildClass{}
```

## 📚 내일 학습할 내용

- 예외처리
- 라이브러리

## 💭 오늘의 회고

### 잘한 점 👍

- 강의에 집중할 수 있었음

### 개선할 점 🔨

- 시간관리 조금 더 디테일하게 하면 좋을듯

### 배운 점 💡

- 클래스 개념
- 메서드와 함수의 차이
- 상속
- 객체지향 프로그래밍

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
