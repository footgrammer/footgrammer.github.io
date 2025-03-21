---
slug: rpg-game-error-handling
title: RPG 게임 제작하면서 알게 된 점
authors: [junseok]
tags: [journal, dart]
date: 2025-03-21T20:00
---

# 2025-03-21-rpg-game-error-handling

# 📚 오늘의 학습 내용

- 오늘 최종적으로 과제를 제출할 수 있었다. 과제를 하면서 확실히 어떻게 코드를 구성해야 하는지 생각해 보고 문법 강의에서 배웠던 내용들을 프로젝트에 사용해 봄으로써 내 것으로 만들 수 있었다.
- 무지성으로 프로그래밍을 하다 보면 코드가 지저분해지는데 조금 더 코드 리펙토링을 해 가면서 깔끔하게 쓸 수 있도록 바꿔나가는 게 필요할 것 같다.

## ✍️ 주요 학습 내용

### 새로 알게된 개념

- 생성자에서 일부는 미리 지정을 해줄 때가 헷갈렸는데 아래의 두 가지 방법으로 가능했다!

```dart

class Game{
	late Character character;
	List<Monster> monsterList;
	int killedMonster = 0;

	Game({
		required this.character,
		required this.monsterList
	});

	Game(this.character, this.monsterList);

}
```

### 입력 받기

- 입력받을 때 null handling을 이런 식으로 강사님이 하시고 계셨다.

```dart
stdout.write('이름을 입력해라 짜슥아');
String? name = stdin.readLineSync();

if(name == null){
	return ; // 프로그램 종료
}
```

### 몬스터 입력

- `file.readAsLinesSync()`
  - 이것을 통해서 줄별로 리스트에 넣어줄 수 있다.
  - 이것을 몰라서 `split(’,’)` 으로 코딩을 해서 고쳤다.

```dart
File file = File('monsters.txt');
List<String> lines = file.readAsLinesSync();
// line 단위로 List에 넣어줌
for(var line in lines){
	List<String> stats = line.split(',');
	if(stats.length != 3) throw FormatException('Invalid Monster');
	String name = stats[0];
	String name = int.parse(stats[1]);
	String name = int.parse(stats[2]);
}

```

### 기타

- while 조건문에서 bool 변수를 만들어 줘서 코딩을 했는데 `isNotEmpty` 같은 함수를 활용해서 조금 더 간결하게 코드를 짤 수 있었다.

```dart
throw StateError('몬스터가 없습니다');

max(0, attack - monster.defense);
= 큰 값을 골라주는 것

while(monsterList.isNotEmpty){}
```

### 정규표현식

```dart
RegExp(r'^[a-zA-Z가-힣]+$').hasMatch(name);
// regular expression
```

### 결과저장

```dart
//game class
saveResult(){}
```

### 랜덤 30%

- 100 중에서 30까지 나오면 실행

```dart
Random random = Random();

```

- 도전 기능 메서드로 구현하기!

```dart
increaseDefence(){
	defence += 2;
}
```

### 실습한 내용

- RPG game 만들기

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
List<String> lines = file.readAsLinesSync();
```

## 📚 내일 학습할 내용

- 과제 코드 리펙토링

## 💭 오늘의 회고

### 잘한 점 👍

- 과제 마무리한 것

### 개선할 점 🔨

- 과제 복습 및 문법 부족한 부분 복습하자

### 배운 점 💡

- 여러 가지

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
