---
slug: flutter-text-field
title: 플라워링 상품등록 페이지 만들기
authors: [junseok]
tags: [journal, flutter]
date: 2025-04-07T20:00
---

# 2025-04-07-flutter-text-field

# 📚 오늘의 학습 내용

오늘은 팀 프로젝트에서 내가 맡았던 상품등록 페이지를 제작했다. html에서는 form 태그를 통해서 간단하게 input 태그로 텍스트 입력을 받을 수 있었는데 플러터에서는 이 부분이 익숙하지 않기 때문에 검색하면서 맨땅에 헤딩을 하면서 공부해 나갔다.

## ✍️ 주요 학습 내용

### 배운 내용

- StatefulWidget과 StatelessWidget의 차이
- 플러터에서 텍스트 입력 받기

### 새로 알게된 개념

<details>
<summary>StatefulWidget과 StatelessWidget의 차이</summary>
<div markdown="1">

플러터 개발을 하면서 느낀 건 언제 `StatefulWidget` 을 써야 하고 언제`StatelessWidget` 를 써야 하는지가 애매했다. 기본적으로는 변하는 화면은 `StatefulWidget` , 변하지 않는 화면은 `StatelessWidget` 이라고 이해하고 있는데 TextField를 위젯으로 만든다면 텍스트의 값이 계속해서 변하고 바뀐 값을 보여줘야 하기 때문에 `CustomTextField` 는 StatefulWidget으로 해야 하는지 아니면 부모 위젯에서 상태값을 관리하니까 `StatelessWidget` 으로 해야 하나?? 이런 애매함이 있었다.

그래서 ChatGpt한테 질문을 했다.

## ✅ `StatelessWidget`을 쓸 때

- 화면에 한 번 그려지면 **변할 일이 없는 UI**일 때
- 예: 단순한 버튼, 텍스트, 아이콘 등

## ✅ `StatefulWidget`을 쓸 때

- **변하는 값**을 UI에 반영해야 할 때
- 예: 버튼 누르면 숫자 증가, 체크박스 토글, 애니메이션, 입력 폼 등

새롭게 알게 된 것은 사용자 입력, 애니메이션, 비동기 처리 등이 필요하면 `StatefulWidget` 이기 때문에 입력폼은 `StatefulWidget` 을 사용했다.

<aside>
❓

그렇다면 상품등록 페이지(registration_page)에서 텍스트입력(text_field)위젯을 만들어서 사용한다면 어떻게 해야 될까?

</aside>

## ✅ 핵심 개념부터 설명할게요

Flutter에서 `TextField`의 입력 값을 다루는 방법은 두 가지예요:

### 1. **부모에서 컨트롤러로 관리하는 방식** (더 흔함)

- `TextEditingController`를 **부모에서 만들고**, 하위 위젯에 넘겨줌
- 이 경우 하위 위젯은 `StatelessWidget`으로 충분함

### 2. **하위 위젯이 스스로 상태를 관리하는 방식**

- `TextEditingController`를 그 위젯 안에서 만들고 `dispose`도 직접 함
- 이 경우엔 `StatefulWidget`이 필요함

⇒ 부모에서 컨트롤러만 만들어 주고 부모에서 관리하는 게 편하다는 것을 알게 됨

<details>
<summary>코드</summary>
<div markdown="1">

🔸 방법 1: 부모(StatefulWidget)에서 컨트롤러 관리 → 자식은 StatelessWidget

```dart
class ProductFormPage extends StatefulWidget {
  @override
  _ProductFormPageState createState() => _ProductFormPageState();
}

class _ProductFormPageState extends State<ProductFormPage> {
  final _titleController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          CustomTextField(
            label: '상품명',
            controller: _titleController,
          ),
        ],
      ),
    );
  }
}

class CustomTextField extends StatelessWidget {
  final String label;
  final TextEditingController controller;

  const CustomTextField({
    required this.label,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      decoration: InputDecoration(labelText: label),
    );
  }
}

```

🔸 방법 2: TextField 위젯 자체가 상태를 관리 → StatefulWidget

```dart
class CustomTextField extends StatefulWidget {
  final String label;
  const CustomTextField({required this.label});

  @override
  _CustomTextFieldState createState() => _CustomTextFieldState();
}

class _CustomTextFieldState extends State<CustomTextField> {
  late TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: _controller,
      decoration: InputDecoration(labelText: widget.label),
    );
  }
}

```

</div>
</details>

</div>
</details>

<details>
<summary>플러터에서 텍스트 입력 받기</summary>
<div markdown="1">

1. 컨트롤러 객체 생성하기 (TextEditingController)

→ 입력값의 상태를 계속 관리를 해줌

1. `TextFormField` 에 컨트롤러 연결해 주기

```dart
TextEditingController _controller = TextEditingController();

TextFormField(
	controller : _controller,
	keyboardType : TextInputType.text,
	maxLines : 7,
	maxLength : 500,
	decoration : InputDecoration(labelText : widget.label),
)
```

1. KeyboardType 정하기

- keyboardType은 텍스트필드를 입력할 때 어떤 키보드가 올라올지(숫자, 한자)를 정해주는 것.
- `keyboardType.text`

## 🧠 `keyboardType`: 어떤 키보드가 올라올지 결정하는 속성

> 사용자가 입력할 때, 어떤 키보드 레이아웃이 올라올지 정해줘요.

예를 들어:

```dart
dart
CopyEdit
TextField(
  keyboardType: TextInputType.number,
)

```

이렇게 하면 👉 **숫자 키패드**가 올라와요!

### 📦 대표적인 `keyboardType` 종류

| 값                           | 설명                                             |
| ---------------------------- | ------------------------------------------------ |
| `TextInputType.text`         | 기본 키보드 (텍스트 입력용)                      |
| `TextInputType.number`       | 숫자 키보드                                      |
| `TextInputType.emailAddress` | 이메일 입력에 최적화된 키보드                    |
| `TextInputType.phone`        | 전화번호 키보드                                  |
| `TextInputType.multiline`    | 여러 줄 입력 (이때 `maxLines`도 1보다 커야 해요) |
| `TextInputType.url`          | URL 입력용 키보드                                |

1. maxLines, maxLength

## 🧠 `maxLines`: 몇 줄까지 입력받을 수 있게 할지

> 입력창이 한 줄만 보일지, 여러 줄이 될지를 정해줘요.

```dart
dart
CopyEdit
TextField(
  maxLines: 1, // 기본값, 한 줄
)

```

이렇게 하면 텍스트가 길어져도 한 줄로만 보여요.

```dart
dart
CopyEdit
TextField(
  maxLines: 5,
)

```

이렇게 하면 최대 5줄까지 입력 가능! → 설명처럼 긴 문장 받을 때 유용해요.

---

## ✅ 글자 수 제한: `maxLength`

```dart
dart
CopyEdit
TextField(
  maxLength: 20,
)

```

이렇게 하면 사용자가 **20자까지만 입력**할 수 있어요.

입력창 아래에 `"0 / 20"` 이런 **글자 수 카운터**도 자동으로 보여줘요.

## ⚠️ 주의할 점

- `maxLength`는 **글자 수만 제한**해요.
  → 사용자가 붙여넣기나 자동완성으로 넘어가도 **자동으로 잘라주진 않아요**.
- 완전히 잘라내려면 `inputFormatters`를 써야 해요 (고급 옵션)

1. `dispose()` 작성해 주기

```dart
class MyTextField extends StatefulWidget {
  @override
  _MyTextFieldState createState() => _MyTextFieldState();
}

class _MyTextFieldState extends State<MyTextField> {
  late TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(); // 컨트롤러 생성
  }

  @override
  void dispose() {
    _controller.dispose(); // ✨ 컨트롤러 메모리 정리
    super.dispose();       // 부모 클래스의 dispose도 꼭 호출!
  }

  @override
  Widget build(BuildContext context) {
    return TextField(controller: _controller);
  }
}

```

## 🎯 `dispose()`란?

> 위젯이 화면에서 사라질 때, 메모리 정리를 해주는 함수야.

---

## 💡 왜 필요할까?

Flutter에서 `TextEditingController`, `AnimationController`, `FocusNode` 같은 걸 만들면,

- \*시스템 자원(메모리 등)\*\*을 쓰게 돼.

근데 이걸 그냥 내버려두면 **앱이 느려지거나 메모리 누수(memory leak)**가 생길 수 있어.

그래서 "이 위젯 이제 안 쓰니까, 연결된 자원들도 깔끔하게 정리해줘!"라고 알려줘야 해.

그걸 해주는 게 바로 `dispose()`야.

## ✨ 기억할 것!

- `dispose()`는 **StatefulWidget**일 때만 존재해
- `StatelessWidget`은 한 번 그려지고 끝이라 정리할 게 없음

</div>
</details>

<details>
<summary>

유효성 검사

</summary>
<div markdown="1">

## ✅ 목표: 상품명, 가격 같은 필드를 입력하고

- 값을 안 넣으면 **경고 메시지** 뜨게 하기
- 조건에 따라 커스텀 메시지도 보여주기
- 버튼 누를 때 `form이 유효하면`만 등록 처리

---

## 🧩 구조 흐름

1. `TextFormField` → 한 줄짜리 텍스트 입력 + 유효성 검사 가능
2. `Form` 위젯으로 전체 감싸기
3. `GlobalKey<FormState>`로 폼 상태 추적
4. `validator` 함수로 각 필드 조건 검사
5. 유효하지 않으면 **붉은 경고 텍스트 + 빨간 밑줄**

```dart
class _ProductFormPageState extends State<ProductFormPage> {
  final _formKey = GlobalKey<FormState>();

  final _nameController = TextEditingController();
  final _priceController = TextEditingController();
```

1. Submit 메서드 제작

```dart
void _submitForm() {
    if (_formKey.currentState!.validate()) {
      // 모든 유효성 통과 시
      print("상품명: ${_nameController.text}");
      print("가격: ${_priceController.text}");

      showDialog(
        context: context,
        builder: (_) => AlertDialog(
          title: Text('등록 성공'),
          content: Text('상품이 등록되었습니다!'),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('확인'),
            ),
          ],
        ),
      );
    } else {
      // 유효성 실패 시 자동으로 에러 메시지 표시됨
    }
  }
```

## 🧠 핵심 설명 요약

| 기능                   | 설명                                                      |
| ---------------------- | --------------------------------------------------------- |
| `Form`                 | 여러 `TextFormField`를 묶고 유효성 검사를 할 수 있게 함   |
| `GlobalKey<FormState>` | `.validate()`로 폼 전체의 상태 확인 가능                  |
| `validator:`           | 각 필드에서 조건 검사 후 문자열을 리턴 → 오류 메시지 표시 |
| `.validate()`          | 모든 필드가 통과하면 `true` 리턴                          |
| 경고창                 | `showDialog()`로 간단하게 AlertDialog 띄우기 가능         |

---

## 🎯 꿀팁

- `TextField` → 단순 입력만 가능
- `TextFormField` → **폼 기반 입력 + 유효성 검사**

Flutter에서 `TextField`랑 `TextFormField`는 **비슷해 보이지만 역할과 기능이 다르다**고 보면 돼.

---

## ✅ 간단 비교

| 항목                         | `TextField`              | `TextFormField`                     |
| ---------------------------- | ------------------------ | ----------------------------------- |
| **유효성 검사 (validation)** | ❌ 직접 로직 만들어야 함 | ✅ `validator`로 간편하게 검사 가능 |
| **Form과 연동**              | ❌ 불가능                | ✅ `Form` 위젯과 연동 가능          |
| **입력값 자동 검사**         | ❌ 수동 구현             | ✅ `.validate()`로 전체 검사        |
| **폼 제출**                  | ❌ 직접 값 추적          | ✅ `FormState`로 자동 관리          |
| **기본 용도**                | 단순 입력                | 폼 입력 (회원가입, 상품등록 등)     |

## 🎯 언제 어떤 걸 써야 해?

- ✍️ **그냥 메모나 검색창 같이 간단한 입력만 필요할 때**
  → `TextField`
- 📋 **회원가입, 상품등록, 로그인 등 "폼 기반 입력"일 때**
  → ✅ `TextFormField`
  → 👉 유효성 검사 필요할 땐 무조건 `TextFormField` 써야 편해요!

---

### Validator 제작

```dart
//생성자
final String? Function(String?)? validator;

String? titleValidator(String? value) {
    if (value == null || value.trim().isEmpty) {
      return '상품명을 입력해 주세요!';
    }
    return null;
  }
```

- String 혹은 null이 반환된다
- 반환값은 에러 메시지로서 텍스트필드 아래에 표시된다.

<aside>
❓

하지만 에러메시지가 값을 변경해도 사라지지 않는 에러가 발생했다.

</aside>

## ✅ `TextFormField`의 `validator`는

- **return이 `null`이면**: ✔️ 유효성 검사 통과!
- **return이 `String`이면**: ❌ 검사 실패 → 그 문자열이 **자동으로 아래 붉은 경고 텍스트로 표시돼요**

```dart
dart
CopyEdit
validator: (value) {
  if (value == null || value.isEmpty) {
    return '상품명을 입력해 주세요'; // ← 이게 빨간 글씨로 필드 아래에 표시됨
  }
  return null;
}

```

즉, **이 return 값은 자동으로 화면에 표시되는 용도**예요

따로 알림창을 띄우지 않아도 사용자한테 “여기 잘못됐어요!” 하고 알려줘요 👇

🌟 즉, `validator`는 각 필드의 상태를 체크하고, `.validate()`는 폼 전체가 유효한지를 체크해요!

입력 필드들은 Form 안으로 넣어야 함

`Form`이 `TextFormField`들을 감싸야 `validator`가 작동하고, 붉은 오류 메시지가 보여요!

## ✅ 요약

| 체크 항목                                     | 설명                                     |
| --------------------------------------------- | ---------------------------------------- |
| ✅ `TextFormField`가 `Form` 안에 있음?        | 꼭 감싸야 `validator` 작동해요!          |
| ✅ `FormState.validate()` 호출함?             | `_formKey.currentState!.validate()` 필요 |
| ✅ `validator`에 `return '오류 메시지'` 줬음? | 오류 시 메시지가 표시됨                  |

## 🔁 유효성 검사 다시 실행하려면?

예를 들어, 사용자가 입력을 고쳤을 때 에러 메시지가 자동으로 사라지게 하려면:

```dart
dart
CopyEdit
onChanged: (_) {
  if (_formKey.currentState != null) {
    _formKey.currentState!.validate();
  }
}

```

이걸 `TextFormField`의 `onChanged` 속성에 넣으면 돼요.

</div>
</details>

### int.tryParse와 int.parse의 차이

✅ `int.tryParse()`는

**실패해도 앱이 안 죽어요**

❌ `int.parse()`는

**실패하면 에러 나서 앱이 죽어요**

### 실습한 내용

- 텍스트 필드 제작

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
onChanged : (_){
	if(_formKey.currentState != null){
		_formKey.currentState!.validate();
	}
```

## 📚 내일 학습할 내용

- 상품등록 데이터 넘기기

## 💭 오늘의 회고

- 아침부터 빡공

### 잘한 점 👍

- 프로그래밍에 집중

### 개선할 점 🔨

### 배운 점 💡

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
